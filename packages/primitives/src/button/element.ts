/*
 * Headless button behaviour, with or without React, as govuk-frontend's button script has. Importing
 * this module adds two listeners to the document, once, for any element with `data-button`:
 *
 * - With `data-prevent-double-click="true"`, a second click within a second of the first is
 *   cancelled, so a form isn't submitted twice. Unlike govuk-frontend, the click is also stopped
 *   before it reaches React, so an `onClick` doesn't run twice either.
 * - A link with `role="button"` is activated with the Space key, as a button is.
 *
 * Unlike a custom element, the listeners need no wrapper, which would change a button group's
 * layout.
 */

const debounceMs = 1000;

// Shared by every copy of this module on the page.
const installed = Symbol.for('govuk-react-button');

const lastClicks = new WeakMap<Element, number>();

const buttonOf = (target: EventTarget | null) =>
  target instanceof Element ? target.closest<HTMLElement>('[data-button]') : null;

function onClick(event: MouseEvent) {
  const button = buttonOf(event.target);
  if (!button || button.getAttribute('data-prevent-double-click') !== 'true') return;
  const last = lastClicks.get(button);
  if (last !== undefined && event.timeStamp - last < debounceMs) {
    event.preventDefault();
    event.stopImmediatePropagation();
    return;
  }
  lastClicks.set(button, event.timeStamp);
}

function onKeyDown(event: KeyboardEvent) {
  if (event.key !== ' ') return;
  const button = buttonOf(event.target);
  if (!button || button !== event.target || button.getAttribute('role') !== 'button') return;
  if (button instanceof HTMLButtonElement) return;
  // Space would scroll the page.
  event.preventDefault();
  button.click();
}

if (typeof document !== 'undefined') {
  if (!Reflect.get(globalThis, installed)) {
    Reflect.set(globalThis, installed, true);
    // Capture, to cancel a second click before anything else hears it.
    document.addEventListener('click', onClick, true);
    document.addEventListener('keydown', onKeyDown);
  }
}

export {};
