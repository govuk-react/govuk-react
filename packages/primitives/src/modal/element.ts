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
 *   else closes it. Changing `open` fires no change event.
 * - It fires a bubbling `govuk-react-modal:change` event with `{ open }` when the dialog opens
 *   or closes, for code that doesn't use React.
 *
 * Markup inside the element:
 * - a `dialog` with an id
 * - `button`s with `commandfor` set to the dialog's id, and `command` set to "show-modal",
 *   "close" or "request-close"
 */

import { setUpWhenReady } from '../utils/set-up-when-ready';

declare global {
  interface HTMLElementEventMap {
    'govuk-react-modal:change': CustomEvent<{ open: boolean }>;
  }
}

export const tagName = 'govuk-react-modal';

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

    // Runs the commands of the element's own buttons when the browser can't.
    private readonly onClick = (event: MouseEvent) => {
      const button = event.target instanceof Element ? event.target.closest('button[commandfor]') : null;
      if (!(button instanceof HTMLButtonElement) || button.closest(tagName) !== this) return;
      const dialog = document.getElementById(button.getAttribute('commandfor') ?? '');
      if (!(dialog instanceof HTMLDialogElement)) return;
      const command = button.getAttribute('command');
      if (command === 'show-modal' && !dialog.open) dialog.showModal();
      else if (command === 'close' && dialog.open) dialog.close();
      else if (command === 'request-close' && dialog.open) {
        // Newer than this package's DOM types.
        const requestClose: unknown = Reflect.get(dialog, 'requestClose');
        if (typeof requestClose === 'function') requestClose.call(dialog);
        else dialog.close();
      }
    };

    private readonly onToggle = () => {
      const { dialog } = this;
      if (!dialog || dialog.open === this.wasOpen) return;
      this.wasOpen = dialog.open;
      this.dispatchEvent(new CustomEvent('govuk-react-modal:change', { detail: { open: dialog.open }, bubbles: true }));
    };

    connectedCallback() {
      if (!supportsCommands()) this.addEventListener('click', this.onClick);
      this.observer = setUpWhenReady(this, () => this.setup());
    }

    disconnectedCallback() {
      this.removeEventListener('click', this.onClick);
      this.observer?.disconnect();
      this.dialog?.removeEventListener('close', this.onToggle);
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
      this.wasOpen = dialog.open;
      // `toggle` fires on open and close where supported, and `close` everywhere.
      dialog.addEventListener('toggle', this.onToggle);
      dialog.addEventListener('close', this.onToggle);
      this.sync();
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
      if (open && dialog.isConnected) dialog.showModal();
      else if (!open) dialog.close();
    }
  }

  if (!customElements.get(tagName)) customElements.define(tagName, GovukReactModal);
}
