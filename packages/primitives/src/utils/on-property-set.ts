type Field = HTMLInputElement | HTMLTextAreaElement;

type Property = 'value' | 'checked' | 'type';

const descriptorOf = (field: Field, property: Property) => {
  for (let target: object | null = field; target; target = Object.getPrototypeOf(target)) {
    const descriptor = Object.getOwnPropertyDescriptor(target, property);
    if (descriptor) return { descriptor, own: target === field };
  }
  return undefined;
};

/**
 * Calls `onSet` after a script sets a field's `value`, `checked` or `type`, which fires no event,
 * such as React Hook Form's `setValue`, or React updating an input. Wraps the setter the field
 * has, which can be React's own, so React still tracks the value. Returns a function that puts the setter back.
 */
export function onPropertySet(field: Field, property: Property, onSet: () => void) {
  const found = descriptorOf(field, property);
  const get = found?.descriptor.get;
  const set = found?.descriptor.set;
  if (!found || !get || !set) return () => {};
  Object.defineProperty(field, property, {
    configurable: true,
    enumerable: found.descriptor.enumerable,
    get() {
      return get.call(this);
    },
    set(value) {
      set.call(this, value);
      onSet();
    },
  });
  return () => {
    if (found.own) Object.defineProperty(field, property, found.descriptor);
    else Reflect.deleteProperty(field, property);
  };
}
