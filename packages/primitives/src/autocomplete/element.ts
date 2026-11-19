/*! Based on accessible-autocomplete, Copyright (c) 2017 Crown Copyright (Government Digital Service), MIT licence: licences/accessible-autocomplete.txt */

/*
 * <govuk-react-autocomplete>: a headless, light-DOM custom element that suggests options as the
 * user types into a text input, with or without React. A port of GOV.UK's accessible-autocomplete
 * (https://github.com/alphagov/accessible-autocomplete), which enhances an existing input rather
 * than rendering its own.
 *
 * Without JavaScript the input is a plain input and the options stay hidden. On upgrade the input
 * becomes a combobox, as in accessible-autocomplete: options matching the query show in the
 * listbox, Up and Down move focus through them, Enter, Space or a click confirms one, and Escape
 * closes the menu. Screen readers hear how many options there are once the user pauses.
 *
 * The options are whatever the listbox holds, so they can be rendered on the server, or replaced
 * as the user types, such as from a `govuk-react-autocomplete:query` listener. The rendered
 * markup is never moved, so React can keep rendering it.
 *
 * Markup inside the element:
 * - `input[data-autocomplete-input]`: the input, with an `id`.
 * - `[data-autocomplete-listbox]`: the options, rendered `hidden`.
 *   - `[data-autocomplete-option]`: an option. Its value is `data-value`, or its text.
 *   - `[data-autocomplete-no-results]` (optional): shown when no option matches, rendered `hidden`.
 * - `[data-autocomplete-status]` (optional): visually hidden, holding two
 *   `[data-autocomplete-status-region]`s, each with `role="status"`. They're updated alternately,
 *   so a repeated message is still announced.
 * - `[data-autocomplete-hint]` (optional): how to use the options, rendered `hidden`. It
 *   describes the input while the query is empty.
 *
 * The element gets `data-focused` while focus is in it, and the option in focus, or highlighted
 * while focus is on the input, gets `data-focused`.
 *
 * Attributes:
 * - `min-length`: the length the query needs before options show. 0 by default.
 * - `filter`: which options match the query: "contains" (the default), "starts-with", or "none"
 *   for options that already match, such as results from a server.
 * - `confirm-on-blur`: "false" to leave the query alone when focus leaves an option. By default,
 *   as in accessible-autocomplete, the highlighted option is confirmed.
 * - `submit-on-confirm`: submit the input's form when the user confirms an option, and let Enter
 *   submit it while the menu is open with no option highlighted.
 * - `status-query-too-short`, `status-no-results`, `status-selected-option`, `status-results`:
 *   what screen readers hear, English by default, with `%{count}` for the number and, in
 *   `status-selected-option`, `%{option}` and `%{position}`. Add a plural form to the name, such
 *   as `status-results-one`, for a message for each form.
 *
 * Events, which bubble:
 * - `govuk-react-autocomplete:query`, when the user changes the query and options are due.
 * - `govuk-react-autocomplete:confirm`, when an option is confirmed. Cancel it to stop
 *   `submit-on-confirm` submitting the form.
 */

import {
  translate,
  translationAttributeNames,
  translationFromAttributes,
  withLocale,
  type Translation,
} from '../utils/translation.js';
import { setText, setAttribute } from '../utils/dom.js';

export const tagName = 'govuk-react-autocomplete';

export type Filter = 'contains' | 'starts-with' | 'none';

export interface AutocompleteElement extends HTMLElement {
  /** The query, once upgraded. */
  readonly query: string | undefined;
}

declare global {
  interface HTMLElementEventMap {
    'govuk-react-autocomplete:query': CustomEvent<{ query: string }>;
    'govuk-react-autocomplete:confirm': CustomEvent<{ value: string }>;
  }
}

/** accessible-autocomplete's English text. */
export const defaults = {
  'status-query-too-short': 'Type in %{count} or more characters for results',
  'status-no-results': 'No search results',
  'status-selected-option': '%{option} %{position} of %{count} is highlighted',
  'status-results': { one: '%{count} result is available.', other: '%{count} results are available.' },
} satisfies Record<string, Translation>;

