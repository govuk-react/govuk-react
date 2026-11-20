/*
 * <govuk-react-file-upload>: a headless, light-DOM custom element that turns a file input into a
 * button and drop zone, with or without React, as govuk-frontend's improved file upload does.
 *
 * The input's files are the state. Without JavaScript the native file input shows and the button
 * stays hidden. On upgrade the element hides the input and shows the button, which opens the file
 * picker, says which files are chosen, and takes files dropped on it. The rendered markup is never
 * moved, so React can keep rendering it.
 *
 * As in govuk-frontend, the button takes the input's `id`, so its label names the button, and the
 * input's id gets `-input` added. The button also takes the input's `aria-describedby` and
 * `disabled`, and its accessible name is the label, the separator and its own text.
 *
 * Markup inside the element:
 * - `input[type="file"]`: the field, with an `id` and a `label`. Hidden on upgrade.
 * - `button[data-file-upload-button]`: rendered `hidden`, with `type="button"`.
 *   - `[data-file-upload-status]`: which files are chosen.
 *   - `[data-file-upload-separator]` (optional): between the label and the button's text in its
 *     accessible name, such as a visually hidden comma.
 * - `[data-file-upload-drop-zone]` (optional): the area that shows dragging. The element itself
 *   without one.
 * - `[data-file-upload-announcements]` (optional): a visually hidden live region for entering and
 *   leaving the drop zone.
 *
 * The button gets `data-empty` while no file is chosen and `data-dragging` while files are dragged
 * over the drop zone, and the drop zone gets `data-disabled`.
 *
 * Attributes:
 * - `no-file-chosen`, `multiple-files-chosen`, `entered-drop-zone`, `left-drop-zone`: the text,
 *   English by default, with `%{count}` for the number of files. Add a plural form to the name,
 *   such as `multiple-files-chosen-one`, for a message for each form.
 * - `empty-class`, `dragging-class`: classes for the button while empty and while dragging.
 * - `disabled-class`: classes for the drop zone while the input is disabled.
 */

import {
  translate,
  translationAttributeNames,
  translationFromAttributes,
  type Translation,
} from '../utils/translation.js';
import { classesOf, setText, setAttribute } from '../utils/dom.js';

export const tagName = 'govuk-react-file-upload';

export interface FileUploadElement extends HTMLElement {
  /** Updates the button from the input's files, such as after setting them. */
  update(): void;
}

declare global {
  interface HTMLElementTagNameMap {
    'govuk-react-file-upload': FileUploadElement;
  }
}

/** govuk-frontend's English text. */
export const defaults = {
  'no-file-chosen': 'No file chosen',
  'multiple-files-chosen': { one: '%{count} file chosen', other: '%{count} files chosen' },
  'entered-drop-zone': 'Entered drop zone',
  'left-drop-zone': 'Left drop zone',
} satisfies Record<string, Translation>;

/** What the status says for the files chosen. */
export function statusText(
  files: ArrayLike<{ name: string }>,
  messages: { 'no-file-chosen'?: Translation; 'multiple-files-chosen'?: Translation },
  locale?: string
) {
  if (files.length === 0) return translate(messages['no-file-chosen'] ?? defaults['no-file-chosen'], 0, locale);
  if (files.length === 1) return files[0].name;
  return translate(messages['multiple-files-chosen'] ?? defaults['multiple-files-chosen'], files.length, locale);
}

const countFiles = (items: DataTransferItemList) => Array.from(items).filter((item) => item.kind === 'file').length;

