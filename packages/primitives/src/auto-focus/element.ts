/*
 * <govuk-react-auto-focus>: a headless, light-DOM custom element that moves focus to its target
 * when it appears, such as an error summary or a success banner, with or without React.
 *
 * The target is server-rendered with `tabindex="-1"` and `autofocus`, so the browser focuses it
 * when the page loads, even without JavaScript. When the element connects later, such as when React
 * renders the target after a form is submitted, the element focuses it. As in govuk-frontend, the
 * target loses its `tabindex` when it loses focus.
 *
 * Markup inside the element:
 * - `[data-auto-focus]`: the target. Without one, the element's first child.
 *
 * Attributes:
 * - `disabled`: don't move focus.
 */

import { setFocus } from '../utils/set-focus';

export const tagName = 'govuk-react-auto-focus';

if (typeof HTMLElement !== 'undefined' && typeof customElements !== 'undefined') {
  class GovukReactAutoFocus extends HTMLElement {
    private focused = false;

    private observer?: MutationObserver;

    connectedCallback() {
      if (this.focusTarget()) return;
      // The target may not be parsed or rendered yet.
      this.observer = new MutationObserver(() => {
        if (this.focusTarget()) this.observer?.disconnect();
      });
      this.observer.observe(this, { childList: true, subtree: true });
    }

    disconnectedCallback() {
      this.observer?.disconnect();
    }

    private get target() {
      const target =
        Array.from(this.querySelectorAll('[data-auto-focus]')).find((found) => found.closest(tagName) === this) ??
        this.firstElementChild;
      return target instanceof HTMLElement ? target : undefined;
    }

    /** Focuses the target once, and says whether there was one to focus. */
    private focusTarget() {
      if (this.focused) return true;
      const { target } = this;
      if (!target) return false;
      this.focused = true;
      if (this.hasAttribute('disabled')) return true;
      // The browser may have focused it already, through `autofocus`.
      if (document.activeElement === target) {
        setFocus(target, { preventScroll: true });
        return true;
      }
      // React puts focus back where it was at the end of a commit, which can connect the element.
      queueMicrotask(() => {
        if (target.isConnected) setFocus(target);
      });
      return true;
    }
  }

  if (!customElements.get(tagName)) customElements.define(tagName, GovukReactAutoFocus);
}
