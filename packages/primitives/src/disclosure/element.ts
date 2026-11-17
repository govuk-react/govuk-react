/*
 * <govuk-react-disclosure>: a headless, light-DOM custom element that adds a show and hide
 * button to some content, such as a navigation menu on small screens, with or without React.
 *
 * Without JavaScript the content is shown and the button stays hidden. On upgrade the element
 * shows the button and hides the content, and the button shows and hides it. The button's
 * `aria-expanded` is the state.
 *
 * Markup inside the element:
 * - `[data-disclosure-toggle]`: a `button` of type "button", rendered `hidden`.
 * - `[data-disclosure-content]`: the content, with an id for the button's `aria-controls`.
 *
 * Attributes:
 * - `media`: while this media query matches, the content is always shown and the button hidden,
 *   with `aria-hidden`, as in govuk-frontend's service navigation.
 * - `open`: controls the content. "true" shows it, anything else hides it. A user's click only
 *   fires the change event, and the content changes when `open` does.
 * - `default-open`: start with the content shown.
 *
 * A user's click fires a bubbling `govuk-react-disclosure:change` event with `{ open }`, for
 * code that doesn't use React.
 */

declare global {
  interface HTMLElementEventMap {
    'govuk-react-disclosure:change': CustomEvent<{ open: boolean }>;
  }
}

export const tagName = 'govuk-react-disclosure';

export interface DisclosureElement extends HTMLElement {
  /** Whether the content is open, once upgraded, even while `media` shows it anyway. */
  readonly expanded: boolean | undefined;
  /** The user's last choice before `open` was first set, such as before React hydrated. */
  readonly pickedOpen: boolean | undefined;
}

if (typeof HTMLElement !== 'undefined' && typeof customElements !== 'undefined') {
  class GovukReactDisclosure extends HTMLElement implements DisclosureElement {
    static get observedAttributes() {
      return ['open'];
    }

    private toggle?: HTMLButtonElement;

    private content?: HTMLElement;

    private mql?: MediaQueryList;

    private observer?: MutationObserver;

    private isOpen = false;

    private picked?: boolean;

    private controlled = false;

    private readonly onClick = () => {
      const open = !this.isOpen;
      if (!this.hasAttribute('open')) {
        this.apply(open);
        if (!this.controlled) this.picked = open;
      }
      this.dispatchEvent(new CustomEvent('govuk-react-disclosure:change', { detail: { open }, bubbles: true }));
    };

    private readonly onModeChange = () => this.render();

    get expanded() {
      return this.toggle ? this.isOpen : undefined;
    }

    get pickedOpen() {
      return this.picked;
    }

    connectedCallback() {
      if (this.setup()) return;
      // The parts may not be parsed or rendered yet.
      this.observer = new MutationObserver(() => {
        if (this.setup()) this.observer?.disconnect();
      });
      this.observer.observe(this, { childList: true, subtree: true });
    }

    disconnectedCallback() {
      this.observer?.disconnect();
      this.toggle?.removeEventListener('click', this.onClick);
      this.mql?.removeEventListener('change', this.onModeChange);
      this.toggle = undefined;
      this.content = undefined;
      this.mql = undefined;
    }

    attributeChangedCallback() {
      const open = this.getAttribute('open');
      if (open === null) return;
      this.controlled = true;
      this.apply(open === 'true');
    }

    private own<E extends Element>(selector: string, type: new () => E): E | undefined {
      const element = Array.from(this.querySelectorAll(selector)).find((found) => found.closest(tagName) === this);
      return element instanceof type ? element : undefined;
    }

    private setup() {
      if (this.toggle) return true;
      const toggle = this.own('[data-disclosure-toggle]', HTMLButtonElement);
      const content = this.own('[data-disclosure-content]', HTMLElement);
      if (!toggle || !content) return false;
      this.toggle = toggle;
      this.content = content;
      const open = this.getAttribute('open');
      this.isOpen = open === null ? this.hasAttribute('default-open') : open === 'true';
      const media = this.getAttribute('media');
      if (media) {
        this.mql = window.matchMedia(media);
        this.mql.addEventListener('change', this.onModeChange);
      }
      toggle.addEventListener('click', this.onClick);
      this.render();
      return true;
    }

    private apply(open: boolean) {
      if (open === this.isOpen) return;
      this.isOpen = open;
      this.render();
    }

    private render() {
      const { toggle, content } = this;
      if (!toggle || !content) return;
      if (this.mql?.matches) {
        content.hidden = false;
        toggle.hidden = true;
        toggle.setAttribute('aria-hidden', 'true');
        toggle.removeAttribute('aria-expanded');
        return;
      }
      toggle.hidden = false;
      toggle.removeAttribute('aria-hidden');
      toggle.setAttribute('aria-expanded', String(this.isOpen));
      if (content.id) toggle.setAttribute('aria-controls', content.id);
      content.hidden = !this.isOpen;
    }
  }

  if (!customElements.get(tagName)) customElements.define(tagName, GovukReactDisclosure);
}
