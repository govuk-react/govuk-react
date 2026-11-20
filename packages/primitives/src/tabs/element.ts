/*
 * <govuk-react-tabs>: a headless, light-DOM custom element that upgrades server-rendered tabs
 * markup into a WAI-ARIA tablist, with or without React.
 *
 * The hidden radio group is the single source of truth, as in the react-design-system-apis
 * Tabs reference. Each panel's first child is a hidden radio. Choosing a tab (a label click, or
 * a link click or arrow key, which call `radio.click()`) checks its radio and fires the radio's
 * native `change`. The element listens for that one change to update the tablist. React sees
 * the same native change through the radio's `onChange`, so it needs no bridging event.
 *
 * Markup inside the element:
 * - `[data-tabs-list]`: the list of tabs.
 * - `[data-tabs-item][data-value]` (optional): a wrapper around a tab, such as an `li`.
 * - `[data-tabs-trigger][data-value]`: a tab. An `a` linking to its panel ("links" fallback)
 *   or a `label` for the radio in its panel ("radios" fallback).
 * - `[data-tabs-content][data-value]`: a panel. Its first child is a hidden radio.
 *
 * Attributes:
 * - `value` controls the selected tab: a user's choice only fires the change events, and the
 *   tab changes when `value` does.
 * - `default-value` is the first selected tab.
 * - `fallback`: "links" (the default) or "radios".
 * - `orientation`: "horizontal" (the default) or "vertical", the axis of the arrow keys.
 * - `media`: below this media query the element leaves the no-JS behaviour as it is.
 * - `upgraded-class`, `active-item-class`, `hidden-content-class`: classes to add, for styles
 *   keyed off classes rather than `data-state`, `aria-selected` and `hidden`.
 * - `prefer-pick`: a tab picked before upgrade (checked radio or URL hash) wins over `value`.
 *
 * While upgraded it sets `data-upgraded`. A user's choice fires a bubbling
 * `govuk-react-tabs:change` event with `{ value }`, for code that doesn't use React. With
 * "links", the URL hash follows the selected tab and selects it, as in govuk-frontend.
 */

import { classesOf } from '../utils/dom.js';

declare global {
  interface HTMLElementTagNameMap {
    'govuk-react-tabs': TabsElement;
  }
  interface HTMLElementEventMap {
    'govuk-react-tabs:change': CustomEvent<{ value: string }>;
  }
}

export const tagName = 'govuk-react-tabs';

export interface TabsElement extends HTMLElement {
  /** The selected tab's value, once upgraded. */
  readonly selectedValue: string | undefined;
  /**
   * The tab the user picked before React hydrated, through the no-JS fallback, the URL hash or
   * the upgraded tabs, when it differs from the tab that would otherwise be selected.
   */
  readonly pickedValue: string | undefined;
  /** Select a tab without reporting a change, such as to apply a controlled value. */
  select(value: string): void;
}

const valueOf = (element: Element | null | undefined) =>
  element instanceof HTMLElement ? element.dataset.value : undefined;

// `classList.add` always rewrites the attribute, which would wake the MutationObserver again.
const addClasses = (element: Element, classes: string[]) => {
  const missing = classes.filter((name) => !element.classList.contains(name));
  if (missing.length) element.classList.add(...missing);
};

