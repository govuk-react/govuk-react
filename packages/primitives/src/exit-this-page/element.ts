/*
 * <govuk-react-exit-this-page>: a headless, light-DOM custom element that lets users leave a page
 * quickly, with or without React, as govuk-frontend's exit this page does.
 *
 * Without JavaScript the button is a link to a safe page. On upgrade, the button, a skip link, or
 * pressing Shift 3 times within 5 seconds hides the page, shows an overlay that says it's loading,
 * and goes to the button's `href`. A status tells screen readers how many more presses are needed.
 *
 * Markup inside the element:
 * - `[data-exit-this-page-button]`: the link to the safe page.
 * - `[data-exit-this-page-indicator]`: shows how many times Shift has been pressed, with
 *   `[data-exit-this-page-light]` children. It gets `data-visible` while counting, and each light
 *   `data-on` once pressed.
 * - `[data-exit-this-page-status]`: an empty status for screen readers. Make it visually hidden.
 *
 * Anywhere on the page, a link with `data-exit-this-page-skiplink` exits too. Only the page's
 * first element listens for Shift and the skip link.
 *
 * Before leaving, the element fires a cancelable, bubbling `govuk-react-exit-this-page:exit`
 * event. Cancel it to stay on the page.
 *
 * Attributes:
 * - `activated`, `timed-out`, `press-two-more-times`, `press-one-more-time`: the messages,
 *   English by default.
 * - `indicator-visible-class`, `light-on-class`: classes for the indicator and its lights.
 * - `hide-content-class`: classes for `body` that hide the page behind the overlay.
 * - `overlay-class`: classes for the overlay. Without them, the overlay covers the page with
 *   inline styles.
 */

export const tagName = 'govuk-react-exit-this-page';

export const messageNames = ['activated', 'timed-out', 'press-two-more-times', 'press-one-more-time'] as const;

export type MessageName = (typeof messageNames)[number];

/** govuk-frontend's English messages. */
export const defaultMessages: Record<MessageName, string> = {
  activated: 'Loading.',
  'timed-out': 'Exit this page expired.',
  'press-two-more-times': 'Shift, press 2 more times to exit.',
  'press-one-more-time': 'Shift, press 1 more time to exit.',
};

export interface ExitThisPageElement extends HTMLElement {
  /** Hides the page and goes to the button's `href`, unless the exit event is cancelled. */
  exit(): void;
}

declare global {
  interface HTMLElementTagNameMap {
    'govuk-react-exit-this-page': ExitThisPageElement;
  }
  interface HTMLElementEventMap {
    'govuk-react-exit-this-page:exit': CustomEvent<{ href: string }>;
  }
}

const timeoutMs = 5000;

const classesOf = (value: string | null) => (value ?? '').split(/\s+/).filter(Boolean);

const overlayStyles: Record<string, string> = {
  position: 'fixed',
  inset: '0',
  'z-index': '2147483647',
  background: 'white',
};

