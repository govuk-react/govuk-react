/*
 * <govuk-react-auto-focus>: a headless, light-DOM custom element that moves focus to its target
 * when it appears, such as an error summary or a success banner, with or without React. It moves
 * focus once, and again each time `focus-key` changes.
 *
 * The target is server-rendered with `tabindex="-1"` and `autofocus`, so the browser focuses it
 * when the page loads, even without JavaScript. When the element connects later, such as when React
 * renders the target after a form is submitted, the element focuses it. As in govuk-frontend, the
 * target loses its `tabindex` when it loses focus. If the user has moved focus on before the script
 * runs, it leaves them there. Without JavaScript the target keeps its `tabindex`.
 *
 * A target that isn't shown yet, such as in a dialog, tab panel or popover that opens in the same
 * update, takes focus once it is, if that's within a second and the user hasn't pressed a key or
 * clicked.
 *
 * Markup inside the element:
 * - `[data-auto-focus]`: the target. Without one, the element's first child.
 *
 * Attributes:
 * - `disabled`: don't move focus.
 * - `focus-key`: move focus again each time it changes to a new value.
 */

import { dropAutoFocus, setFocus } from '../utils/set-focus.js';
import { setUpWhenReady } from '../utils/set-up-when-ready.js';

export const tagName = 'govuk-react-auto-focus';

/** How long to wait, in milliseconds, for a target that isn't shown yet. */
const wait = 1000;

/** Whether the target is rendered, where the browser can tell without trying to focus it. */
const shown = (target: HTMLElement) => (typeof target.checkVisibility === 'function' ? target.checkVisibility() : true);

if (typeof HTMLElement !== 'undefined' && typeof customElements !== 'undefined') {
  class GovukReactAutoFocus extends HTMLElement {
    static get observedAttributes() {
      return ['disabled', 'focus-key'];
    }

    private focused = false;

    private observer?: MutationObserver;

    private waiting?: AbortController;

    connectedCallback() {
      // The target may not be parsed or rendered yet.
      this.observer = setUpWhenReady(this, () => this.focusTarget());
    }

    disconnectedCallback() {
      this.observer?.disconnect();
      // Still waiting for the target: try again if the element moves.
      if (this.waiting) this.focused = false;
      this.stopWaiting();
    }

    attributeChangedCallback(name: string, previous: string | null, value: string | null) {
      if (name === 'disabled' && value !== null) this.stopWaiting();
      if (name !== 'focus-key' || value === null || value === previous || !this.focused) return;
      this.stopWaiting();
      this.focused = false;
      // React may remove `disabled` after this, in the same commit.
      queueMicrotask(() => {
        if (this.isConnected) this.focusTarget();
      });
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
        if (!target.isConnected) {
          // Not in place yet, such as in a streamed boundary: try again when it moves.
          this.focused = false;
          return;
        }
        if (!(shown(target) && setFocus(target))) this.focusWhenShown(target);
      });
      return true;
    }

    /**
     * Focuses a target that isn't shown yet once it is, such as in a dialog that opens in an effect.
     * Checking each frame runs after the dialog has moved focus itself, and catches what no
     * attribute marks, such as a popover. Gives up after `wait`, or when the user presses a key or
     * clicks.
     */
    private focusWhenShown(target: HTMLElement) {
      this.waiting = new AbortController();
      const { signal } = this.waiting;
      const giveUpAt = performance.now() + wait;
      const stop = () => {
        // Leave no `tabindex` that was only there to take focus.
        if (document.activeElement !== target) dropAutoFocus(target);
        this.stopWaiting();
      };
      const check = () => {
        if (signal.aborted) return undefined;
        if (!target.isConnected || performance.now() > giveUpAt) return stop();
        if (shown(target) && setFocus(target)) return this.stopWaiting();
        const frame = requestAnimationFrame(check);
        signal.addEventListener('abort', () => cancelAnimationFrame(frame), { once: true });
        return undefined;
      };
      document.addEventListener('keydown', stop, { capture: true, signal });
      document.addEventListener('pointerdown', stop, { capture: true, signal });
      requestAnimationFrame(check);
    }

    private stopWaiting() {
      this.waiting?.abort();
      this.waiting = undefined;
    }
  }

  if (!customElements.get(tagName)) customElements.define(tagName, GovukReactAutoFocus);
}
