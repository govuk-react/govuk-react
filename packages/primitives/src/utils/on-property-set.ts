type Field = HTMLInputElement | HTMLTextAreaElement;

type Property = 'value' | 'checked' | 'type';

type Watchers = Map<Property, Set<() => void>>;

// Shared by every copy of this module on the page, such as an inline script and React's bundle.
const watchersKey = Symbol.for('govuk-react-property-watchers');
const patchedKey = Symbol.for('govuk-react-property-patched');

function shared(key: symbol) {
  const existing: unknown = Reflect.get(globalThis, key);
  if (existing instanceof WeakMap) return existing;
  const created = new WeakMap();
  Reflect.set(globalThis, key, created);
  return created;
}

const prototypeWith = (field: Field, property: Property) => {
  for (let target: object | null = Object.getPrototypeOf(field); target; target = Object.getPrototypeOf(target)) {
    const descriptor = Object.getOwnPropertyDescriptor(target, property);
    if (descriptor) return { target, descriptor };
  }
  return undefined;
};

/** Wraps the prototype's setter, once, to tell the watchers of the field it was called on. */
function patch(field: Field, property: Property) {
  const found = prototypeWith(field, property);
  const set = found?.descriptor.set;
  if (!found || !set) return false;
  const patched = shared(patchedKey);
  const properties: unknown = patched.get(found.target);
  const done = properties instanceof Set ? properties : new Set();
  if (done.has(property)) return true;
  done.add(property);
  patched.set(found.target, done);
  const watchers = shared(watchersKey);
  Object.defineProperty(found.target, property, {
    ...found.descriptor,
    set(value) {
      set.call(this, value);
      const fieldWatchers: unknown = watchers.get(this);
      if (!(fieldWatchers instanceof Map)) return;
      const callbacks: unknown = fieldWatchers.get(property);
      if (callbacks instanceof Set) {
        callbacks.forEach((callback) => {
          if (typeof callback === 'function') callback();
        });
      }
    },
  });
  return true;
}

/**
 * Calls `onSet` after a script sets a field's `value`, `checked` or `type`, which fires no event,
 * such as React Hook Form's `setValue`, or React updating an input. Watches the prototype's
 * setter rather than the field's own, because React doesn't track the value of a field that
 * already has its own property. Returns a function that stops watching.
 */
export function onPropertySet(field: Field, property: Property, onSet: () => void) {
  if (!patch(field, property)) return () => {};
  const watchers = shared(watchersKey);
  const existing: unknown = watchers.get(field);
  const fieldWatchers: Watchers = existing instanceof Map ? existing : new Map();
  watchers.set(field, fieldWatchers);
  const callbacks = fieldWatchers.get(property) ?? new Set();
  fieldWatchers.set(property, callbacks);
  callbacks.add(onSet);
  return () => {
    callbacks.delete(onSet);
  };
}
