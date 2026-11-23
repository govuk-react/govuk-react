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
 * - In a browser without invoker commands, it runs the commands of its own buttons, unless the
 *   button's click is cancelled, as the browser's own commands are.
 * - It fires a bubbling `govuk-react-modal:change` event with `{ open }` when the dialog opens
 *   or closes, for code that doesn't use React.
 *
 * To control the dialog, use `ModalController` from `modal-controller`.
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
  interface HTMLElementTagNameMap {
    'govuk-react-modal': ModalElement;
  }
  interface HTMLElementEventMap {
    'govuk-react-modal:change': CustomEvent<{ open: boolean }>;
  }
}

export const tagName = 'govuk-react-modal';

export type ModalElement = HTMLElement;

/** Whether the browser runs invoker commands itself. */
export const supportsCommands = () =>
  typeof HTMLButtonElement !== 'undefined' && 'command' in HTMLButtonElement.prototype;

if (typeof HTMLElement !== 'undefined' && typeof customElements !== 'undefined') {
  class GovukReactModal extends HTMLElement {
    private dialog?: HTMLDialogElement;

    private observer?: MutationObserver;

    private openObserver?: MutationObserver;

    private wasOpen = false;

    // Runs the commands of the element's own buttons when the browser can't.
    private readonly onClick = (event: MouseEvent) => {
      if (event.defaultPrevented) return;
      const button = event.target instanceof Element ? event.target.closest('button[commandfor]') : null;
      if (!(button instanceof HTMLButtonElement) || button.closest(tagName) !== this) return;
      const dialog = document.getElementById(button.getAttribute('commandfor') ?? '');
      if (!(dialog instanceof HTMLDialogElement)) return;
      const command = button.getAttribute('command');
      if (command === 'show-modal' && !dialog.open) dialog.showModal();
      else if (command === 'close' && dialog.open) dialog.close();
      else if (command === 'request-close' && dialog.open) {
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
      this.openObserver?.disconnect();
      this.dialog = undefined;
    }

    private setup() {
      if (this.dialog) return true;
      const dialog = Array.from(this.querySelectorAll('dialog')).find((found) => found.closest(tagName) === this);
      if (!dialog) return false;
      this.dialog = dialog;
      this.dataset.upgraded = '';
      this.wasOpen = dialog.open;
      // Not every browser fires `toggle` on dialogs, so watch the dialog's `open` attribute.
      this.openObserver = new MutationObserver(this.onToggle);
      this.openObserver.observe(dialog, { attributes: true, attributeFilter: ['open'] });
      return true;
    }
  }

  if (!customElements.get(tagName)) customElements.define(tagName, GovukReactModal);
}
