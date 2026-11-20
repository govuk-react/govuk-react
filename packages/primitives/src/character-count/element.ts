/*
 * <govuk-react-character-count>: a headless, light-DOM custom element that tells users how many
 * characters or words they can still enter, with or without React.
 *
 * Without JavaScript the field shows its description, such as "You can enter up to 200
 * characters". On upgrade the element visually hides the description, shows the count, and keeps
 * it up to date as the user types. As in govuk-frontend, screen readers hear the count once the
 * user pauses, rather than on every key.
 *
 * Markup inside the element:
 * - `[data-character-count-input]`: a `textarea` or `input`. Its `maxlength` is removed on
 *   upgrade, so users can type past the limit and see by how much.
 * - `[data-character-count-description]`: the description, for `aria-describedby`.
 * - `[data-character-count-status]`: the visible count, rendered `hidden` with `aria-hidden`.
 * - `[data-character-count-sr-status]`: the count for screen readers, rendered `hidden` with
 *   `aria-live="polite"`. Make it visually hidden.
 *
 * The statuses get `data-state`, "under", "at" or "over" the limit. The visible one gets
 * `data-below-threshold` while the count is below `threshold`, and the one for screen readers gets
 * `aria-hidden` then.
 *
 * Attributes:
 * - `maxlength`: the limit. Without it, the element doesn't upgrade.
 * - `count-type`: "length" (the default) counts UTF-16 code units, as `maxlength` does;
 *   "characters" counts characters as users see them; "words" counts words.
 * - `threshold`: the percentage of the limit from which the count is shown.
 * - `characters-under-limit`, `characters-at-limit`, `characters-over-limit`, `words-under-limit`,
 *   `words-at-limit`, `words-over-limit`: the messages, English by default, with `%{count}` for
 *   the number. Add a plural form to the name, such as `characters-under-limit-one`, for a
 *   message for each form.
 * - `hidden-description-class`: classes that visually hide the description. Without them, the
 *   element visually hides it with inline styles.
 * - `within-limit-class`, `over-limit-class`, `below-threshold-class`: classes for the visible
 *   count.
 * - `input-over-limit-class`: classes for the field while over the limit.
 */

import { onPropertySet } from '../utils/on-property-set.js';
import { translationAttributeNames } from '../utils/translation.js';
import { countMessage, countOf, messageFromAttributes, messageNames, type CountType } from './messages.js';
import { classesOf, setText } from '../utils/dom.js';

export const tagName = 'govuk-react-character-count';

export interface CharacterCountElement extends HTMLElement {
  /** The count, once upgraded. */
  readonly count: number | undefined;
  /** Counts the field again and updates the visible count, such as after setting its value. */
  update(): void;
}

declare global {
  interface HTMLElementTagNameMap {
    'govuk-react-character-count': CharacterCountElement;
  }
}

// The same visually hidden styles as govuk-frontend's.
const visuallyHidden: Record<string, string> = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  margin: '0',
  padding: '0',
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  'clip-path': 'inset(50%)',
  border: '0',
  'white-space': 'nowrap',
};

const isField = (element: Element | undefined): element is HTMLTextAreaElement | HTMLInputElement =>
  element instanceof HTMLTextAreaElement || element instanceof HTMLInputElement;

