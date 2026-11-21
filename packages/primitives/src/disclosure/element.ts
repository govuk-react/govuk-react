/*
 * <govuk-react-disclosure>: a headless, light-DOM custom element that adds a show and hide
 * button to some content, such as a navigation menu on small screens, with or without React.
 *
 * Without JavaScript the content is shown and the button stays hidden. On upgrade the element
 * shows the button and hides the content, and the button shows and hides it. The button's
 * `aria-expanded` is the state.
 *
 * Markup inside the element:
 * - `[data-disclosure-trigger]`: a `button` of type "button", rendered `hidden`.
 * - `[data-disclosure-content]`: the content, with an id for the button's `aria-controls`. It's
 *   hidden with plain `hidden`, or with `hidden="until-found"` if its `data-hidden` is
 *   "until-found", so find in page can open it.
 *
 * Attributes:
 * - `media`: while this media query matches, the content is always shown and the button hidden,
 *   with `aria-hidden`, as in govuk-frontend's service navigation.
 * - `default-open`: start with the content shown.
 *
 * Properties:
 * - `open`: when `true` or `false`, controls the content. A user's click then only fires the
 *   change event, and the content changes when `open` does. `undefined` stops controlling it.
 *
 * While upgraded it sets `data-upgraded`, and `data-state` ("open" or "closed") on itself, the
 * button and the content. A user's click fires a bubbling
 * `govuk-react-disclosure:change` event with `{ open }`, for code that doesn't use React.
 */

import { setHidden } from '../utils/dom.js';
import { setUpWhenReady } from '../utils/set-up-when-ready.js';

declare global {
  interface HTMLElementTagNameMap {
    'govuk-react-disclosure': DisclosureElement;
  }
  interface HTMLElementEventMap {
    'govuk-react-disclosure:change': CustomEvent<{ open: boolean }>;
  }
}

export const tagName = 'govuk-react-disclosure';

export interface DisclosureElement extends HTMLElement {
  /** Controls the content when `true` or `false`. */
  open: boolean | undefined;
  /** Whether the content is open, once upgraded, even while `media` shows it anyway. */
  readonly expanded: boolean | undefined;
  /** The user's last choice before `open` was first set, such as before React hydrated. */
  readonly pickedOpen: boolean | undefined;
}

if (typeof HTMLElement !== 'undefined' && typeof customElements !== 'undefined') {
  class GovukReactDisclosure extends HTMLElement implements DisclosureElement {
    static get observedAttributes() {
      return ['media'];
    }

    private toggle?: HTMLButtonElement;

    private content?: HTMLElement;

    private mql?: MediaQueryList;

    private observer?: MutationObserver;

    private isOpen = false;

    private picked?: boolean;

    private controlled = false;

    private controlledOpen?: boolean;

    private readonly onClick = () => this.change(!this.isOpen);

    // `beforematch` doesn't bubble.
    private readonly onBeforeMatch = () => {
      if (!this.isOpen) this.change(true);
    };

    private change(open: boolean) {
      if (this.controlledOpen === undefined) {
        this.apply(open);
        if (!this.controlled) this.picked = open;
      }
      this.dispatchEvent(new CustomEvent('govuk-react-disclosure:change', { detail: { open }, bubbles: true }));
    }

    private readonly onModeChange = () => this.render();

    get open() {
      return this.controlledOpen;
    }

    set open(open: boolean | undefined) {
      this.controlledOpen = open;
      if (open === undefined) return;
      this.controlled = true;
      this.apply(open);
    }

    get expanded() {
      return this.toggle ? this.isOpen : undefined;
    }

    get pickedOpen() {
      return this.picked;
    }

    connectedCallback() {
      this.observer = setUpWhenReady(this, () => this.setup());
    }

    disconnectedCallback() {
      this.observer?.disconnect();
      this.toggle?.removeEventListener('click', this.onClick);
      this.content?.removeEventListener('beforematch', this.onBeforeMatch);
      this.mql?.removeEventListener('change', this.onModeChange);
      this.toggle = undefined;
      this.content = undefined;
      this.mql = undefined;
    }

    attributeChangedCallback() {
      if (this.toggle) this.watchMedia();
    }

    private own<E extends Element>(selector: string, type: new () => E): E | undefined {
      const element = Array.from(this.querySelectorAll(selector)).find((found) => found.closest(tagName) === this);
      return element instanceof type ? element : undefined;
    }

    private setup() {
      if (this.toggle) return true;
      const toggle = this.own('[data-disclosure-trigger]', HTMLButtonElement);
      const content = this.own('[data-disclosure-content]', HTMLElement);
      if (!toggle || !content) return false;
      this.toggle = toggle;
      this.content = content;
      this.isOpen = this.controlledOpen ?? this.hasAttribute('default-open');
      this.dataset.upgraded = '';
      toggle.addEventListener('click', this.onClick);
      content.addEventListener('beforematch', this.onBeforeMatch);
      this.watchMedia();
      return true;
    }

    private watchMedia() {
      this.mql?.removeEventListener('change', this.onModeChange);
      const media = this.getAttribute('media');
      this.mql = media ? window.matchMedia(media) : undefined;
      this.mql?.addEventListener('change', this.onModeChange);
      this.render();
    }

    private apply(open: boolean) {
      if (open === this.isOpen) return;
      this.isOpen = open;
      this.render();
    }

    private render() {
      const { toggle, content } = this;
      if (!toggle || !content) return;
      const state = this.mql?.matches || this.isOpen ? 'open' : 'closed';
      [this, toggle, content].forEach((element) => {
        element.dataset.state = state;
      });
      if (this.mql?.matches) {
        setHidden(content, false, '');
        toggle.hidden = true;
        toggle.setAttribute('aria-hidden', 'true');
        toggle.removeAttribute('aria-expanded');
        return;
      }
      toggle.hidden = false;
      toggle.removeAttribute('aria-hidden');
      toggle.setAttribute('aria-expanded', String(this.isOpen));
      if (content.id) toggle.setAttribute('aria-controls', content.id);
      setHidden(content, !this.isOpen, '');
    }
  }

  if (!customElements.get(tagName)) customElements.define(tagName, GovukReactDisclosure);
}
