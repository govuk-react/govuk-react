/*
 * <govuk-react-choices>: a headless, light-DOM custom element for a group of radios or checkboxes,
 * with or without React. It reveals content when a choice is checked, and makes a checkbox such
 * as "None of these" exclusive, as govuk-frontend's radios and checkboxes do.
 *
 * Without JavaScript every conditional reveal is shown, and an exclusive checkbox is an ordinary
 * one. On upgrade each reveal shows only while its choice is checked, and the choice gets
 * `aria-controls` and `aria-expanded`.
 *
 * Markup inside the element:
 * - `input[type=radio]` or `input[type=checkbox]`: the choices. `data-choices-controls` names the
 *   id of the content it reveals. A checkbox with `data-choices-exclusive` unchecks the other
 *   checkboxes with its name when checked, and is unchecked when one of them is.
 * - `[data-choices-conditional]`: the content a choice reveals, with an id.
 *
 * As in govuk-frontend, that covers checkboxes with the same name and form anywhere on the page,
 * and checking a radio updates the reveals of its whole group, even across elements. Choices are
 * unchecked with `click()`, so `change` events fire and React's `onChange` sees them.
 *
 * Attributes:
 * - `upgraded-class`: classes for the element once upgraded.
 * - `hidden-conditional-class`: classes that hide a reveal. Without them, the element sets
 *   `hidden` on it.
 */

import { classesOf } from '../utils/dom';

export const tagName = 'govuk-react-choices';

export interface ChoicesElement extends HTMLElement {
  /** Shows and hides the reveals to match the choices, such as after setting `checked`. */
  sync(): void;
}

const isChoice = (element: EventTarget | null): element is HTMLInputElement =>
  element instanceof HTMLInputElement && (element.type === 'radio' || element.type === 'checkbox');

if (typeof HTMLElement !== 'undefined' && typeof customElements !== 'undefined') {
  class GovukReactChoices extends HTMLElement implements ChoicesElement {
    private upgraded = false;

    private observer?: MutationObserver;

    private readonly onClick = (event: Event) => {
      const input = event.target;
      if (!isChoice(input) || !this.owns(input)) return;
      if (input.type === 'radio') {
        // Checking a radio unchecks another, with no event for it, maybe in another group.
        this.syncAll();
        return;
      }
      this.syncInput(input);
      if (!input.checked) return;
      const exclusive = input.hasAttribute('data-choices-exclusive');
      // As govuk-frontend: every checkbox with the name in the form, even in another group.
      const others = this.inputsNamed(input).filter(
        (other) =>
          other !== input &&
          other.type === 'checkbox' &&
          other.checked &&
          (exclusive || other.hasAttribute('data-choices-exclusive'))
      );
      // Unchecked once this click, and React's updates for it, are done, so each is its own event
      // that React sees.
      window.setTimeout(() => {
        others
          .filter((other) => other.checked)
          .forEach((other) => {
            // A disabled checkbox ignores `click()`.
            if (other.disabled) other.checked = false;
            else other.click();
          });
        this.syncAll();
      });
    };

    // `reset` changes the choices with no event for each, after it fires.
    private readonly onReset = (event: Event) => {
      if (event.target instanceof HTMLFormElement && this.choices().some((input) => input.form === event.target)) {
        window.setTimeout(() => this.sync());
      }
    };

    private readonly onChange = (event: Event) => {
      if (isChoice(event.target) && this.owns(event.target)) this.sync();
    };

    // A page restored from the back-forward cache keeps its choices.
    private readonly onPageShow = () => this.sync();

    connectedCallback() {
      this.observer = new MutationObserver((records) => {
        if (records.some((record) => record.type === 'childList')) this.setup();
        else {
          // React can rewrite the element's own class.
          if (this.upgraded) this.addUpgradedClasses();
          this.sync();
        }
      });
      // Choices rendered later, and a class React rewrites.
      this.observer.observe(this, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
      this.addEventListener('click', this.onClick);
      this.addEventListener('change', this.onChange);
      window.addEventListener('pageshow', this.onPageShow);
      document.addEventListener('reset', this.onReset, true);
      this.setup();
    }

    disconnectedCallback() {
      this.observer?.disconnect();
      this.removeEventListener('click', this.onClick);
      this.removeEventListener('change', this.onChange);
      window.removeEventListener('pageshow', this.onPageShow);
      document.removeEventListener('reset', this.onReset, true);
    }

    private get root() {
      const root = this.getRootNode();
      return root instanceof Document || root instanceof ShadowRoot ? root : document;
    }

    /** The inputs with the same name and form, anywhere on the page. */
    private inputsNamed(input: HTMLInputElement) {
      return Array.from(this.root.querySelectorAll('input')).filter(
        (other) => other.type === input.type && other.name === input.name && other.form === input.form
      );
    }

    /** Syncs every element on the page, for choices that changed in another group. */
    private syncAll() {
      Array.from(this.root.querySelectorAll(tagName)).forEach((element) => {
        if (element instanceof GovukReactChoices) element.sync();
      });
    }

    private owns(element: Element) {
      return element.closest(tagName) === this;
    }

    private choices() {
      return Array.from(this.querySelectorAll('input')).filter((input) => isChoice(input) && this.owns(input));
    }

    private target(input: HTMLInputElement) {
      const id = input.getAttribute('data-choices-controls');
      if (!id) return undefined;
      const root = this.getRootNode();
      const target = root instanceof Document || root instanceof ShadowRoot ? root.getElementById(id) : null;
      return target instanceof HTMLElement && target.hasAttribute('data-choices-conditional') ? target : undefined;
    }

    private setup() {
      const choices = this.choices();
      if (!choices.length) return;
      if (!this.upgraded) {
        this.upgraded = true;
        this.dataset.upgraded = '';
        this.addUpgradedClasses();
      }
      this.sync();
    }

    private addUpgradedClasses() {
      // `toggle` with force leaves a class that's already there alone, so the observer isn't woken.
      classesOf(this.getAttribute('upgraded-class')).forEach((name) => this.classList.toggle(name, true));
    }

    sync() {
      if (!this.upgraded) return;
      this.choices().forEach((input) => this.syncInput(input));
    }

    private syncInput(input: HTMLInputElement) {
      const target = this.target(input);
      if (!target) return;
      input.setAttribute('aria-controls', target.id);
      input.setAttribute('aria-expanded', String(input.checked));
      const hiddenClasses = classesOf(this.getAttribute('hidden-conditional-class'));
      // `toggle` with force leaves a class that's already there alone, so the observer isn't woken.
      if (hiddenClasses.length) hiddenClasses.forEach((name) => target.classList.toggle(name, !input.checked));
      else target.hidden = !input.checked;
    }
  }

  if (!customElements.get(tagName)) customElements.define(tagName, GovukReactChoices);
}
