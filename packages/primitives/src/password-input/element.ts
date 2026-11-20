/*
 * <govuk-react-password-input>: a headless, light-DOM custom element that adds a show and hide
 * button to a password field, with or without React.
 *
 * The input's `type` is the state, kept when React sets it again. Without JavaScript the field
 * stays a password field and the button stays hidden. On upgrade the element shows the button, which switches the input between
 * "password" and "text", updates its own text and label, and announces the change.
 *
 * Markup inside the element:
 * - `[data-password-input]`: an `input` of type "password".
 * - `[data-password-toggle]`: a `button` of type "button", rendered `hidden`.
 * - `[data-password-status]` (optional): a visually hidden live region for the announcements.
 *   Without one, the element adds one after the input.
 *
 * While upgraded it sets `data-upgraded`.
 *
 * Attributes, for the text (English by default):
 * - `show-text`, `hide-text`: the button's text.
 * - `show-label`, `hide-label`: the button's accessible name.
 * - `shown-announcement`, `hidden-announcement`: announced when the password is shown or hidden.
 *
 * As in govuk-frontend, the password is hidden again when its form is submitted, unless by a hidden
 * submit button such as a form library's, and when the page is restored from the back-forward cache.
 */

import { setText } from '../utils/dom.js';
import { onPropertySet } from '../utils/on-property-set.js';
import { setUpWhenReady } from '../utils/set-up-when-ready.js';

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
const visuallyHidden: Record<string, string> = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  margin: '0',
  padding: '0',
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  'clip-path': 'inset(50%)',
  border: '0',
  'white-space': 'nowrap',
};

if (typeof HTMLElement !== 'undefined' && typeof customElements !== 'undefined') {
  class GovukReactPasswordInput extends HTMLElement {
    private input?: HTMLInputElement;

    private toggle?: HTMLButtonElement;

    private status?: HTMLElement;

    private observer?: MutationObserver;

    private visible = false;

    private stopWatchingType?: () => void;

    // React sets `type` again whenever it updates a controlled input.
    private readonly onTypeSet = () => {
      const type = this.visible ? 'text' : 'password';
      if (this.input && this.input.type !== type) this.input.type = type;
    };

    private readonly onToggle = (event: MouseEvent) => {
      event.preventDefault();
      this.setVisible(!this.visible);
    };

    // A hidden submitter isn't the user submitting, but a script, such as Conform validating as the
    // user types.
    private readonly onSubmit = (event: Event) => {
      const submitter = event instanceof SubmitEvent ? event.submitter : null;
      if (event.target === this.input?.form && !(submitter instanceof HTMLElement && submitter.hidden)) {
        this.setVisible(false);
      }
    };

    private readonly onPageShow = (event: PageTransitionEvent) => {
      if (event.persisted) this.setVisible(false);
    };

    connectedCallback() {
      this.observer = setUpWhenReady(this, () => this.setup());
    }

    disconnectedCallback() {
      this.observer?.disconnect();
      this.toggle?.removeEventListener('click', this.onToggle);
      document.removeEventListener('submit', this.onSubmit);
      window.removeEventListener('pageshow', this.onPageShow);
      this.stopWatchingType?.();
      this.input = undefined;
      this.toggle = undefined;
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
        // Set one by one: a Content Security Policy can block a whole `style` attribute.
        const { style } = this.status;
        Object.entries(visuallyHidden).forEach(([name, value]) => style.setProperty(name, value));
        input.insertAdjacentElement('afterend', this.status);
      }
      this.dataset.upgraded = '';
      toggle.hidden = false;
      toggle.addEventListener('click', this.onToggle);
      document.addEventListener('submit', this.onSubmit);
      window.addEventListener('pageshow', this.onPageShow);
      // Start hidden, with the text set but nothing announced.
      this.visible = false;
      input.type = 'password';
      this.stopWatchingType = onPropertySet(input, 'type', this.onTypeSet);
      this.label(false);
      return true;
    }

    private setVisible(visible: boolean) {
      const { input } = this;
      if (!input || visible === this.visible) return;
      this.visible = visible;
      input.type = visible ? 'text' : 'password';
      this.label(visible);
      if (this.status) this.status.textContent = this.text(visible ? 'shown-announcement' : 'hidden-announcement');
    }

    private label(visible: boolean) {
      if (!this.toggle) return;
      setText(this.toggle, this.text(visible ? 'hide-text' : 'show-text'));
      this.toggle.setAttribute('aria-label', this.text(visible ? 'hide-label' : 'show-label'));
    }
  }

  if (!customElements.get(tagName)) customElements.define(tagName, GovukReactPasswordInput);
}