type MessageName = keyof typeof defaults;

/** As accessible-autocomplete, which waits this long after the last change before announcing. */
const statusDelay = 1400;

/** As accessible-autocomplete, which polls for speech recognition software changing the value. */
const pollInterval = 100;

const isIosDevice = () =>
  typeof navigator !== 'undefined' &&
  /(iPod|iPhone|iPad)/.test(navigator.userAgent) &&
  /AppleWebKit/.test(navigator.userAgent);

const valueSetter =
  typeof HTMLInputElement === 'undefined'
    ? undefined
    : Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set;

if (typeof HTMLElement !== 'undefined' && typeof customElements !== 'undefined') {
  class GovukReactAutocomplete extends HTMLElement implements AutocompleteElement {
    static get observedAttributes() {
      return [
        'min-length',
        'filter',
        'confirm-on-blur',
        'submit-on-confirm',
        ...Object.keys(defaults).flatMap(translationAttributeNames),
      ];
    }

    private input?: HTMLInputElement;

    private listbox?: HTMLElement;

    // accessible-autocomplete's state. `focused` and `selected` are -1 for the input.
    private focused: number | null = null;

    private hovered: number | null = null;

    private menuOpen = false;

    private options: HTMLElement[] = [];

    private currentQuery = '';

    private validChoiceMade = false;

    private selected: number | null = null;

    private ariaHint = true;

    private lastFocused: number | null = null;

    private settingValue = false;

    private bump = false;

    private statusTimer?: number;

    private poll?: number;

    private observer?: MutationObserver;

    private generatedIds = 0;

    get query() {
      return this.input ? this.currentQuery : undefined;
    }

    connectedCallback() {
      // The parts may be parsed or rendered later, and React can replace the options at any time.
      this.observer = new MutationObserver((records) => this.onMutation(records));
      this.observer.observe(this, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true,
        attributeFilter: ['aria-describedby', 'data-value'],
      });
      this.setup();
    }

    disconnectedCallback() {
      this.observer?.disconnect();
      this.unbind();
    }

    attributeChangedCallback() {
      // Wait for every attribute: React sets them one by one before connecting the element.
      if (!this.isConnected) return;
      if (this.input) this.render();
      else this.setup();
    }

    private own(selector: string) {
      return this.ownAll(selector)[0];
    }

    private ownAll(selector: string) {
      return Array.from(this.querySelectorAll<HTMLElement>(selector)).filter(
        (element) => element.closest(tagName) === this
      );
    }

    private get allOptions() {
      return this.ownAll('[data-autocomplete-option]');
    }

    private get minLength() {
      const value = Number(this.getAttribute('min-length'));
      return Number.isFinite(value) && value > 0 ? value : 0;
    }

    private get filterType(): Filter {
      const filter = this.getAttribute('filter');
      return filter === 'starts-with' || filter === 'none' ? filter : 'contains';
    }

    private get confirmOnBlur() {
      return this.getAttribute('confirm-on-blur') !== 'false';
    }

    private get submitOnConfirm() {
      return this.hasAttribute('submit-on-confirm');
    }

    private get locale() {
      return (this.input ?? this).closest('[lang]')?.getAttribute('lang') || 'en';
    }

    private setup() {
      const input = this.own('[data-autocomplete-input]');
      const listbox = this.own('[data-autocomplete-listbox]');
      if (!(input instanceof HTMLInputElement) || !input.id || !listbox) {
        this.unbind();
        delete this.dataset.upgraded;
        return;
      }
      if (input === this.input && listbox === this.listbox) {
        this.render();
        return;
      }
      this.unbind();
      this.input = input;
      this.listbox = listbox;
      input.addEventListener('input', this.onInput);
      input.addEventListener('click', this.onInput);
      input.addEventListener('focus', this.onInputFocus);
      this.addEventListener('keydown', this.onKeyDown);
      this.addEventListener('focusout', this.onFocusOut);
      listbox.addEventListener('mousedown', this.onOptionMouseDown);
      listbox.addEventListener('click', this.onOptionClick);
      listbox.addEventListener('mouseover', this.onOptionMouseOver);
      listbox.addEventListener('mouseleave', this.onListMouseLeave);
      this.poll = window.setInterval(this.onPoll, pollInterval);

      this.currentQuery = input.value;
      this.ariaHint = input.value === '';
      this.options = this.queryLongEnough ? this.matchingOptions() : [];
      this.focused = document.activeElement === input ? -1 : null;
      this.lastFocused = this.focused;
      this.selected = null;
      this.menuOpen = false;
      this.validChoiceMade = false;
      this.dataset.upgraded = '';
      this.render();
    }

    private unbind() {
      const { input, listbox } = this;
      window.clearInterval(this.poll);
      window.clearTimeout(this.statusTimer);
      if (!input || !listbox) return;
      input.removeEventListener('input', this.onInput);
      input.removeEventListener('click', this.onInput);
      input.removeEventListener('focus', this.onInputFocus);
      this.removeEventListener('keydown', this.onKeyDown);
      this.removeEventListener('focusout', this.onFocusOut);
      listbox.removeEventListener('mousedown', this.onOptionMouseDown);
      listbox.removeEventListener('click', this.onOptionClick);
      listbox.removeEventListener('mouseover', this.onOptionMouseOver);
      listbox.removeEventListener('mouseleave', this.onListMouseLeave);
      this.input = undefined;
      this.listbox = undefined;
    }

    private onMutation(records: MutationRecord[]) {
      const status = this.own('[data-autocomplete-status]');
      const relevant = records.filter(
        (record) =>
          !(status?.contains(record.target) ?? false) &&
          !(record.type === 'attributes' && record.target === this.input && this.describedByIsCurrent())
      );
      if (!relevant.length) return;
      if (!this.input?.isConnected || !this.listbox?.isConnected || !this.contains(this.input)) {
        this.setup();
        return;
      }
      if (relevant.some((record) => this.listbox?.contains(record.target))) this.updateOptions();
      this.render();
    }

    /** New options from the page, as accessible-autocomplete's `source` callback gives them. */
    private updateOptions() {
      const highlighted = this.selectedOption;
      if (!this.queryLongEnough || this.currentQuery === '') {
        this.options = [];
        return;
      }
      this.options = this.matchingOptions();
      if (this.focused === null || this.validChoiceMade) return;
      this.menuOpen = this.options.length > 0;
      // Keep the highlighted option if it's still there, and otherwise go back to the input.
      const index = highlighted ? this.options.indexOf(highlighted) : -1;
      this.selected = index;
      if (this.focused >= 0) this.focused = index;
    }

    private get queryLongEnough() {
      return this.currentQuery.length >= this.minLength;
    }

    private valueOf(option: HTMLElement | undefined) {
      if (!option) return undefined;
      return option.dataset.value ?? option.textContent?.trim() ?? '';
    }

    private matchingOptions() {
      const query = this.currentQuery.toLowerCase();
      const filter = this.filterType;
      return this.allOptions.filter((option) => {
        if (filter === 'none') return true;
        const value = (this.valueOf(option) ?? '').toLowerCase();
        return filter === 'starts-with' ? value.startsWith(query) : value.includes(query);
      });
    }

    private isQueryAnOption(query: string) {
      return this.options.some((option) => this.valueOf(option)?.toLowerCase() === query.toLowerCase());
    }

    private readonly onPoll = () => {
      // Speech recognition software, such as Dragon NaturallySpeaking, can set the value directly.
      if (this.input && this.input.value !== this.currentQuery) this.handleInputChange(this.input.value);
    };

    private readonly onInput = () => {
      if (this.input && !this.settingValue) this.handleInputChange(this.input.value);
    };

    private handleInputChange(query: string) {
      const queryChanged = this.currentQuery !== query;
      this.currentQuery = query;
      this.ariaHint = query === '';
      if (query !== '' && queryChanged && this.queryLongEnough) {
        this.dispatchEvent(new CustomEvent('govuk-react-autocomplete:query', { bubbles: true, detail: { query } }));
        this.options = this.matchingOptions();
        this.menuOpen = this.options.length > 0;
        this.selected = -1;
        this.validChoiceMade = false;
      } else if (query === '' || !this.queryLongEnough) {
        this.menuOpen = false;
        this.options = [];
      }
      this.render();
    }

    private readonly onInputFocus = () => {
      const reopen = !this.validChoiceMade && this.queryLongEnough && this.options.length > 0;
      this.focused = -1;
      if (reopen) {
        this.menuOpen = true;
        this.selected = -1;
      }
      this.render();
    };

    private readonly onFocusOut = (event: FocusEvent) => {
      const { target, relatedTarget } = event;
      if (target === this.input) {
        // Focus moving to an option has already set `focused`.
        if (this.focused !== -1) return;
        const ios = isIosDevice();
        this.handleComponentBlur({
          menuOpen: this.menuOpen && ios,
          query: ios ? this.currentQuery : this.valueOf(this.selectedOption),
        });
        return;
      }
      // An option React removed while focused: the new options move focus back to the input.
      if (!(target instanceof HTMLElement) || !target.isConnected) return;
      const index = this.options.indexOf(target);
      if (index === -1) return;
      const focusingOutsideComponent = relatedTarget === null;
      const focusingInput = relatedTarget === this.input;
      const focusingAnotherOption = this.focused !== index && this.focused !== -1;
      if ((!focusingAnotherOption && focusingOutsideComponent) || !(focusingAnotherOption || focusingInput)) {
        this.handleComponentBlur({
          menuOpen: this.menuOpen && isIosDevice(),
          query: this.valueOf(this.selectedOption),
        });
      }
    };

    private get selectedOption() {
      return this.selected === null || this.selected < 0 ? undefined : this.options[this.selected];
    }

    private handleComponentBlur({ menuOpen, query }: { menuOpen: boolean; query?: string }) {
      let newQuery = this.currentQuery;
      const option = this.selectedOption;
      if (this.confirmOnBlur) {
        newQuery = query || this.currentQuery;
        if (option) this.confirmEvent(this.valueOf(option) ?? '');
      }
      this.focused = null;
      this.menuOpen = menuOpen;
      this.selected = null;
      this.validChoiceMade = this.isQueryAnOption(newQuery);
      this.setQuery(newQuery);
      this.render();
    }

    /** Sets the input's value as the user would, so React's `onChange` hears it. */
    private setQuery(query: string) {
      this.currentQuery = query;
      const { input } = this;
      if (!input || input.value === query) return;
      this.settingValue = true;
      if (valueSetter) valueSetter.call(input, query);
      else input.value = query;
      input.dispatchEvent(new Event('input', { bubbles: true }));
      this.settingValue = false;
    }

    private confirmEvent(value: string) {
      return this.dispatchEvent(
        new CustomEvent('govuk-react-autocomplete:confirm', { bubbles: true, cancelable: true, detail: { value } })
      );
    }

    private confirm(index: number) {
      const option = this.options[index];
      if (!option) return;
      const value = this.valueOf(option) ?? '';
      this.focused = -1;
      this.hovered = null;
      this.menuOpen = false;
      this.selected = -1;
      this.validChoiceMade = true;
      this.setQuery(value);
      this.render();
      const proceed = this.confirmEvent(value);
      // After React has updated a controlled input's state, so an `onSubmit` sees the option.
      const form = this.input?.form;
      if (proceed && this.submitOnConfirm && form) window.setTimeout(() => form.requestSubmit());
    }

    private focusOption(index: number) {
      this.focused = index;
      this.hovered = null;
      this.selected = index;
      this.render();
    }

    private readonly onKeyDown = (event: KeyboardEvent) => {
      const { target } = event;
      const onInput = target === this.input;
      const onOption = target instanceof HTMLElement && this.options.includes(target);
      if (!onInput && !onOption) return;
      const selected = this.selected ?? -1;
      switch (event.key) {
        case 'ArrowUp':
          event.preventDefault();
          if (this.menuOpen && selected !== -1) this.focusOption(selected - 1);
          break;
        case 'ArrowDown':
          event.preventDefault();
          if (this.menuOpen && selected !== this.options.length - 1) this.focusOption(selected + 1);
          break;
        case ' ':
          if (this.focused !== null && this.focused !== -1) {
            event.preventDefault();
            this.confirm(this.focused);
          }
          break;
        case 'Enter':
          if (!this.menuOpen) break;
          if (selected >= 0) {
            event.preventDefault();
            this.confirm(selected);
          } else if (!this.submitOnConfirm) {
            event.preventDefault();
          }
          break;
        case 'Escape':
          // Rather than leave focus on a hidden option.
          if (onOption) this.input?.focus();
          this.handleComponentBlur({ menuOpen: false, query: this.currentQuery });
          break;
        default:
          if (
            onOption &&
            !event.ctrlKey &&
            !event.metaKey &&
            !event.altKey &&
            (event.key.length === 1 || event.key === 'Backspace')
          ) {
            this.input?.focus();
          }
      }
    };

    private optionOf(target: EventTarget | null) {
      if (!(target instanceof Element)) return -1;
      const option = target.closest<HTMLElement>('[data-autocomplete-option]');
      return option ? this.options.indexOf(option) : -1;
    }

    // Stops the input blurring, so a click confirms the option instead of closing the menu.
    private readonly onOptionMouseDown = (event: MouseEvent) => {
      if (this.optionOf(event.target) !== -1) event.preventDefault();
    };

    private readonly onOptionClick = (event: MouseEvent) => {
      const index = this.optionOf(event.target);
      if (index !== -1) this.confirm(index);
    };

    private readonly onOptionMouseOver = (event: MouseEvent) => {
      const index = this.optionOf(event.target);
      // As accessible-autocomplete: iOS Safari drops the click if hovering changes the option.
      if (index === -1 || index === this.hovered || isIosDevice()) return;
      this.hovered = index;
      this.render();
    };

    private readonly onListMouseLeave = () => {
      if (this.hovered === null) return;
      this.hovered = null;
      this.render();
    };

    private ensureId(element: HTMLElement, suffix: string) {
      if (!element.id) {
        this.generatedIds += 1;
        element.id = `${this.input?.id}__${suffix}${suffix.endsWith('--') ? this.generatedIds : ''}`;
      }
      return element.id;
    }

    private get hint() {
      return this.own('[data-autocomplete-hint]');
    }

    private describedBy() {
      const { input } = this;
      if (!input) return null;
      const hint = this.hint;
      const hintId = hint ? this.ensureId(hint, 'assistiveHint') : undefined;
      const tokens = (input.getAttribute('aria-describedby') ?? '')
        .split(/\s+/)
        .filter((token) => token && token !== hintId);
      if (this.ariaHint && hintId) tokens.push(hintId);
      return tokens.length ? tokens.join(' ') : null;
    }

    private describedByIsCurrent() {
      return (this.input?.getAttribute('aria-describedby') ?? null) === this.describedBy();
    }

    /** Brings the markup up to date with the state, as accessible-autocomplete's render does. */
    private render() {
      const { input, listbox } = this;
      if (!input || !listbox) return;
      const { focused, hovered, menuOpen, options, selected } = this;
      const inputFocused = focused === -1;
      const showNoOptionsFound =
        inputFocused && options.length === 0 && this.currentQuery !== '' && this.queryLongEnough;
      const optionFocused = focused !== null && focused !== -1;

      const listboxId = this.ensureId(listbox, 'listbox');
      setAttribute(listbox, 'role', 'listbox');
      if (!listbox.hasAttribute('aria-labelledby')) listbox.setAttribute('aria-labelledby', input.id);
      listbox.hidden = !(menuOpen || showNoOptionsFound);

      const all = this.allOptions;
      all.forEach((option) => {
        const index = options.indexOf(option);
        this.ensureId(option, 'option--');
        option.hidden = index === -1;
        setAttribute(option, 'role', 'option');
        setAttribute(option, 'tabindex', '-1');
        setAttribute(option, 'aria-selected', focused === index && index !== -1 ? 'true' : 'false');
        setAttribute(option, 'aria-posinset', index === -1 ? null : String(index + 1));
        setAttribute(option, 'aria-setsize', index === -1 ? null : String(options.length));
        const showFocused = index !== -1 && (focused === -1 ? selected === index : focused === index);
        setAttribute(option, 'data-focused', showFocused && hovered === null ? '' : null);
      });

      const noResults = this.own('[data-autocomplete-no-results]');
      if (noResults) {
        noResults.hidden = !showNoOptionsFound;
        setAttribute(noResults, 'role', 'option');
        setAttribute(noResults, 'aria-disabled', 'true');
      }

      setAttribute(input, 'role', 'combobox');
      setAttribute(input, 'autocomplete', 'off');
      setAttribute(input, 'aria-autocomplete', 'list');
      setAttribute(input, 'aria-controls', listboxId);
      setAttribute(input, 'aria-expanded', menuOpen ? 'true' : 'false');
      setAttribute(input, 'aria-activedescendant', optionFocused ? (options[focused]?.id ?? null) : null);
      setAttribute(input, 'aria-describedby', this.describedBy());
      setAttribute(this, 'data-focused', focused === null ? null : '');

      // As accessible-autocomplete's componentDidUpdate: focus follows `focused`, and the query is
      // selected when focus comes into the input.
      if (focused !== this.lastFocused && focused !== null) {
        const element = focused === -1 ? input : options[focused];
        if (element && document.activeElement !== element) element.focus();
        // Some input types, such as email, have no selection.
        if (focused === -1 && this.lastFocused === null && input.selectionStart !== null) {
          input.setSelectionRange(0, input.value.length);
        }
      }
      this.lastFocused = focused;

      this.scheduleStatus();
    }

    private message(name: MessageName) {
      return translationFromAttributes(this, name) ?? defaults[name];
    }

    private statusText() {
      const { locale, options } = this;
      if (!this.queryLongEnough) return translate(this.message('status-query-too-short'), this.minLength, locale);
      if (options.length === 0) return translate(this.message('status-no-results'), 0, locale);
      const results = translate(this.message('status-results'), options.length, locale);
      const option = this.valueOf(this.selectedOption);
      if (option === undefined || this.selected === null) return results;
      const position = withLocale(locale, (l) => new Intl.NumberFormat(l)).format(this.selected + 1);
      const highlighted = translate(this.message('status-selected-option'), options.length, locale)
        .replaceAll('%{option}', () => option)
        .replaceAll('%{position}', () => position);
      return `${results} ${highlighted}`;
    }

    // As accessible-autocomplete: every change clears the status, which is set again once there
    // have been no changes for a while, in the other region, so the same text is announced again.
    // It stays silent once focus has left or the user has made a choice.
    private scheduleStatus() {
      const regions = this.ownAll('[data-autocomplete-status-region]');
      if (!regions.length) return;
      regions.forEach((region) => setText(region, ''));
      window.clearTimeout(this.statusTimer);
      this.statusTimer = window.setTimeout(() => {
        this.bump = !this.bump;
        const silenced = this.focused === null || this.validChoiceMade;
        const text = silenced ? '' : this.statusText();
        regions.forEach((region, index) => setText(region, (index === 0) === this.bump ? text : ''));
      }, statusDelay);
    }
  }

  if (!customElements.get(tagName)) customElements.define(tagName, GovukReactAutocomplete);
}
