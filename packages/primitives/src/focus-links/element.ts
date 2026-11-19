/*
 * <govuk-react-focus-links>: a headless, light-DOM custom element that makes links to a part of the
 * same page move focus there, with or without React, as govuk-frontend's error summary and skip
 * link do.
 *
 * Without JavaScript the browser goes to the target as usual. With it:
 * - A link to a form field focuses the field and scrolls its label into view, or its fieldset's
 *   legend for a radio, a checkbox, or a field near the legend, so users see the question.
 * - A link to anything else, such as the main content, focuses the target, giving it
 *   `tabindex="-1"` and `focused-class` until it loses focus.
 *
 * Attributes:
 * - `focused-class`: classes for a target that isn't a form field while it has focus.
 */

import { setFocus } from '../utils/set-focus';

export const tagName = 'govuk-react-focus-links';

const classesOf = (attribute: string | null) => attribute?.split(/\s+/).filter(Boolean) ?? [];

const isField = (element: Element) =>
  element instanceof HTMLInputElement ||
  element instanceof HTMLSelectElement ||
  element instanceof HTMLTextAreaElement ||
  element instanceof HTMLButtonElement;

/** As govuk-frontend: the legend users need to see to understand the field, or else its label. */
function legendOrLabel(field: HTMLElement) {
  const legend = field.closest('fieldset')?.getElementsByTagName('legend')[0];
  if (legend) {
    if (field instanceof HTMLInputElement && (field.type === 'checkbox' || field.type === 'radio')) return legend;
    const legendTop = legend.getBoundingClientRect().top;
    const fieldRect = field.getBoundingClientRect();
    if (
      fieldRect.height &&
      window.innerHeight &&
      fieldRect.top + fieldRect.height - legendTop < window.innerHeight / 2
    ) {
      return legend;
    }
  }
  return document.querySelector(`label[for="${CSS.escape(field.id)}"]`) ?? field.closest('label');
}

if (typeof HTMLElement !== 'undefined' && typeof customElements !== 'undefined') {
  class GovukReactFocusLinks extends HTMLElement {
    private readonly onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey) return;
      const link = event.target instanceof Element ? event.target.closest('a[href]') : null;
      if (!(link instanceof HTMLAnchorElement) || !this.contains(link)) return;
      if (link.origin !== window.location.origin || link.pathname !== window.location.pathname) return;
      const id = decodeURIComponent(link.hash.slice(1));
      const target = id ? document.getElementById(id) : null;
      if (!target) return;
      if (isField(target)) {
        const label = legendOrLabel(target);
        if (!label) return;
        // Scroll to the question, not the field, which can hide it.
        event.preventDefault();
        label.scrollIntoView();
        target.focus({ preventScroll: true });
        return;
      }
      setFocus(target, { focusedClasses: classesOf(this.getAttribute('focused-class')) });
    };

    connectedCallback() {
      this.addEventListener('click', this.onClick);
    }

    disconnectedCallback() {
      this.removeEventListener('click', this.onClick);
    }
  }

  if (!customElements.get(tagName)) customElements.define(tagName, GovukReactFocusLinks);
}