if (typeof HTMLElement !== 'undefined' && typeof customElements !== 'undefined') {
  class GovukReactTabs extends HTMLElement implements TabsElement {
    static get observedAttributes() {
      return ['value', 'media'];
    }

    private mql?: MediaQueryList;

    private started = false;

    private active = false;

    private observer?: MutationObserver;

    // The last tab the user chose, by any route.
    private picked?: string;

    // The first tab was selected only because nothing else had been parsed yet.
    private provisional = false;

    private readonly onModeChange = () => this.checkMode();

    private readonly onReady = () => this.start();

    private readonly onHashChange = () => {
      const trigger = this.triggerForHash();
      if (trigger) this.choose(trigger);
    };

    // A link's click becomes a click on its radio. A label already clicks its radio.
    private readonly onClick = (event: MouseEvent) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const trigger = this.ownTrigger(event.target);
      if (!trigger || this.radiosFallback) return;
      event.preventDefault();
      this.choose(trigger);
    };

    private readonly onKeydown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const trigger = this.ownTrigger(event.target);
      if (!trigger) return;
      const triggers = this.triggers;
      const current = triggers.indexOf(trigger);
      const last = triggers.length - 1;
      const vertical = this.getAttribute('orientation') === 'vertical';
      const next = {
        [vertical ? 'ArrowDown' : 'ArrowRight']: current === last ? 0 : current + 1,
        [vertical ? 'ArrowUp' : 'ArrowLeft']: current === 0 ? last : current - 1,
        Home: 0,
        End: last,
      }[event.key];
      if (next === undefined) return;
      event.preventDefault();
      this.choose(triggers[next]);
      triggers[next].focus();
    };

    // The radio group's native change is the source of truth for every choice.
    private readonly onChange = (event: Event) => {
      const radio = event.target;
      if (!(radio instanceof HTMLInputElement) || !radio.checked) return;
      const content = radio.parentElement;
      if (!content?.matches('[data-tabs-content]') || content.closest(tagName) !== this) return;
      if (this.radioOf(content) !== radio) return;
      const value = valueOf(content);
      if (value === undefined || value === this.dataset.value) return;
      this.picked = value;
      this.provisional = false;
      if (this.hasAttribute('value')) {
        // Controlled: the tab changes when `value` does. Put the radio back once the change has
        // been handled, so React's onChange still sees it, unless `value` has followed it.
        queueMicrotask(() => this.restoreRadio(radio));
      } else if (!this.active) {
        this.dataset.value = value;
      } else {
        this.show(this.triggerFor(value));
        const id = content.id;
        if (!this.radiosFallback && this.active && id && window.location.hash !== `#${id}`) {
          window.history.pushState(window.history.state, '', `#${id}`);
        }
      }
      this.dispatchEvent(new CustomEvent('govuk-react-tabs:change', { detail: { value }, bubbles: true }));
    };

    get value(): string | null {
      return this.getAttribute('value');
    }

    set value(next: string | null) {
      if (next == null) this.removeAttribute('value');
      else this.setAttribute('value', next);
    }

    get selectedValue() {
      return this.dataset.value;
    }

    get pickedValue() {
      return this.picked !== undefined && this.picked !== this.defaultSelection() ? this.picked : undefined;
    }

    select(value: string) {
      const trigger = this.triggerFor(value);
      if (!trigger) return;
      this.provisional = false;
      if (this.active) this.show(trigger);
      else {
        this.dataset.value = value;
        this.checkRadio(value);
      }
    }

    connectedCallback() {
      this.addEventListener('change', this.onChange);
      // Tabs can be added or removed later, and React can rewrite a class attribute.
      this.observer = new MutationObserver((records) => {
        if (!this.started) return;
        if (!this.active) {
          if (!this.mql || this.mql.matches) this.setup();
          return;
        }
        if (records.some((record) => record.type === 'childList')) {
          this.wire();
          if (this.provisional) this.show(this.initialTrigger());
        }
        this.show(this.triggerFor(this.dataset.value) ?? this.triggers[0]);
        addClasses(this, classesOf(this.getAttribute('upgraded-class')));
      });
      this.observer.observe(this, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
      // Wait for the markup to be parsed, so the initial tab is chosen from all of it.
      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', this.onReady);
      else this.start();
    }

    disconnectedCallback() {
      this.removeEventListener('change', this.onChange);
      this.observer?.disconnect();
      document.removeEventListener('DOMContentLoaded', this.onReady);
      this.mql?.removeEventListener('change', this.onModeChange);
      this.mql = undefined;
      this.started = false;
      this.teardown();
    }

    attributeChangedCallback(name: string, oldValue: string | null, value: string | null) {
      // Until it starts, the element reads its attributes when it sets up, after any pick before upgrade.
      if (!this.started) return;
      if (name === 'media') {
        if (oldValue !== value) this.watchMedia();
        return;
      }
      if (value != null && oldValue !== value && value !== this.dataset.value) this.select(value);
    }

    private get radiosFallback() {
      return this.getAttribute('fallback') === 'radios';
    }

    private get triggers(): HTMLElement[] {
      return this.own('[data-tabs-trigger]');
    }

    private own(selector: string): HTMLElement[] {
      // Leave nested tabs to their own element.
      return Array.from(this.querySelectorAll<HTMLElement>(selector)).filter(
        (element) => element.closest(tagName) === this
      );
    }

    private ownTrigger(target: EventTarget | null) {
      const trigger = target instanceof Element ? target.closest('[data-tabs-trigger]') : null;
      return this.triggers.find((candidate) => candidate === trigger);
    }

    private triggerFor(value: string | null | undefined) {
      return value == null ? undefined : this.triggers.find((trigger) => valueOf(trigger) === value);
    }

    private triggerForHash() {
      if (this.radiosFallback) return undefined;
      const hash = decodeURIComponent(window.location.hash.slice(1));
      return hash ? this.triggers.find((trigger) => this.parts(valueOf(trigger)).content?.id === hash) : undefined;
    }

    private parts(value: string | undefined) {
      const matches = (element: HTMLElement) => valueOf(element) === value;
      return {
        item: this.own('[data-tabs-item]').find(matches),
        content: this.own('[data-tabs-content]').find(matches),
      };
    }

    private radioOf(content: HTMLElement | undefined) {
      const radio = content?.firstElementChild;
      return radio instanceof HTMLInputElement && radio.type === 'radio' ? radio : undefined;
    }

    /**
     * Check a tab's radio without firing a change, so nothing is reported. Every radio is set
     * through its own `checked`, so React's record of each stays true and a later click on one
     * is seen as a change.
     */
    private checkRadio(value: string | undefined) {
      const radios = this.own('[data-tabs-content]').map((content) => ({
        radio: this.radioOf(content),
        selected: valueOf(content) === value,
      }));
      if (!radios.some(({ radio, selected }) => radio && selected)) return;
      radios.forEach(({ radio, selected }) => {
        if (radio && !selected) radio.checked = false;
      });
      radios.forEach(({ radio, selected }) => {
        if (radio && selected) radio.checked = true;
      });
    }

    private restoreRadio(picked: HTMLInputElement) {
      if (valueOf(picked.parentElement) !== this.dataset.value) this.checkRadio(this.dataset.value);
    }

    /** The tab that would be selected if the user had picked nothing. */
    private defaultSelection() {
      return (
        valueOf(this.triggerFor(this.getAttribute('value'))) ??
        valueOf(this.triggerFor(this.getAttribute('default-value'))) ??
        valueOf(this.triggers[0])
      );
    }

    private start() {
      document.removeEventListener('DOMContentLoaded', this.onReady);
      if (this.started) return;
      this.started = true;
      this.watchMedia();
    }

    private watchMedia() {
      this.mql?.removeEventListener('change', this.onModeChange);
      const media = this.getAttribute('media');
      this.mql = media ? window.matchMedia(media) : undefined;
      this.mql?.addEventListener('change', this.onModeChange);
      this.checkMode();
    }

    private checkMode() {
      if (!this.mql || this.mql.matches) {
        this.setup();
      } else {
        this.teardown();
      }
    }

    /** The tab picked before upgrade, through the URL hash or a checked radio. */
    private pickedTrigger() {
      const hashed = this.triggerForHash();
      if (hashed) return hashed;
      const checked = this.own('[data-tabs-content]').find((content) => this.radioOf(content)?.checked);
      return this.triggerFor(valueOf(checked));
    }

    private initialTrigger() {
      const controlled = this.triggerFor(this.getAttribute('value'));
      const remembered = this.triggerFor(this.dataset.value);
      const picked = this.pickedTrigger();
      const fallback = this.triggerFor(this.getAttribute('default-value'));
      const initial =
        (this.hasAttribute('prefer-pick') && !remembered ? picked : undefined) ??
        controlled ??
        remembered ??
        picked ??
        fallback;
      this.provisional = !initial;
      return initial ?? this.triggers[0];
    }

    private setup() {
      if (this.active || !this.triggers.length) return;
      this.active = true;
      this.dataset.upgraded = '';
      addClasses(this, classesOf(this.getAttribute('upgraded-class')));
      this.wire();
      this.addEventListener('click', this.onClick);
      this.addEventListener('keydown', this.onKeydown);
      if (!this.radiosFallback) window.addEventListener('hashchange', this.onHashChange);

      if (this.picked === undefined && !this.dataset.value) this.picked = valueOf(this.pickedTrigger());
      this.show(this.initialTrigger());
    }

    /** Roles and ids for the tabs and panels. */
    private wire() {
      const orientation = this.getAttribute('orientation') === 'vertical' ? 'vertical' : 'horizontal';
      this.own('[data-tabs-list]').forEach((list) => {
        list.setAttribute('role', 'tablist');
        list.setAttribute('aria-orientation', orientation);
      });
      this.own('[data-tabs-item]').forEach((item) => item.setAttribute('role', 'presentation'));
      this.triggers.forEach((trigger) => {
        const { content } = this.parts(valueOf(trigger));
        trigger.setAttribute('role', 'tab');
        if (!content) return;
        if (!content.id) {
          content.id = `${valueOf(trigger)}-panel`;
          content.dataset.tabsGeneratedId = '';
        }
        if (!trigger.id) {
          trigger.id = `${content.id}-tab`;
          trigger.dataset.tabsGeneratedId = '';
        }
        trigger.setAttribute('aria-controls', content.id);
        content.setAttribute('role', 'tabpanel');
        content.setAttribute('aria-labelledby', trigger.id);
      });
    }

    private teardown() {
      if (!this.active) return;
      this.active = false;
      delete this.dataset.upgraded;
      this.removeEventListener('click', this.onClick);
      this.removeEventListener('keydown', this.onKeydown);
      window.removeEventListener('hashchange', this.onHashChange);
      // The radios fallback still switches tabs, so it keeps its classes.
      if (!this.radiosFallback) this.classList.remove(...classesOf(this.getAttribute('upgraded-class')));
      this.own('[data-tabs-list]').forEach((list) => {
        list.removeAttribute('role');
        list.removeAttribute('aria-orientation');
      });
      const removeGeneratedId = (element: HTMLElement) => {
        if (element.dataset.tabsGeneratedId === undefined) return;
        element.removeAttribute('id');
        delete element.dataset.tabsGeneratedId;
      };
      this.own('[data-tabs-item]').forEach((item) => {
        ['role', 'data-state'].forEach((name) => item.removeAttribute(name));
        item.classList.remove(...classesOf(this.getAttribute('active-item-class')));
      });
      this.triggers.forEach((trigger) => {
        removeGeneratedId(trigger);
        ['role', 'aria-controls', 'aria-selected', 'tabindex', 'data-state'].forEach((name) =>
          trigger.removeAttribute(name)
        );
      });
      this.own('[data-tabs-content]').forEach((content) => {
        removeGeneratedId(content);
        ['role', 'aria-labelledby', 'tabindex', 'hidden', 'data-state'].forEach((name) =>
          content.removeAttribute(name)
        );
        content.classList.remove(...classesOf(this.getAttribute('hidden-content-class')));
      });
      // The selection stays in `data-value` and the checked radio.
    }

    /** A user's choice: click its radio, so the native change does the rest. */
    private choose(trigger: HTMLElement) {
      this.radioOf(this.parts(valueOf(trigger)).content)?.click();
    }

    private show(selected: HTMLElement | undefined) {
      if (!selected) return;
      const activeItemClasses = classesOf(this.getAttribute('active-item-class'));
      const hiddenContentClasses = classesOf(this.getAttribute('hidden-content-class'));
      this.triggers.forEach((trigger) => {
        const isActive = trigger === selected;
        const state = isActive ? 'active' : 'inactive';
        const { item, content } = this.parts(valueOf(trigger));
        if (trigger.dataset.state !== state) trigger.dataset.state = state;
        trigger.setAttribute('aria-selected', String(isActive));
        trigger.setAttribute('tabindex', isActive ? '0' : '-1');
        if (item) {
          if (item.dataset.state !== state) item.dataset.state = state;
          activeItemClasses.forEach((name) => item.classList.toggle(name, isActive));
        }
        if (content) {
          if (content.dataset.state !== state) content.dataset.state = state;
          content.hidden = !isActive;
          hiddenContentClasses.forEach((name) => content.classList.toggle(name, !isActive));
          if (isActive) content.setAttribute('tabindex', '0');
          else content.removeAttribute('tabindex');
        }
      });
      this.dataset.value = valueOf(selected);
      this.checkRadio(this.dataset.value);
    }
  }

  if (!customElements.get(tagName)) customElements.define(tagName, GovukReactTabs);
}
