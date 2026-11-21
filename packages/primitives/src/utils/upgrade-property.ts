/**
 * Passes a property that a script set before the element was defined, which hides the element's
 * own setter, through that setter.
 */
export function upgradeProperty(element: HTMLElement, name: string) {
  if (!Object.prototype.hasOwnProperty.call(element, name)) return;
  const value: unknown = Reflect.get(element, name);
  Reflect.deleteProperty(element, name);
  Reflect.set(element, name, value);
}
