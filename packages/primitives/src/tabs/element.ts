/*
 * <govuk-react-tabs>: a headless, light-DOM custom element that upgrades server-rendered tabs
 * markup into a WAI-ARIA tablist, with or without React.
 *
 * Markup inside the element:
 * - `[data-tabs-list]`: the list of tabs.
 * - `[data-tabs-item][data-value]` (optional): a wrapper around a tab, such as an `li`.
 * - `[data-tabs-trigger][data-value]`: a tab. An `a` linking to its panel ("links" fallback)
 *   or a `label` for the radio in its panel ("radios" fallback).
 * - `[data-tabs-content][data-value]`: a panel. With "radios", its first child is a hidden radio.
 *
 * Attributes:
 * - `value` controls the selected tab: a user's choice only fires the change event.
 * - `default-value` is the first selected tab.
 * - `fallback`: "links" (the default) or "radios".
 * - `media`: below this media query the element leaves the no-JS behaviour as it is.
 * - `upgraded-class`, `active-item-class`, `hidden-content-class`: classes to add, for styles
 *   keyed off classes rather than `data-state`, `aria-selected` and `hidden`.
 * - `prefer-pick`: a tab picked before upgrade (checked radio or URL hash) wins over `value`.
 *
 * While upgraded it sets `data-upgraded`. A user's choice fires a bubbling
 * `govuk-react-tabs:change` event with `{ value }`. With "links", the URL hash follows the
 * selected tab and selects it, as in govuk-frontend.
 */

declare global {
  interface HTMLElementEventMap {
    'govuk-react-tabs:change': CustomEvent<{ value: string }>;
  }
}

export const tagName = 'govuk-react-tabs';

export interface TabsElement extends HTMLElement {
  /** The selected tab's value, once upgraded. */
  readonly selectedValue: string | undefined;
  /** The tab the user picked before upgrade, through the no-JS fallback or the URL hash. */
  readonly pickedValue: string | undefined;
  /** Select a tab without reporting a change, such as to apply a controlled value. */
  select(value: string): void;
}

const valueOf = (element: Element) => (element instanceof HTMLElement ? element.dataset.value : undefined);

const classesOf = (attribute: string | null) => attribute?.split(/\s+/).filter(Boolean) ?? [];

// `classList.add` always rewrites the attribute, which would wake the MutationObserver again.
const addClasses = (element: Element, classes: string[]) => {
  const missing = classes.filter((name) => !element.classList.contains(name));
  if (missing.length) element.classList.add(...missing);
};

if (typeof HTMLElement !== 'undefined' && typeof customElements !== 'undefined') {
  class GovukReactTabs extends HTMLElement implements TabsElement {
    static get observedAttributes() {
      return ['value'];
    }

    private mql?: MediaQueryList;

    private started = false;

    private active = false;

    private observer?: MutationObserver;

    private picked?: string;

    // The first tab was selected only because nothing else had been parsed yet.
    private provisional = false;

    private readonly onModeChange = () => this.checkMode();

    private readonly onReady = () => this.start();

    private readonly onHashChange = () => {
      const trigger = this.triggerForHash();
      if (trigger) this.choose(trigger);
    };

    private readonly onClick = (event: MouseEvent) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const trigger = this.ownTrigger(event.target);
      if (!trigger) return;
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
      const next = {
        ArrowRight: current === last ? 0 : current + 1,
        ArrowLeft: current === 0 ? last : current - 1,
        Home: 0,
        End: last,
      }[event.key];
      if (next === undefined) return;
      event.preventDefault();
      this.choose(triggers[next]);
      triggers[next].focus();
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
      return this.picked;
    }

    select(value: string) {
      const trigger = this.triggerFor(value);
      if (!trigger) return;
      this.provisional = false;
      if (this.active) this.show(trigger);
      else this.dataset.value = value;
    }

    connectedCallback() {
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
      this.observer?.disconnect();
      document.removeEventListener('DOMContentLoaded', this.onReady);
      this.mql?.removeEventListener('change', this.onModeChange);
      this.mql = undefined;
      this.started = false;
      this.teardown();
    }

    attributeChangedCallback(_name: string, oldValue: string | null, value: string | null) {
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

    private start() {
      document.removeEventListener('DOMContentLoaded', this.onReady);
      if (this.started) return;
      this.started = true;
      const media = this.getAttribute('media');
      if (media) {
        this.mql = window.matchMedia(media);
        this.mql.addEventListener('change', this.onModeChange);
      }
      this.checkMode();
    }

    private checkMode() {
      if (!this.mql || this.mql.matches) {
        this.setup();
      } else {
        this.teardown();
      }
    }

    /** The tab picked before upgrade, through a checked radio or the URL hash. */
    private pickedTrigger() {
      if (!this.radiosFallback) return this.triggerForHash();
      const checked = this.own('[data-tabs-content]').find((content) => this.radioOf(content)?.checked);
      return this.triggerFor(checked && valueOf(checked));
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

      const defaultTrigger = this.triggerFor(this.getAttribute('default-value')) ?? this.triggers[0];
      const picked = this.pickedTrigger();
      if (
        this.picked === undefined &&
        picked &&
        picked !== (this.triggerFor(this.getAttribute('value')) ?? defaultTrigger)
      ) {
        this.picked = valueOf(picked);
      }
      this.show(this.initialTrigger());
    }

    /** Roles and ids for the tabs and panels. */
    private wire() {
      this.own('[data-tabs-list]').forEach((list) => list.setAttribute('role', 'tablist'));
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
      this.own('[data-tabs-list]').forEach((list) => list.removeAttribute('role'));
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
      // The selection stays in `data-value`, and with "radios" in the checked radio.
    }

    /** A user's choice: select it, then report it. */
    private choose(trigger: HTMLElement) {
      const value = valueOf(trigger);
      if (value === undefined || value === this.dataset.value) return;
      this.provisional = false;
      // When controlled, the tab changes when `value` does.
      if (!this.hasAttribute('value')) {
        this.show(trigger);
        const id = this.parts(value).content?.id;
        if (!this.radiosFallback && id && window.location.hash !== `#${id}`) {
          window.history.pushState(window.history.state, '', `#${id}`);
        }
      }
      this.dispatchEvent(new CustomEvent('govuk-react-tabs:change', { detail: { value }, bubbles: true }));
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
          const radio = this.radioOf(content);
          if (radio && isActive && !radio.checked) radio.checked = true;
        }
      });
      this.dataset.value = valueOf(selected);
    }
  }

  if (!customElements.get(tagName)) customElements.define(tagName, GovukReactTabs);
}
