const intervalMs = 100;

/**
 * Calls `onChange` when `read` gives a new value. A script that sets a field's `value` or
 * `checked`, such as React Hook Form's `setValue`, fires no event and changes no attribute, so
 * the value is read on an interval, as govuk-frontend's character count and
 * accessible-autocomplete do. Returns a function that stops watching.
 */
export function onPropertyChange<T>(read: () => T, onChange: () => void) {
  let last = read();
  const interval = window.setInterval(() => {
    const next = read();
    if (next === last) return;
    last = next;
    onChange();
  }, intervalMs);
  return () => window.clearInterval(interval);
}
