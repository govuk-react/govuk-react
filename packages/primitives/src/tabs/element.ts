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
  /** Select a tab without reporting a change, such as to apply a controlled value. */
  select(value: string): void;
}

const valueOf = (element: Element) => (element instanceof HTMLElement ? element.dataset.value : undefined);

const classesOf = (attribute: string | null) => attribute?.split(/\s+/).filter(Boolean) ?? [];

if (typeof HTMLElement !== 'undefined' && typeof customElements !== 'undefined') {
  class GovukReactTabs extends HTMLElement implements TabsElement {
    static get observedAttributes() {
      return ['value'];
    }

    private mql?: MediaQueryList;

    private started = false;

    private active = false;

    private observer?: MutationObserver;

    private readonly onModeChange = () => this.checkMode();

    private readonly onClick = (event: MouseEvent) => {
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

    select(value: string) {
      const trigger = this.triggerFor(value);
      if (trigger && this.active) this.show(trigger);
    }

    connectedCallback() {
      // Lay out as if the element weren't there.
      if (!this.style.display) this.style.display = 'contents';
      if (this.triggers.length) {
        this.start();
        return;
      }
      // Children may not be parsed or hydrated yet: upgrade once the tabs arrive.
      this.observer = new MutationObserver(() => {
        if (this.triggers.length) this.start();
      });
      this.observer.observe(this, { childList: true, subtree: true });
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
      this.observer?.disconnect();
      const media = this.getAttribute('media');
      if (media) {
        this.mql = window.matchMedia(media);
        this.mql.addEventListener('change', this.onModeChange);
      }
      this.checkMode();
    }

    private checkMode() {
      if (!this.mql || this.mql.matches) this.setup();
      else this.teardown();
    }

    private setup() {
      if (this.active) return;
      this.active = true;
      this.classList.add(...classesOf(this.getAttribute('upgraded-class')));
      this.own('[data-tabs-list]').forEach((list) => list.setAttribute('role', 'tablist'));
      this.own('[data-tabs-item]').forEach((item) => item.setAttribute('role', 'presentation'));
      this.triggers.forEach((trigger) => {
        const { content } = this.parts(valueOf(trigger));
        trigger.setAttribute('role', 'tab');
        if (!content) return;
        if (!content.id) content.id = `${valueOf(trigger)}-panel`;
        if (!trigger.id) {
          trigger.id = `${content.id}-tab`;
          trigger.dataset.tabsGeneratedId = '';
        }
        trigger.setAttribute('aria-controls', content.id);
        content.setAttribute('role', 'tabpanel');
        content.setAttribute('aria-labelledby', trigger.id);
      });
      this.addEventListener('click', this.onClick);
      this.addEventListener('keydown', this.onKeydown);

      const radiosFallback = this.getAttribute('fallback') === 'radios';
      const checked = radiosFallback
        ? this.own('[data-tabs-content]').find((content) => this.radioOf(content)?.checked)
        : undefined;
      const hash = window.location.hash.slice(1);
      const initial =
        this.triggerFor(this.getAttribute('value')) ??
        this.triggerFor(this.dataset.value) ??
        this.triggerFor(checked && valueOf(checked)) ??
        (radiosFallback
          ? undefined
          : this.triggers.find((trigger) => this.parts(valueOf(trigger)).content?.id === hash)) ??
        this.triggerFor(this.getAttribute('default-value')) ??
        this.triggers[0];
      this.show(initial);
    }

    private teardown() {
      if (!this.active) return;
      this.active = false;
      this.removeEventListener('click', this.onClick);
      this.removeEventListener('keydown', this.onKeydown);
      this.classList.remove(...classesOf(this.getAttribute('upgraded-class')));
      this.own('[data-tabs-list]').forEach((list) => list.removeAttribute('role'));
      this.own('[data-tabs-item]').forEach((item) => item.removeAttribute('role'));
      this.triggers.forEach((trigger) => {
        if (trigger.dataset.tabsGeneratedId !== undefined) {
          trigger.removeAttribute('id');
          delete trigger.dataset.tabsGeneratedId;
        }
        ['role', 'aria-controls', 'aria-selected', 'tabindex'].forEach((name) => trigger.removeAttribute(name));
      });
      this.own('[data-tabs-content]').forEach((content) => {
        ['role', 'aria-labelledby', 'tabindex', 'hidden'].forEach((name) => content.removeAttribute(name));
        content.classList.remove(...classesOf(this.getAttribute('hidden-content-class')));
      });
    }

    /** A user's choice: select it, then report it. */
    private choose(trigger: HTMLElement) {
      const value = valueOf(trigger);
      if (value === undefined || value === this.dataset.value) return;
      this.show(trigger);
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