if (typeof HTMLElement !== 'undefined' && typeof customElements !== 'undefined') {
  class GovukReactCharacterCount extends HTMLElement implements CharacterCountElement {
    static get observedAttributes() {
      return [
        'maxlength',
        'count-type',
        'threshold',
        'within-limit-class',
        'over-limit-class',
        'below-threshold-class',
        'input-over-limit-class',
        ...messageNames.flatMap(translationAttributeNames),
      ];
    }

    private input?: HTMLTextAreaElement | HTMLInputElement;

    private currentCount = 0;

    private lastInputTime?: number;

    private lastAnnouncedValue?: string;

    private checker?: number;

    private observer?: MutationObserver;

    private stopWatchingValue?: () => void;

    private readonly onInput = () => {
      this.update();
      this.lastInputTime = Date.now();
    };

    // As in govuk-frontend: while focused, announce the count once the user pauses typing.
    private readonly onFocus = () => {
      window.clearInterval(this.checker);
      this.checker = window.setInterval(() => {
        if (!this.lastInputTime || Date.now() - 500 >= this.lastInputTime) this.announceIfChanged();
      }, 1000);
    };

    private readonly onBlur = () => window.clearInterval(this.checker);

    // `reset` changes the value with no event, after it fires.
    private readonly onReset = (event: Event) => {
      if (this.input && event.target === this.input.form) window.setTimeout(() => this.update());
    };

    // A page restored from the back-forward cache, or a browser that restores the field's value.
    private readonly onPageShow = () => {
      if (!this.input) return;
      this.update();
      this.announceIfChanged();
    };

    get count() {
      return this.input ? this.currentCount : undefined;
    }

    connectedCallback() {
      // The parts may be parsed or rendered later, and React can rewrite a class attribute.
      this.observer = new MutationObserver((records) => {
        if (records.some((record) => record.type === 'childList')) this.setup();
        else this.update();
      });
      // React can rewrite a class, or put back the field's `maxlength`.
      this.observer.observe(this, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class', 'maxlength'],
      });
      window.addEventListener('pageshow', this.onPageShow);
      document.addEventListener('reset', this.onReset, true);
      this.setup();
    }

    disconnectedCallback() {
      this.observer?.disconnect();
      window.removeEventListener('pageshow', this.onPageShow);
      document.removeEventListener('reset', this.onReset, true);
      window.clearInterval(this.checker);
      this.unbind();
    }

    attributeChangedCallback() {
      // Wait for every attribute: React sets them one by one before connecting the element.
      if (!this.isConnected) return;
      if (!this.input) {
        this.setup();
        return;
      }
      if (this.maxLength === undefined) {
        this.downgrade();
        return;
      }
      // Screen readers hear the new count when the user next pauses.
      this.lastAnnouncedValue = undefined;
      this.update();
    }

    private own(selector: string) {
      return Array.from(this.querySelectorAll<HTMLElement>(selector)).find(
        (element) => element.closest(tagName) === this
      );
    }

    private get maxLength() {
      const value = Number(this.getAttribute('maxlength'));
      return this.hasAttribute('maxlength') && Number.isFinite(value) ? value : undefined;
    }

    private get countType(): CountType {
      const type = this.getAttribute('count-type');
      return type === 'characters' || type === 'words' ? type : 'length';
    }

    // As govuk-frontend: the field's closest `lang`, which can be inside the element, or English.
    private get locale() {
      return (this.input ?? this).closest('[lang]')?.getAttribute('lang') || 'en';
    }

    private setup() {
      const input = this.own('[data-character-count-input]');
      if (!isField(input) || this.maxLength === undefined) return;
      const fresh = input !== this.input;
      if (fresh) {
        this.unbind();
        this.input = input;
        input.addEventListener('input', this.onInput);
        input.addEventListener('focus', this.onFocus);
        input.addEventListener('blur', this.onBlur);
        // A value set by a script, such as a form library's, fires no `input` event.
        this.stopWatchingValue = onPropertySet(input, 'value', () => this.update());
        input.removeAttribute('maxlength');
        this.lastAnnouncedValue = undefined;
      }
      this.dataset.upgraded = '';
      const description = this.own('[data-character-count-description]');
      if (description && !this.hasAttribute('hidden-description-class')) {
        Object.entries(visuallyHidden).forEach(([name, value]) => description.style.setProperty(name, value));
      }
      [this.own('[data-character-count-status]'), this.own('[data-character-count-sr-status]')].forEach((status) => {
        if (status) status.hidden = false;
      });
      this.update();
      if (fresh) this.announceIfChanged();
    }

    private unbind() {
      const { input } = this;
      if (!input) return;
      input.removeEventListener('input', this.onInput);
      input.removeEventListener('focus', this.onFocus);
      input.removeEventListener('blur', this.onBlur);
      this.stopWatchingValue?.();
      window.clearInterval(this.checker);
      this.input = undefined;
    }

    /** Back to the markup without JavaScript, when the limit is removed. */
    private downgrade() {
      const { input } = this;
      if (!input) return;
      classesOf(this.getAttribute('input-over-limit-class')).forEach((name) => input.classList.toggle(name, false));
      this.unbind();
      delete this.dataset.upgraded;
      const description = this.own('[data-character-count-description]');
      if (description) {
        if (this.hasAttribute('hidden-description-class')) {
          classesOf(this.getAttribute('hidden-description-class')).forEach((name) =>
            description.classList.toggle(name, false)
          );
        } else {
          Object.keys(visuallyHidden).forEach((name) => description.style.removeProperty(name));
        }
      }
      [this.own('[data-character-count-status]'), this.own('[data-character-count-sr-status]')].forEach((status) => {
        if (status) status.hidden = true;
      });
    }

    update() {
      if (!this.input) return;
      this.input.removeAttribute('maxlength');
      this.currentCount = countOf(this.input.value, this.countType, this.locale);
      this.render();
    }

    private message() {
      const messages = Object.fromEntries(messageNames.map((name) => [name, messageFromAttributes(this, name)]));
      return countMessage((this.maxLength ?? Infinity) - this.currentCount, this.countType, messages, this.locale);
    }

    private get belowThreshold() {
      const threshold = Number(this.getAttribute('threshold'));
      if (!threshold) return false;
      return this.currentCount < ((this.maxLength ?? Infinity) * threshold) / 100;
    }

    /** The visible count and the classes, from the current count. */
    private render() {
      const { input } = this;
      if (!input) return;
      const { state, text } = this.message();
      const over = state === 'over';
      const description = this.own('[data-character-count-description]');
      // `toggle` with force leaves a class that's already there alone, so the observer isn't woken.
      classesOf(this.getAttribute('hidden-description-class')).forEach((name) =>
        description?.classList.toggle(name, true)
      );
      classesOf(this.getAttribute('input-over-limit-class')).forEach((name) => input.classList.toggle(name, over));
      const belowThreshold = this.belowThreshold;
      const srStatus = this.own('[data-character-count-sr-status]');
      if (belowThreshold) srStatus?.setAttribute('aria-hidden', 'true');
      else srStatus?.removeAttribute('aria-hidden');
      const status = this.own('[data-character-count-status]');
      if (!status) return;
      status.dataset.state = state;
      status.toggleAttribute('data-below-threshold', belowThreshold);
      classesOf(this.getAttribute('below-threshold-class')).forEach((name) =>
        status.classList.toggle(name, belowThreshold)
      );
      classesOf(this.getAttribute('within-limit-class')).forEach((name) => status.classList.toggle(name, !over));
      classesOf(this.getAttribute('over-limit-class')).forEach((name) => status.classList.toggle(name, over));
      setText(status, text);
    }

    /** Updates the count for screen readers, if the field changed since it last did. */
    private announceIfChanged() {
      const { input } = this;
      const status = this.own('[data-character-count-sr-status]');
      if (!input || !status) return;
      if (input.value === this.lastAnnouncedValue) return;
      this.lastAnnouncedValue = input.value;
      const { state, text } = this.message();
      status.dataset.state = state;
      setText(status, text);
    }
  }

  if (!customElements.get(tagName)) customElements.define(tagName, GovukReactCharacterCount);
}
