/*
 * <govuk-react-modal>: a headless, light-DOM custom element around a modal `dialog` and the
 * buttons that open and close it.
 *
 * The buttons use invoker commands (`command="show-modal"` or `command="close"`, with
 * `commandfor` naming the dialog), so a browser that supports them opens a true modal dialog
 * with no JavaScript: the page behind is inert, focus moves into the dialog and Escape closes
 * it. The `dialog` element is the state.
 *
 * The element only adds what HTML can't do on its own:
 * - In a browser without invoker commands, it runs the commands of its own buttons.
 * - `open` (when present) controls the dialog: "true" opens it with `showModal()`, anything
 *   else closes it. Changing `open` fires no change event. While `open` is present, the buttons
 *   and Escape don't open or close the dialog: they fire the change event with the state asked
 *   for, and the dialog changes only when `open` does. That covers a `form` with
 *   `method="dialog"`, and a script calling `showModal()` where the browser fires `beforetoggle`
 *   on dialogs. The browser doesn't let a page cancel a script calling `close()`, or a second
 *   Escape in a row with no other key or click between, whose `cancel` event isn't cancelable.
 *   Those fire the change event, and the dialog goes back to `open` a moment later unless `open`
 *   has changed.
 * - It fires a bubbling `govuk-react-modal:change` event with `{ open }` when the dialog opens
 *   or closes, for code that doesn't use React.
 *
 * While upgraded it sets `data-upgraded`.
 *
 * Markup inside the element:
 * - a `dialog` with an id
 * - `button`s with `commandfor` set to the dialog's id, and `command` set to "show-modal",
 *   "close" or "request-close"
 */

import { setUpWhenReady } from '../utils/set-up-when-ready.js';

declare global {
  interface HTMLElementEventMap {
    'govuk-react-modal:change': CustomEvent<{ open: boolean }>;
  }
}

export const tagName = 'govuk-react-modal';

// How long the page has to accept a change the element couldn't cancel, before it's undone.
const restoreDelay = 100;

/** Whether the browser runs invoker commands itself. */
export const supportsCommands = () =>
  typeof HTMLButtonElement !== 'undefined' && 'command' in HTMLButtonElement.prototype;