if (typeof HTMLElement !== 'undefined' && typeof customElements !== 'undefined') {
  class GovukReactExitThisPage extends HTMLElement implements ExitThisPageElement {
    private presses = 0;
    private lastKeyWasModified = false;
    private pressTimeout?: number;
    private messageTimeout?: number;
    private overlay?: HTMLElement;

    connectedCallback() {
      this.dataset.upgraded = '';
      document.addEventListener('keyup', this.onKeyup, true);
      document.addEventListener('click', this.onClick);
      window.addEventListener('pageshow', this.reset);
    }

    disconnectedCallback() {
      document.removeEventListener('keyup', this.onKeyup, true);
      document.removeEventListener('click', this.onClick);
      window.removeEventListener('pageshow', this.reset);
      this.clearTimers();
    }

    exit() {
      const button = this.own('[data-exit-this-page-button]');
      const href = button instanceof HTMLAnchorElement ? button.href : undefined;
      if (!href) return;
      const proceed = this.dispatchEvent(
        new CustomEvent('govuk-react-exit-this-page:exit', { detail: { href }, bubbles: true, cancelable: true })
      );
      if (!proceed) return;
      this.setStatus('');
      classesOf(this.getAttribute('hide-content-class')).forEach((name) => document.body.classList.add(name));
      this.overlay?.remove();
      const overlay = document.createElement('div');
      overlay.setAttribute('role', 'alert');
      const overlayClasses = classesOf(this.getAttribute('overlay-class'));
      if (overlayClasses.length) overlay.classList.add(...overlayClasses);
      else Object.entries(overlayStyles).forEach(([name, value]) => overlay.style.setProperty(name, value));
      document.body.appendChild(overlay);
      overlay.textContent = this.message('activated');
      this.overlay = overlay;
      window.location.href = href;
    }

    /** Only the page's first element listens to the page, as govuk-frontend's first instance does. */
    private get listening() {
      return document.querySelector(tagName) === this;
    }

    private own(selector: string) {
      return Array.from(this.querySelectorAll<HTMLElement>(selector)).find(
        (element) => element.closest(tagName) === this
      );
    }

    private message(name: MessageName) {
      return this.getAttribute(name) ?? defaultMessages[name];
    }

    // Keeps the text node React rendered, if any, so React can still update it.
    private setStatus(text: string) {
      const status = this.own('[data-exit-this-page-status]');
      if (!status || status.textContent === text) return;
      const { firstChild } = status;
      if (firstChild instanceof Text && status.childNodes.length === 1) firstChild.nodeValue = text;
      else status.textContent = text;
    }

    private readonly onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      const link = event.target instanceof Element ? event.target.closest('a') : null;
      if (!link) return;
      const own = link.matches('[data-exit-this-page-button]') && link.closest(tagName) === this;
      const skipLink = link.matches('[data-exit-this-page-skiplink]') && this.listening;
      if (!own && !skipLink) return;
      event.preventDefault();
      this.exit();
    };

    private readonly onKeyup = (event: KeyboardEvent) => {
      if (!this.listening) return;
      if (event.key === 'Shift' && !this.lastKeyWasModified) {
        this.presses += 1;
        this.updateIndicator();
        window.clearTimeout(this.messageTimeout);
        if (this.presses >= 3) {
          this.presses = 0;
          window.clearTimeout(this.pressTimeout);
          this.pressTimeout = undefined;
          this.exit();
        } else {
          this.setStatus(this.message(this.presses === 1 ? 'press-two-more-times' : 'press-one-more-time'));
          window.clearTimeout(this.pressTimeout);
          this.pressTimeout = window.setTimeout(this.timeOut, timeoutMs);
        }
      } else if (this.pressTimeout !== undefined) {
        this.timeOut();
      }
      this.lastKeyWasModified = event.shiftKey;
    };

    private readonly timeOut = () => {
      window.clearTimeout(this.pressTimeout);
      this.pressTimeout = undefined;
      this.presses = 0;
      this.setStatus(this.message('timed-out'));
      this.messageTimeout = window.setTimeout(() => this.setStatus(''), timeoutMs);
      this.updateIndicator();
    };

    /** Shows the page again when the browser brings it back from its cache. */
    private readonly reset = () => {
      classesOf(this.getAttribute('hide-content-class')).forEach((name) => document.body.classList.remove(name));
      this.overlay?.remove();
      this.overlay = undefined;
      this.presses = 0;
      this.setStatus('');
      this.updateIndicator();
      this.clearTimers();
    };

    private clearTimers() {
      window.clearTimeout(this.pressTimeout);
      window.clearTimeout(this.messageTimeout);
      this.pressTimeout = undefined;
      this.messageTimeout = undefined;
    }

    private updateIndicator() {
      const indicator = this.own('[data-exit-this-page-indicator]');
      if (!indicator) return;
      const visible = this.presses > 0;
      indicator.toggleAttribute('data-visible', visible);
      classesOf(this.getAttribute('indicator-visible-class')).forEach((name) =>
        indicator.classList.toggle(name, visible)
      );
      indicator.querySelectorAll('[data-exit-this-page-light]').forEach((light, index) => {
        const on = index < this.presses;
        light.toggleAttribute('data-on', on);
        classesOf(this.getAttribute('light-on-class')).forEach((name) => light.classList.toggle(name, on));
      });
    }
  }

  if (!customElements.get(tagName)) customElements.define(tagName, GovukReactExitThisPage);
}