if (typeof HTMLElement !== 'undefined' && typeof customElements !== 'undefined') {
  class GovukReactFileUpload extends HTMLElement implements FileUploadElement {
    static get observedAttributes() {
      return [
        'empty-class',
        'dragging-class',
        'disabled-class',
        ...Object.keys(defaults).flatMap(translationAttributeNames),
      ];
    }

    private input?: HTMLInputElement;

    private button?: HTMLButtonElement;

    private form?: HTMLFormElement | null;

    /** The input's id before upgrade, which the button takes. */
    private fieldId = '';

    private dragging = false;

    private enteredAnotherElement = false;

    private observer?: MutationObserver;

    private readonly onChange = () => this.update();

    private readonly onReset = () => window.setTimeout(() => this.update());

    private readonly onClick = () => this.input?.click();

    private readonly onDragOver = (event: DragEvent) => event.preventDefault();

    private readonly onDrop = (event: DragEvent) => {
      event.preventDefault();
      const { input } = this;
      const files = event.dataTransfer?.files;
      if (!input || !files || !this.matchesCapacity(files.length)) return;
      input.files = files;
      // Bubbles, unlike govuk-frontend's, so React's `onChange` hears dropped files too.
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
      this.setDragging(false);
    };

    private readonly onDocumentDragEnter = (event: DragEvent) => {
      this.enteredAnotherElement = true;
      if (!this.button || this.button.disabled || !(event.target instanceof Node)) return;
      if (this.dropZone.contains(event.target)) {
        if (event.dataTransfer && this.canDrop(event.dataTransfer) && !this.dragging) {
          this.setDragging(true);
          this.announce('entered-drop-zone');
        }
      } else if (this.dragging) {
        this.setDragging(false);
        this.announce('left-drop-zone');
      }
    };

    // Leaving the window, or dragging back out of it, fires `dragleave` with no `dragenter`.
    private readonly onDocumentDragLeave = () => {
      if (!this.enteredAnotherElement && this.dragging && !this.button?.disabled) {
        this.setDragging(false);
        this.announce('left-drop-zone');
      }
      this.enteredAnotherElement = false;
    };

    connectedCallback() {
      // The parts may be parsed or rendered later, and React can rewrite the input's attributes.
      this.observer = new MutationObserver(() => this.setup());
      this.observer.observe(this, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class', 'disabled', 'id', 'aria-describedby'],
      });
      document.addEventListener('dragenter', this.onDocumentDragEnter);
      document.addEventListener('dragleave', this.onDocumentDragLeave);
      this.setup();
    }

    disconnectedCallback() {
      this.observer?.disconnect();
      document.removeEventListener('dragenter', this.onDocumentDragEnter);
      document.removeEventListener('dragleave', this.onDocumentDragLeave);
      this.unbind();
    }

    attributeChangedCallback() {
      // Wait for every attribute: React sets them one by one before connecting the element.
      if (this.isConnected) this.update();
    }

    private own<E extends Element>(selector: string) {
      return Array.from(this.querySelectorAll<E>(selector)).find((element) => element.closest(tagName) === this);
    }

    private get dropZone(): HTMLElement {
      return this.own<HTMLElement>('[data-file-upload-drop-zone]') ?? this;
    }

    private get locale() {
      return this.closest('[lang]')?.getAttribute('lang') || 'en';
    }

    private message(name: keyof typeof defaults) {
      return translationFromAttributes(this, name) ?? defaults[name];
    }

    private setup() {
      const input = this.own<HTMLInputElement>('input[type="file"]');
      const button = this.own<HTMLButtonElement>('button[data-file-upload-button]');
      if (!input || !button) return;
      // A new input, or a new id from React, rather than the one the element gave it.
      if (input.id !== `${this.fieldId}-input`) this.fieldId = input.id;
      if (!this.fieldId) return;
      if (input !== this.input || button !== this.button) {
        this.unbind();
        this.input = input;
        this.button = button;
        this.form = input.form;
        input.addEventListener('change', this.onChange);
        this.form?.addEventListener('reset', this.onReset);
        button.addEventListener('click', this.onClick);
        button.addEventListener('dragover', this.onDragOver);
        button.addEventListener('drop', this.onDrop);
      }
      this.upgrade(input, button);
      this.update();
    }

    private unbind() {
      this.input?.removeEventListener('change', this.onChange);
      this.form?.removeEventListener('reset', this.onReset);
      this.button?.removeEventListener('click', this.onClick);
      this.button?.removeEventListener('dragover', this.onDragOver);
      this.button?.removeEventListener('drop', this.onDrop);
      this.input = undefined;
      this.button = undefined;
      this.form = undefined;
    }

    /** Moves the id to the button, names it, and swaps it for the input, as govuk-frontend does. */
    private upgrade(input: HTMLInputElement, button: HTMLButtonElement) {
      const id = this.fieldId;
      const root = this.getRootNode();
      const label =
        root instanceof Document || root instanceof ShadowRoot
          ? root.querySelector(`label[for="${CSS.escape(id)}"]`)
          : null;
      if (label && !label.id) label.id = `${id}-label`;
      setAttribute(input, 'id', `${id}-input`);
      setAttribute(button, 'id', id);
      const separator = button.querySelector('[data-file-upload-separator]');
      if (separator) setAttribute(separator, 'id', `${id}-comma`);
      if (label) {
        setAttribute(button, 'aria-labelledby', [label.id, separator?.id, id].filter(Boolean).join(' '));
      }
      setAttribute(button, 'aria-describedby', input.getAttribute('aria-describedby'));
      setAttribute(input, 'hidden', 'hidden');
      if (button.hidden) button.hidden = false;
      this.dataset.upgraded = '';
    }

    update() {
      const { input, button } = this;
      if (!input || !button) return;
      const { files } = input;
      const empty = !files?.length;
      const status = button.querySelector('[data-file-upload-status]');
      if (status) {
        setText(
          status,
          statusText(
            files ?? [],
            {
              'no-file-chosen': this.message('no-file-chosen'),
              'multiple-files-chosen': this.message('multiple-files-chosen'),
            },
            this.locale
          )
        );
      }
      // `toggle` with force leaves a class that's already there alone, so the observer isn't woken.
      setAttribute(button, 'data-empty', empty ? '' : null);
      classesOf(this.getAttribute('empty-class')).forEach((name) => button.classList.toggle(name, empty));
      if (button.disabled !== input.disabled) button.disabled = input.disabled;
      const zone = this.dropZone;
      setAttribute(zone, 'data-disabled', input.disabled ? '' : null);
      classesOf(this.getAttribute('disabled-class')).forEach((name) => zone.classList.toggle(name, input.disabled));
      if (input.disabled) this.setDragging(false);
      else this.renderDragging();
    }

    private setDragging(dragging: boolean) {
      this.dragging = dragging;
      this.renderDragging();
    }

    private renderDragging() {
      const { button, dragging } = this;
      if (!button) return;
      setAttribute(button, 'data-dragging', dragging ? '' : null);
      classesOf(this.getAttribute('dragging-class')).forEach((name) => button.classList.toggle(name, dragging));
    }

    private announce(name: 'entered-drop-zone' | 'left-drop-zone') {
      const announcements = this.own('[data-file-upload-announcements]');
      // Replaces the text node every time, so screen readers hear the same message again.
      if (announcements) announcements.textContent = translate(this.message(name), 0, this.locale);
    }

    private canDrop(dataTransfer: DataTransfer) {
      if (dataTransfer.items.length) return this.matchesCapacity(countFiles(dataTransfer.items));
      if (dataTransfer.types.length) return dataTransfer.types.includes('Files');
      return true;
    }

    private matchesCapacity(count: number) {
      return this.input?.multiple ? count > 0 : count === 1;
    }
  }

  if (!customElements.get(tagName)) customElements.define(tagName, GovukReactFileUpload);
}
