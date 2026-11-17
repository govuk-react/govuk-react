/*
 * <govuk-react-password-input>: a headless, light-DOM custom element that adds a show and hide
 * button to a password field, with or without React.
 *
 * The input's `type` is the state. Without JavaScript the field stays a password field and the
 * button stays hidden. On upgrade the element shows the button, which switches the input between
 * "password" and "text", updates its own text and label, and announces the change.
 *
 * Markup inside the element:
 * - `[data-password-input]`: an `input` of type "password".
 * - `[data-password-toggle]`: a `button` of type "button", rendered `hidden`.
 * - `[data-password-status]` (optional): a visually hidden live region for the announcements.
 *   Without one, the element adds one after the input.
 *
 * Attributes, for the text (English by default):
 * - `show-text`, `hide-text`: the button's text.
 * - `show-label`, `hide-label`: the button's accessible name.
 * - `shown-announcement`, `hidden-announcement`: announced when the password is shown or hidden.
 *
 * As in govuk-frontend, the password is hidden again when its form is submitted, and when the
 * page is restored from the back-forward cache.
 */

export const tagName = 'govuk-react-password-input';

const defaults = {
  'show-text': 'Show',
  'hide-text': 'Hide',
  'show-label': 'Show password',
  'hide-label': 'Hide password',
  'shown-announcement': 'Your password is visible',
  'hidden-announcement': 'Your password is hidden',
};

// The same visually hidden styles as govuk-frontend's, for a live region the element adds itself.
const visuallyHidden =
  'position:absolute;width:1px;height:1px;margin:0;padding:0;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);border:0;white-space:nowrap';

if (typeof HTMLElement !== 'undefined' && typeof customElements !== 'undefined') {
  class GovukReactPasswordInput extends HTMLElement {
    private input?: HTMLInputElement;

    private toggle?: HTMLButtonElement;

    private status?: HTMLElement;

    private form?: HTMLFormElement | null;

    private observer?: MutationObserver;

    private readonly onToggle = (event: MouseEvent) => {
      event.preventDefault();
      if (this.input) this.setVisible(this.input.type === 'password');
    };

    private readonly onSubmit = () => this.setVisible(false);

    private readonly onPageShow = (event: PageTransitionEvent) => {
      if (event.persisted) this.setVisible(false);
    };

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
      this.toggle?.removeEventListener('click', this.onToggle);
      this.form?.removeEventListener('submit', this.onSubmit);
      window.removeEventListener('pageshow', this.onPageShow);
      this.input = undefined;
      this.toggle = undefined;
      this.form = undefined;
    }

    private text(name: keyof typeof defaults) {
      return this.getAttribute(name) ?? defaults[name];
    }

    private own<E extends Element>(selector: string, type: new () => E): E | undefined {
      const element = this.querySelector(selector);
      return element instanceof type && element.closest(tagName) === this ? element : undefined;
    }

    private setup() {
      if (this.input) return true;
      const input = this.own('[data-password-input]', HTMLInputElement);
      const toggle = this.own('[data-password-toggle]', HTMLButtonElement);
      if (!input || !toggle) return false;
      this.input = input;
      this.toggle = toggle;
      this.status = this.own('[data-password-status]', HTMLElement);
      if (!this.status) {
        this.status = document.createElement('div');
        this.status.dataset.passwordStatus = '';
        this.status.setAttribute('aria-live', 'polite');
        this.status.setAttribute('style', visuallyHidden);
        input.insertAdjacentElement('afterend', this.status);
      }
      toggle.hidden = false;
      toggle.addEventListener('click', this.onToggle);
      this.form = input.form;
      this.form?.addEventListener('submit', this.onSubmit);
      window.addEventListener('pageshow', this.onPageShow);
      // Start hidden, with the text set but nothing announced.
      input.type = 'password';
      this.label(false);
      return true;
    }

    private setVisible(visible: boolean) {
      const { input } = this;
      if (!input || visible === (input.type === 'text')) return;
      input.type = visible ? 'text' : 'password';
      this.label(visible);
      if (this.status) this.status.textContent = this.text(visible ? 'shown-announcement' : 'hidden-announcement');
    }

    private label(visible: boolean) {
      if (!this.toggle) return;
      this.toggle.textContent = this.text(visible ? 'hide-text' : 'show-text');
      this.toggle.setAttribute('aria-label', this.text(visible ? 'hide-label' : 'show-label'));
    }
  }

  if (!customElements.get(tagName)) customElements.define(tagName, GovukReactPasswordInput);
}
