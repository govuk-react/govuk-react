/** Removes what was added so a target could take focus. */
function cleanUp(element: HTMLElement, added: boolean, focusedClasses: string[]) {
  focusedClasses.forEach((name) => element.classList.remove(name));
  if (added) element.removeAttribute('tabindex');
  element.removeAttribute('data-focus-tabindex');
  element.removeAttribute('autofocus');
}

/** Whether a `tabindex` is there only to take focus: added here, or by the server for `autofocus`. */
const tabIndexAdded = (element: HTMLElement) =>
  !element.hasAttribute('tabindex') ||
  (element.hasAttribute('data-focus-tabindex') && element.getAttribute('tabindex') === '-1');

/** Removes a server-rendered `autofocus` and its `tabindex`, when the target won't take focus. */
export function dropAutoFocus(element: HTMLElement) {
  cleanUp(element, element.hasAttribute('tabindex') && tabIndexAdded(element), []);
}

/**
 * Moves focus to an element that may not take focus, as govuk-frontend's `setFocus` does: it gets
 * `tabindex="-1"` until it loses focus again, and `focusedClasses` while it has it. Says whether it
 * took focus.
 */
export function setFocus(element: HTMLElement, { focusedClasses = [] as string[], preventScroll = false } = {}) {
  const added = tabIndexAdded(element);
  if (!element.hasAttribute('tabindex')) element.setAttribute('tabindex', '-1');
  if (document.activeElement !== element) {
    focusedClasses.forEach((name) => element.classList.add(name));
    element.focus({ preventScroll });
  }
  if (document.activeElement !== element) {
    // Hidden, or not yet in place.
    cleanUp(element, added, focusedClasses);
    return false;
  }
  focusedClasses.forEach((name) => element.classList.add(name));
  element.addEventListener('blur', () => cleanUp(element, added, focusedClasses), { once: true });
  return true;
}
