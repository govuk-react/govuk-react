/**
 * Moves focus to an element that may not take focus, as govuk-frontend's `setFocus` does: it gets
 * `tabindex="-1"` until it loses focus again, and `focusedClasses` while it has it.
 */
export function setFocus(element: HTMLElement, { focusedClasses = [], preventScroll = false } = {}) {
  // A `tabindex` added only to take focus here, or by the server for `autofocus`.
  const added =
    !element.hasAttribute('tabindex') ||
    (element.hasAttribute('data-focus-tabindex') && element.getAttribute('tabindex') === '-1');
  if (!element.hasAttribute('tabindex')) element.setAttribute('tabindex', '-1');
  element.addEventListener(
    'blur',
    () => {
      focusedClasses.forEach((name) => element.classList.remove(name));
      if (added) element.removeAttribute('tabindex');
      element.removeAttribute('data-focus-tabindex');
      element.removeAttribute('autofocus');
    },
    { once: true }
  );
  focusedClasses.forEach((name) => element.classList.add(name));
  element.focus({ preventScroll });
}
