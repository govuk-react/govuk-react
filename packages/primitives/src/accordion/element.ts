/*
 * <govuk-react-accordion>: a headless, light-DOM custom element that lets users show and hide
 * sections of content, with or without React.
 *
 * Without JavaScript every section is shown, under a plain heading. Each section also holds a
 * hidden button with the same heading. On upgrade the element shows the buttons and hides the
 * plain headings, then each button shows and hides its section's content, and a "show all"
 * button shows or hides every section. The rendered markup is never moved, so React can keep
 * rendering it. Content is hidden with `hidden="until-found"`, so find in page still opens it.
 *
 * Markup inside the element:
 * - `[data-accordion-controls]` (optional): holds the "show all" button. Rendered `hidden`.
 *   - `button[data-accordion-show-all]`, with a `[data-accordion-show-all-text]` for its text.
 * - `[data-accordion-section][data-value]`: a section. `data-expanded` opens it at first.
 *   - `[data-accordion-fallback]`: the plain heading and summary, hidden on upgrade.
 *   - `button[data-accordion-trigger]`: rendered `hidden`. Its accessible name is the text of its
 *     `[data-accordion-label]` elements and the show or hide label. Its
 *     `[data-accordion-toggle-text]` shows the show or hide text.
 *   - `[data-accordion-content]`: the content, with an id.
 * - `[data-accordion-icon]` (optional): in the buttons, given `collapsed-icon-class` while
 *   collapsed.
 *
 * Attributes:
 * - `value`: the open sections' values, separated by spaces, to control them. A user's click only
 *   fires the change event, and the sections change when `value` does.
 * - `default-value`: the sections open at first, instead of `data-expanded`.
 * - `remember-expanded`: "false" stops the open sections being remembered in session storage,
 *   keyed by content id, as govuk-frontend does.
 * - `show-section-text`, `hide-section-text`, `show-section-label`, `hide-section-label`,
 *   `show-all-sections-text`, `hide-all-sections-text`: the text, English by default.
 * - `upgraded-class`, `expanded-section-class`, `collapsed-icon-class`: classes to add, for styles
 *   keyed off classes rather than `data-upgraded`, `data-state` and `aria-expanded`.
 *
 * A user's click fires a bubbling `govuk-react-accordion:change` event with `{ value }`, the open
 * sections' values.
 */

import { classesOf, setText } from '../utils/dom.js';

declare global {
  interface HTMLElementTagNameMap {
    'govuk-react-accordion': AccordionElement;
  }
  interface HTMLElementEventMap {
    'govuk-react-accordion:change': CustomEvent<{ value: string[] }>;
  }
}

export const tagName = 'govuk-react-accordion';

export interface AccordionElement extends HTMLElement {
  /** The open sections' values, once upgraded. */
  readonly openValues: string[] | undefined;
  /** The open sections after the user's last change before `value` was first set, such as before React hydrated. */
  readonly pickedValue: string[] | undefined;
}

const defaults = {
  'show-section-text': 'Show',
  'hide-section-text': 'Hide',
  'show-section-label': 'Show this section',
  'hide-section-label': 'Hide this section',
  'show-all-sections-text': 'Show all sections',
  'hide-all-sections-text': 'Hide all sections',
};

const valuesOf = (attribute: string | null) => attribute?.split(/\s+/).filter(Boolean);

