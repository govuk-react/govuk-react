/*
 * <govuk-react-tabs>: a headless, light-DOM custom element that upgrades server-rendered tabs
 * markup into a WAI-ARIA tablist. It works with any markup and styles, with or without React.
 *
 * Markup, inside the element:
 * - `[data-tabs-list]`: the list of tabs.
 * - `[data-tabs-item][data-value]` (optional): a wrapper around a tab, such as an `li`.
 * - `[data-tabs-trigger][data-value]`: a tab. An `a` linking to its panel (the "links"
 *   fallback) or a `label` for a radio in its panel (the "radios" fallback).
 * - `[data-tabs-content][data-value]`: a panel. In the "radios" fallback its first child is a
 *   hidden `input[type=radio]`.
 *
 * Attributes:
 * - `value`: the selected tab, to control it. `default-value`: the first selected tab.
 * - `fallback`: "links" (the default) or "radios", how the markup works without JavaScript.
 * - `media`: a media query. Below it the element stays (or goes back to) the no-JS markup.
 * - `upgraded-class`, `active-item-class`, `hidden-content-class`: classes the element adds,
 *   for styles that key off classes rather than `data-state`, `aria-selected` and `hidden`.
 * - `prefer-pick`: keep a tab the user picked before upgrade (a checked radio or the URL
 *   hash) over `value`, so it can be reported.
 *
 * With a `value` attribute the element is controlled: a user's choice only fires the change
 * event, and the tab changes when `value` does.
 *
 * On upgrade it adds roles, a roving tabindex, arrow/Home/End keys (WAI-ARIA APG, automatic
 * activation), `data-state` on items, tabs and panels, and `hidden` on inactive panels.
 * A user's choice fires a bubbling `govuk-react-tabs:change` event with `{ value }`.
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

// Only touch the class attribute when a class is missing: `classList.add` always rewrites it,
// which would wake the MutationObserver again.
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

    private readonly onModeChange = () => this.checkMode();

    private readonly onClick = (event: MouseEvent) => {
      // Let modified clicks open links as usual.
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const trigger = event.target instanceof Element ? event.target.closest('[data-tabs-trigger]') : null;
      if (!(trigger instanceof HTMLElement) || !this.triggers.includes(trigger)) return;
      event.preventDefault();
      this.choose(trigger);
    };

    private readonly onKeydown = (event: KeyboardEvent) => {
      const triggers = this.triggers;
      const current = triggers.findIndex((trigger) => trigger.dataset.state === 'active');
      if (!(event.target instanceof Element) || !triggers.includes(event.target as HTMLElement)) return;
      let next: number;
      switch (event.key) {
        case 'ArrowRight':
          next = (current + 1) % triggers.length;
          break;
        case 'ArrowLeft':
          next = (current - 1 + triggers.length) % triggers.length;
          break;
        case 'Home':
          next = 0;
          break;
        case 'End':
          next = triggers.length - 1;
          break;
        default:
          return;
      }
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
      if (trigger && this.active) this.show(trigger);
    }

    connectedCallback() {
      // Lay out as if the element weren't there.
      if (!this.style.display) this.style.display = 'contents';
      // Children may not be parsed or hydrated yet, and tabs can be added or removed later.
      // React can also rewrite a class attribute, dropping the classes added here.
      this.observer = new MutationObserver((records) => {
        if (!this.started) {
          if (this.triggers.length) this.start();
          return;
        }
        if (!this.active) return;
        if (records.some((record) => record.type === 'childList')) this.wire();
        const selected = this.triggerFor(this.dataset.value) ?? this.triggers[0];
        if (selected) this.show(selected);
        addClasses(this, classesOf(this.getAttribute('upgraded-class')));
      });
      this.observer.observe(this, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
      if (this.triggers.length) this.start();
    }

    disconnectedCallback() {
      this.observer?.disconnect();
      this.mql?.removeEventListener('change', this.onModeChange);
      this.mql = undefined;
      this.started = false;
      this.teardown();
    }

    attributeChangedCallback(_name: string, oldValue: string | null, value: string | null) {
      if (value != null && oldValue !== value && value !== this.dataset.value) this.select(value);
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

    private triggerFor(value: string | null | undefined) {
      return value == null ? undefined : this.triggers.find((trigger) => valueOf(trigger) === value);
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
        // Also drop classes rendered on the server for the radios fallback.
        this.classList.remove(...classesOf(this.getAttribute('upgraded-class')));
      }
    }

    private setup() {
      if (this.active) return;
      this.active = true;
      addClasses(this, classesOf(this.getAttribute('upgraded-class')));
      this.wire();
      this.addEventListener('click', this.onClick);
      this.addEventListener('keydown', this.onKeydown);

      const radiosFallback = this.getAttribute('fallback') === 'radios';
      const defaultTrigger = this.triggerFor(this.getAttribute('default-value')) ?? this.triggers[0];
      const checked = radiosFallback
        ? this.own('[data-tabs-content]').find((content) => this.radioOf(content)?.checked)
        : undefined;
      const hash = window.location.hash.slice(1);
      const fromUser =
        this.triggerFor(checked && valueOf(checked)) ??
        (radiosFallback
          ? undefined
          : this.triggers.find((trigger) => this.parts(valueOf(trigger)).content?.id === hash));
      if (fromUser && fromUser !== (this.triggerFor(this.getAttribute('value')) ?? defaultTrigger)) {
        this.picked = valueOf(fromUser);
      }
      const controlled = this.triggerFor(this.getAttribute('value'));
      const initial =
        (this.hasAttribute('prefer-pick') ? this.triggerFor(this.picked) : undefined) ??
        controlled ??
        this.triggerFor(this.dataset.value) ??
        fromUser ??
        defaultTrigger;
      this.show(initial);
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
        // The no-JS radio is replaced by the tabs' own keyboard support.
        this.radioOf(content)?.setAttribute('tabindex', '-1');
      });
    }

    private teardown() {
      if (!this.active) return;
      this.active = false;
      this.removeEventListener('click', this.onClick);
      this.removeEventListener('keydown', this.onKeydown);
      this.classList.remove(...classesOf(this.getAttribute('upgraded-class')));
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
        this.radioOf(content)?.removeAttribute('tabindex');
      });
      delete this.dataset.value;
    }

    /** A user's choice: select it, then report it. */
    private choose(trigger: HTMLElement) {
      const value = valueOf(trigger);
      if (value === undefined || value === this.dataset.value) return;
      // When controlled, the tab changes when `value` does.
      if (!this.hasAttribute('value')) this.show(trigger);
      this.dispatchEvent(new CustomEvent('govuk-react-tabs:change', { detail: { value }, bubbles: true }));
    }

    private show(selected: HTMLElement) {
      const activeItemClasses = classesOf(this.getAttribute('active-item-class'));
      const hiddenContentClasses = classesOf(this.getAttribute('hidden-content-class'));
      this.triggers.forEach((trigger) => {
        const isActive = trigger === selected;
        const state = isActive ? 'active' : 'inactive';
        const { item, content } = this.parts(valueOf(trigger));
        trigger.dataset.state = state;
        trigger.setAttribute('aria-selected', String(isActive));
        trigger.setAttribute('tabindex', isActive ? '0' : '-1');
        if (item) {
          item.dataset.state = state;
          activeItemClasses.forEach((name) => item.classList.toggle(name, isActive));
        }
        if (content) {
          content.dataset.state = state;
          content.hidden = !isActive;
          hiddenContentClasses.forEach((name) => content.classList.toggle(name, !isActive));
          if (isActive) content.setAttribute('tabindex', '0');
          else content.removeAttribute('tabindex');
          const radio = this.radioOf(content);
          if (radio && isActive) radio.checked = true;
        }
      });
      this.dataset.value = valueOf(selected);
    }
  }

  if (!customElements.get(tagName)) customElements.define(tagName, GovukReactTabs);
}
