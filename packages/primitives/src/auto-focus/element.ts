/*
 * <govuk-react-auto-focus>: a headless, light-DOM custom element that moves focus to its target
 * when it appears, such as an error summary or a success banner, with or without React. It moves
 * focus once: give the element a new `key` in React to move it again, such as after each submit.
 *
 * The target is server-rendered with `tabindex="-1"` and `autofocus`, so the browser focuses it
 * when the page loads, even without JavaScript. When the element connects later, such as when React
 * renders the target after a form is submitted, the element focuses it. As in govuk-frontend, the
 * target loses its `tabindex` when it loses focus. If the user has moved focus on before the script
 * runs, it leaves them there. Without JavaScript the target keeps its `tabindex`.
 *
 * Markup inside the element:
 * - `[data-auto-focus]`: the target. Without one, the element's first child.
 *
 * Attributes:
 * - `disabled`: don't move focus.
 */

import { dropAutoFocus, setFocus } from '../utils/set-focus';
import { setUpWhenReady } from '../utils/set-up-when-ready';

export const tagName = 'govuk-react-auto-focus';

if (typeof HTMLElement !== 'undefined' && typeof customElements !== 'undefined') {
  class GovukReactAutoFocus extends HTMLElement {
    private focused = false;

    private observer?: MutationObserver;

    connectedCallback() {
      // The target may not be parsed or rendered yet.
      this.observer = setUpWhenReady(this, () => this.focusTarget());
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
      // Rendered by the server with `autofocus`, which React never sets on the client.
      if (target.hasAttribute('autofocus')) {
        const active = document.activeElement;
        if (active === target) {
          setFocus(target, { preventScroll: true });
          return true;
        }
        if (active && active !== document.body) {
          // The user moved on before this script ran: leave them there.
          dropAutoFocus(target);
          return true;
        }
      }
      // React puts focus back where it was at the end of a commit, which can connect the element.
      queueMicrotask(() => {
        // Not in place yet, such as in a streamed boundary: try again when it moves.
        if (!target.isConnected || !setFocus(target)) this.focused = false;
      });
      return true;
    }
  }

  if (!customElements.get(tagName)) customElements.define(tagName, GovukReactAutoFocus);
}