if (typeof HTMLElement !== 'undefined' && typeof customElements !== 'undefined') {
  class GovukReactAccordion extends HTMLElement implements AccordionElement {
    static get observedAttributes() {
      return ['value'];
    }

    private open = new Set<string>();

    private upgraded = false;

    private controlled = false;

    private picked?: string[];

    private readonly prepared = new WeakSet<HTMLElement>();

    private observer?: MutationObserver;

    private readonly onClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const trigger = target?.closest('button[data-accordion-trigger]');
      if (trigger && this.ownsElement(trigger)) {
        const value = this.sectionOf(trigger)?.dataset.value;
        if (value === undefined) return;
        const next = new Set(this.open);
        if (next.has(value)) next.delete(value);
        else next.add(value);
        this.change(next);
        return;
      }
      const showAll = target?.closest('button[data-accordion-show-all]');
      if (showAll && this.ownsElement(showAll)) {
        const values = this.sections.map((section) => section.dataset.value ?? '');
        this.change(new Set(this.allOpen ? [] : values));
      }
    };

    // Find in page opens a collapsed section that holds the match.
    private readonly onBeforeMatch = (event: Event) => {
      const section = event.target instanceof Element ? this.sectionOf(event.target) : undefined;
      const value = section?.dataset.value;
      if (value === undefined || this.open.has(value)) return;
      this.change(new Set([...this.open, value]), true);
    };

    get openValues() {
      return this.upgraded ? [...this.open] : undefined;
    }

    get pickedValue() {
      return this.picked;
    }

    connectedCallback() {
      // Sections can be parsed or rendered later, and React can rewrite a class attribute.
      this.observer = new MutationObserver((records) => {
        if (!this.upgraded) {
          this.setup();
          return;
        }
        if (records.some((record) => record.type === 'childList'))
          this.sections.forEach((section) => this.prepare(section));
        this.render();
      });
      this.observer.observe(this, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
      if (this.upgraded) {
        // Moved, rather than new: keep the open sections.
        this.listen();
        this.render();
      } else {
        this.setup();
      }
    }

    disconnectedCallback() {
      this.observer?.disconnect();
      this.removeEventListener('click', this.onClick);
      this.removeEventListener('beforematch', this.onBeforeMatch, true);
    }

    attributeChangedCallback() {
      const value = valuesOf(this.getAttribute('value'));
      this.controlled = value !== undefined;
      if (!value) return;
      this.open = new Set(value);
      this.render();
    }

    private get sections() {
      return this.own('[data-accordion-section]');
    }

    private get allOpen() {
      return this.sections.every((section) => this.open.has(section.dataset.value ?? ''));
    }

    private own(selector: string) {
      // Leave nested accordions to their own element.
      return Array.from(this.querySelectorAll<HTMLElement>(selector)).filter((element) => this.ownsElement(element));
    }

    private ownsElement(element: Element) {
      return element.closest(tagName) === this;
    }

    private sectionOf(element: Element) {
      const section = element.closest<HTMLElement>('[data-accordion-section]');
      return section && this.ownsElement(section) ? section : undefined;
    }

    private find(section: HTMLElement, selector: string) {
      return Array.from(section.querySelectorAll<HTMLElement>(selector)).find(
        (element) => this.sectionOf(element) === section
      );
    }

    private text(name: keyof typeof defaults) {
      return this.getAttribute(name) ?? defaults[name];
    }

    private get remember() {
      return this.getAttribute('remember-expanded') !== 'false';
    }

    private setup() {
      const sections = this.sections;
      if (!sections.some((section) => this.find(section, 'button[data-accordion-trigger]'))) return;
      this.upgraded = true;
      const value = valuesOf(this.getAttribute('value'));
      this.controlled = value !== undefined;
      this.open = new Set(value ?? valuesOf(this.getAttribute('default-value')));
      this.dataset.upgraded = '';
      const upgradedClasses = classesOf(this.getAttribute('upgraded-class'));
      if (upgradedClasses.length) this.classList.add(...upgradedClasses);
      this.own('[data-accordion-controls]').forEach((controls) => {
        controls.hidden = false;
      });
      sections.forEach((section) => this.prepare(section));
      this.listen();
      this.render();
    }

    private listen() {
      this.addEventListener('click', this.onClick);
      // `beforematch` doesn't bubble.
      this.addEventListener('beforematch', this.onBeforeMatch, true);
    }

    /** Swaps a section's fallback for its trigger, once, and sets its first state. */
    private prepare(section: HTMLElement) {
      const trigger = this.find(section, 'button[data-accordion-trigger]');
      if (!trigger || this.prepared.has(section)) return;
      this.prepared.add(section);
      const value = section.dataset.value ?? '';
      if (!this.controlled) {
        const defaultValue = valuesOf(this.getAttribute('default-value'));
        if (defaultValue ? defaultValue.includes(value) : section.hasAttribute('data-expanded')) this.open.add(value);
        this.restore(section);
      }
      Array.from(section.querySelectorAll<HTMLElement>('[data-accordion-fallback]'))
        .filter((fallback) => this.sectionOf(fallback) === section)
        .forEach((fallback) => {
          fallback.hidden = true;
        });
      trigger.hidden = false;
      const content = this.find(section, '[data-accordion-content]');
      if (content?.id) trigger.setAttribute('aria-controls', content.id);
    }

    /** A section remembered from earlier in the session, as in govuk-frontend. */
    private restore(section: HTMLElement) {
      const id = this.find(section, '[data-accordion-content]')?.id;
      const value = section.dataset.value;
      if (!this.remember || !id || value === undefined) return;
      try {
        const state = window.sessionStorage.getItem(id);
        if (state === 'true') this.open.add(value);
        else if (state === 'false') this.open.delete(value);
      } catch {
        // Storage can be unavailable.
      }
    }

    /** Remembers the sections that changed, as govuk-frontend does. */
    private store(previous: Set<string>) {
      if (!this.remember) return;
      this.sections.forEach((section) => {
        const value = section.dataset.value ?? '';
        const id = this.find(section, '[data-accordion-content]')?.id;
        if (!id || previous.has(value) === this.open.has(value)) return;
        try {
          window.sessionStorage.setItem(id, String(this.open.has(value)));
        } catch {
          // Storage can be unavailable.
        }
      });
    }

    private change(next: Set<string>, force = false) {
      const value = this.sections.map((section) => section.dataset.value ?? '').filter((v) => next.has(v));
      // Find in page must show the match, so it opens the section even when controlled.
      if (!this.controlled || force) {
        const previous = this.open;
        this.open = new Set(value);
        if (!this.controlled) {
          this.picked = value;
          this.store(previous);
        }
        this.render();
      }
      this.dispatchEvent(new CustomEvent('govuk-react-accordion:change', { detail: { value }, bubbles: true }));
    }

    private render() {
      if (!this.upgraded) return;
      const expandedClasses = classesOf(this.getAttribute('expanded-section-class'));
      const collapsedIconClasses = classesOf(this.getAttribute('collapsed-icon-class'));
      const setIcon = (root: HTMLElement, expanded: boolean) => {
        Array.from(root.querySelectorAll<HTMLElement>('[data-accordion-icon]')).forEach((icon) => {
          collapsedIconClasses.forEach((name) => icon.classList.toggle(name, !expanded));
        });
      };
      this.sections.forEach((section) => {
        const expanded = this.open.has(section.dataset.value ?? '');
        const trigger = this.find(section, 'button[data-accordion-trigger]');
        const content = this.find(section, '[data-accordion-content]');
        section.dataset.state = expanded ? 'open' : 'closed';
        expandedClasses.forEach((name) => section.classList.toggle(name, expanded));
        if (content) {
          if (expanded) content.removeAttribute('hidden');
          else content.setAttribute('hidden', 'until-found');
        }
        if (!trigger) return;
        trigger.setAttribute('aria-expanded', String(expanded));
        const labels = Array.from(trigger.querySelectorAll('[data-accordion-label]')).map(
          (label) => label.textContent?.trim() ?? ''
        );
        trigger.setAttribute(
          'aria-label',
          [...labels, this.text(expanded ? 'hide-section-label' : 'show-section-label')].join(' , ')
        );
        const toggleText = trigger.querySelector('[data-accordion-toggle-text]');
        if (toggleText) setText(toggleText, this.text(expanded ? 'hide-section-text' : 'show-section-text'));
        setIcon(trigger, expanded);
      });
      const allOpen = this.allOpen;
      this.own('button[data-accordion-show-all]').forEach((showAll) => {
        showAll.setAttribute('aria-expanded', String(allOpen));
        const text = showAll.querySelector('[data-accordion-show-all-text]');
        if (text) setText(text, this.text(allOpen ? 'hide-all-sections-text' : 'show-all-sections-text'));
        setIcon(showAll, allOpen);
      });
    }
  }

  if (!customElements.get(tagName)) customElements.define(tagName, GovukReactAccordion);
}
