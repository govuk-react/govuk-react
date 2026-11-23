/*
 * Controls a <govuk-react-modal>'s dialog, for React's parts or any other code. It's kept apart
 * from the element so that the element's inline script stays small for pages that never control
 * it.
 *
 * Set `open` to `true` or `false` to control the dialog: `true` opens it with `showModal()` and
 * `false` closes it. While it's set, the buttons and Escape don't open or close the dialog: the
 * element fires `govuk-react-modal:change` with the state asked for, and the dialog changes only
 * when `open` does. That covers a `form` with `method="dialog"`, and a script calling
 * `showModal()` where the browser fires `beforetoggle` on dialogs (Chrome 132, Firefox 133,
 * Safari 26). Escape is cancelled at its `keydown`, since the `cancel` event of a second Escape
 * in a row isn't cancelable. The browser doesn't let a page cancel a script calling `close()`:
 * the dialog goes back to `open` a moment later unless `open` has changed. Set `open` to
 * `undefined` to stop controlling the dialog.
 */

import { setUpWhenReady } from '../utils/set-up-when-ready.js';
import { supportsCommands, tagName } from './element.js';

// How long the page has to accept a change the controller couldn't cancel, before it's undone.
const restoreDelay = 100;

/** Whether Escape would close a popover in the dialog, not the dialog. A manual popover stays. */
function hasOpenPopover(dialog: HTMLDialogElement) {
  try {
    return Array.from(dialog.querySelectorAll(':popover-open')).some(
      (popover) => popover.getAttribute('popover') !== 'manual'
    );
  } catch {
    // No popovers in this browser.
    return false;
  }
}

export class ModalController {
  readonly element: HTMLElement;

  private controlledOpen?: boolean;

  private dialog?: HTMLDialogElement;

  private readonly observer?: MutationObserver;

  private openObserver?: MutationObserver;

  private restoreTimeout?: number;

  private syncing = false;

  constructor(element: HTMLElement) {
    this.element = element;
    if (!supportsCommands()) element.addEventListener('click', this.onClick, true);
    element.addEventListener('submit', this.onSubmit);
    window.addEventListener('keydown', this.onKeydown);
    this.observer = setUpWhenReady(element, () => this.setup());
  }

  get open(): boolean | undefined {
    return this.controlledOpen;
  }

  set open(open: boolean | null | undefined) {
    this.controlledOpen = open ?? undefined;
    if (open == null) window.clearTimeout(this.restoreTimeout);
    this.sync();
  }

  /** Stops controlling the dialog and listening to it. */
  disconnect() {
    this.controlledOpen = undefined;
    window.clearTimeout(this.restoreTimeout);
    this.element.removeEventListener('click', this.onClick, true);
    this.element.removeEventListener('submit', this.onSubmit);
    window.removeEventListener('keydown', this.onKeydown);
    this.observer?.disconnect();
    this.openObserver?.disconnect();
    this.dialog?.removeEventListener('command', this.onCommand);
    this.dialog?.removeEventListener('cancel', this.onCancel);
    this.dialog?.removeEventListener('beforetoggle', this.onBeforeToggle);
    this.dialog = undefined;
  }

  private setup() {
    const dialog = Array.from(this.element.querySelectorAll('dialog')).find(
      (found) => found.closest(tagName) === this.element
    );
    if (!dialog) return false;
    this.dialog = dialog;
    // Not every browser fires `toggle` on dialogs, so watch the dialog's `open` attribute.
    this.openObserver = new MutationObserver(this.onToggle);
    this.openObserver.observe(dialog, { attributes: true, attributeFilter: ['open'] });
    dialog.addEventListener('command', this.onCommand);
    dialog.addEventListener('cancel', this.onCancel);
    dialog.addEventListener('beforetoggle', this.onBeforeToggle);
    this.sync();
    return true;
  }

  // In a browser without invoker commands, cancelling the click stops the element running it.
  private readonly onClick = (event: MouseEvent) => {
    const button = event.target instanceof Element ? event.target.closest('button[commandfor]') : null;
    if (!(button instanceof HTMLButtonElement) || button.closest(tagName) !== this.element) return;
    const dialog = document.getElementById(button.getAttribute('commandfor') ?? '');
    if (dialog instanceof HTMLDialogElement && this.request(dialog, button.getAttribute('command')))
      event.preventDefault();
  };

  private readonly onCommand = (event: Event) => {
    const { dialog } = this;
    const command: unknown = Reflect.get(event, 'command');
    if (!dialog || event.target !== dialog || event.defaultPrevented || typeof command !== 'string') return;
    if (this.request(dialog, command)) event.preventDefault();
  };

  // A script opening the dialog, where the browser fires `beforetoggle` on dialogs.
  private readonly onBeforeToggle = (event: Event) => {
    const { dialog } = this;
    if (!dialog || event.target !== dialog || this.syncing || !event.cancelable) return;
    if (Reflect.get(event, 'newState') !== 'open' || this.controlledOpen === true) return;
    if (this.request(dialog, 'show-modal')) event.preventDefault();
  };

  // Escape, before the browser asks the dialog to close: it lets a page cancel that only once in
  // a row. Heard on the window, so a key that anything else handled first, React's handlers
  // included, is left. So is one that closes a popover open in the dialog.
  private readonly onKeydown = (event: KeyboardEvent) => {
    const { dialog } = this;
    const { target } = event;
    if (!dialog || event.key !== 'Escape' || event.defaultPrevented || event.isComposing) return;
    if (!(target instanceof Element) || target.closest('dialog') !== dialog) return;
    if (dialog.getAttribute('closedby') === 'none' || hasOpenPopover(dialog)) return;
    if (this.request(dialog, 'request-close')) event.preventDefault();
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

  // While controlled, a change the controller couldn't cancel is undone.
  private readonly onToggle = () => {
    if (this.controlledOpen === undefined || this.dialog?.open === this.controlledOpen) return;
    window.clearTimeout(this.restoreTimeout);
    this.restoreTimeout = window.setTimeout(() => this.sync(), restoreDelay);
  };

  /**
   * While controlled, fires the change event for the state a command asks for, in place of
   * running it. Returns whether the command was handled.
   */
  private request(dialog: HTMLDialogElement, command: string | null) {
    if (this.controlledOpen === undefined) return false;
    const open = command === 'show-modal';
    if (!open && command !== 'close' && command !== 'request-close') return false;
    if (open !== dialog.open)
      this.element.dispatchEvent(new CustomEvent('govuk-react-modal:change', { detail: { open }, bubbles: true }));
    return true;
  }

  /** Opens or closes the dialog to match `open`. */
  private sync() {
    const { dialog } = this;
    const open = this.controlledOpen;
    if (!dialog || open === undefined || open === dialog.open) return;
    this.syncing = true;
    try {
      if (open && dialog.isConnected) dialog.showModal();
      else if (!open) dialog.close();
    } finally {
      this.syncing = false;
    }
  }
}
