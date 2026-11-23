/**
 * Cancels an element's own change events while `controlled` says so, so the user's change is only
 * reported. Returns a function that stops cancelling them.
 */
export function cancelChanges(element: HTMLElement, type: string, controlled: () => boolean) {
  const onChange = (event: Event) => {
    if (event.target === element && controlled()) event.preventDefault();
  };
  element.addEventListener(type, onChange);
  return () => element.removeEventListener(type, onChange);
}