if (typeof HTMLElement !== 'undefined' && typeof customElements !== 'undefined') {
  class GovukReactModal extends HTMLElement {
    static get observedAttributes() {
      return ['open'];
    }

    private dialog?: HTMLDialogElement;

    private observer?: MutationObserver;

    private wasOpen = false;

    private restoreTimeout?: number;

    private syncing = false;

    // Runs the commands of the element's own buttons when the browser can't.
    private readonly onClick = (event: MouseEvent) => {
      const button = event.target instanceof Element ? event.target.closest('button[commandfor]') : null;
      if (!(button instanceof HTMLButtonElement) || button.closest(tagName) !== this) return;
      const dialog = document.getElementById(button.getAttribute('commandfor') ?? '');
      if (!(dialog instanceof HTMLDialogElement)) return;
      const command = button.getAttribute('command');
      if (this.request(dialog, command)) return;
      if (command === 'show-modal' && !dialog.open) dialog.showModal();
      else if (command === 'close' && dialog.open) dialog.close();
      else if (command === 'request-close' && dialog.open) {
        // Newer than this package's DOM types.
        const requestClose: unknown = Reflect.get(dialog, 'requestClose');
        if (typeof requestClose === 'function') requestClose.call(dialog);
        else dialog.close();
      }
    };

    // While controlled, the browser's own commands and Escape only ask for a change.
    private readonly onCommand = (event: Event) => {
      const { dialog } = this;
      const command: unknown = Reflect.get(event, 'command');
      if (!dialog || event.target !== dialog || typeof command !== 'string') return;
      if (this.request(dialog, command)) event.preventDefault();
    };

    // A script opening the dialog, where the browser fires `beforetoggle` on dialogs.
    private readonly onBeforeToggle = (event: Event) => {
      const { dialog } = this;
      if (!dialog || event.target !== dialog || this.syncing || !event.cancelable) return;
      if (Reflect.get(event, 'newState') !== 'open' || this.getAttribute('open') === 'true') return;
      if (this.request(dialog, 'show-modal')) event.preventDefault();
    };

    private readonly onCancel = (event: Event) => {
      const { dialog } = this;
      if (!dialog || event.target !== dialog) return;
      if (this.request(dialog, 'request-close')) event.preventDefault();
    };

    // A form with `method="dialog"` closes its dialog when submitted.
    private readonly onSubmit = (event: SubmitEvent) => {
      const { dialog } = this;
      const form = event.target;
      if (!dialog || !(form instanceof HTMLFormElement) || form.closest('dialog') !== dialog) return;
      const { submitter } = event;
      const method =
        (submitter instanceof HTMLButtonElement || submitter instanceof HTMLInputElement) &&
        submitter.hasAttribute('formmethod')
          ? submitter.formMethod
          : form.method;
      if (method === 'dialog' && this.request(dialog, 'close')) event.preventDefault();
    };

    private readonly onToggle = () => {
      const { dialog } = this;
      if (!dialog || dialog.open === this.wasOpen) return;
      this.wasOpen = dialog.open;
      this.dispatchEvent(new CustomEvent('govuk-react-modal:change', { detail: { open: dialog.open }, bubbles: true }));
      // While controlled, this is a change the element couldn't cancel.
      if (!this.hasAttribute('open')) return;
      window.clearTimeout(this.restoreTimeout);
      this.restoreTimeout = window.setTimeout(() => this.sync(), restoreDelay);
    };

    connectedCallback() {
      if (!supportsCommands()) this.addEventListener('click', this.onClick);
      this.addEventListener('submit', this.onSubmit);
      this.observer = setUpWhenReady(this, () => this.setup());
    }

    disconnectedCallback() {
      this.removeEventListener('click', this.onClick);
      this.removeEventListener('submit', this.onSubmit);
      window.clearTimeout(this.restoreTimeout);
      this.observer?.disconnect();
      this.dialog?.removeEventListener('close', this.onToggle);
      this.dialog?.removeEventListener('command', this.onCommand);
      this.dialog?.removeEventListener('cancel', this.onCancel);
      this.dialog?.removeEventListener('beforetoggle', this.onBeforeToggle);
      this.dialog?.removeEventListener('toggle', this.onToggle);
      this.dialog = undefined;
    }

    attributeChangedCallback() {
      this.sync();
    }

    private setup() {
      if (this.dialog) return true;
      const dialog = Array.from(this.querySelectorAll('dialog')).find((found) => found.closest(tagName) === this);
      if (!dialog) return false;
      this.dialog = dialog;
      this.dataset.upgraded = '';
      this.wasOpen = dialog.open;
      // `toggle` fires on open and close where supported, and `close` everywhere.
      dialog.addEventListener('toggle', this.onToggle);
      dialog.addEventListener('close', this.onToggle);
      dialog.addEventListener('command', this.onCommand);
      dialog.addEventListener('cancel', this.onCancel);
      dialog.addEventListener('beforetoggle', this.onBeforeToggle);
      this.sync();
      return true;
    }

    /**
     * While controlled, fires the change event for the state a command asks for, in place of
     * running it. Returns whether the command was handled.
     */
    private request(dialog: HTMLDialogElement, command: string | null) {
      if (!this.hasAttribute('open')) return false;
      const open = command === 'show-modal';
      if (!open && command !== 'close' && command !== 'request-close') return false;
      if (open !== dialog.open)
        this.dispatchEvent(new CustomEvent('govuk-react-modal:change', { detail: { open }, bubbles: true }));
      return true;
    }

    /** Opens or closes the dialog to match `open`, without reporting it. */
    private sync() {
      const { dialog } = this;
      const controlled = this.getAttribute('open');
      if (!dialog || controlled === null) return;
      const open = controlled === 'true';
      if (open === dialog.open) return;
      this.wasOpen = open;
      this.syncing = true;
      try {
        if (open && dialog.isConnected) dialog.showModal();
        else if (!open) dialog.close();
      } finally {
        this.syncing = false;
      }
    }
  }

  if (!customElements.get(tagName)) customElements.define(tagName, GovukReactModal);
}
