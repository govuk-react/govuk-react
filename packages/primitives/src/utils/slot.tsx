import { Children, cloneElement, isValidElement, useCallback } from 'react';
import type { ReactNode, Ref } from 'react';
import { clsx } from 'clsx';

type Props = Record<string, unknown>;

export type SlotProps<P extends object> = P & { children?: ReactNode };

/** One ref that sets every ref given, and clears them again. */
export function composeRefs<T>(...refs: (Ref<T> | undefined)[]) {
  return (node: T | null) => {
    const cleanups = refs.map((ref) => {
      if (typeof ref === 'function') {
        const cleanup = ref(node);
        return typeof cleanup === 'function' ? cleanup : () => ref(null);
      }
      if (!ref) return () => {};
      ref.current = node;
      return () => {
        ref.current = null;
      };
    });
    return () => cleanups.forEach((cleanup) => cleanup());
  };
}

const isRef = (value: unknown): value is Ref<unknown> =>
  typeof value === 'function' || (typeof value === 'object' && value !== null && 'current' in value);

/** `composeRefs`, kept the same between renders while the refs are, so React doesn't reattach it. */
function useComposedRefs(a: unknown, b: unknown) {
  return useCallback((node: unknown) => (isRef(a) && isRef(b) ? composeRefs(a, b)(node) : undefined), [a, b]);
}

/**
 * Renders its only child, merging its own props onto it, for parts that
 * take `asChild`. Class names are joined, styles are merged and event
 * handlers both run (the child's first), and so do refs. For any other prop,
 * the child's value wins. Undefined props are ignored.
 */
export function Slot<P extends object>({ children, ...slotProps }: SlotProps<P>) {
  const child = Children.only(children);
  const childRef: unknown = isValidElement<Props>(child) ? child.props.ref : undefined;
  const slotRef: unknown = 'ref' in slotProps ? slotProps.ref : undefined;
  const ref = useComposedRefs(childRef, slotRef);
  if (!isValidElement<Props>(child)) return null;

  const merged: Props = { ...child.props };
  for (const [key, slotValue] of Object.entries(slotProps)) {
    // A prop left out stays left out, and doesn't hide one the child sets itself.
    if (slotValue === undefined) continue;
    const childValue: unknown = child.props[key];
    if (childValue === undefined) {
      merged[key] = slotValue;
    } else if (key === 'ref' && isRef(slotValue) && isRef(childValue)) {
      merged[key] = ref;
    } else if (key === 'className' && typeof slotValue === 'string' && typeof childValue === 'string') {
      merged[key] = clsx(slotValue, childValue);
    } else if (key === 'style' && isObject(slotValue) && isObject(childValue)) {
      merged[key] = { ...slotValue, ...childValue };
    } else if (/^on[A-Z]/.test(key) && typeof slotValue === 'function' && typeof childValue === 'function') {
      merged[key] = (...args: unknown[]) => {
        childValue(...args);
        slotValue(...args);
      };
    }
  }

  return cloneElement(child, merged);
}

function isObject(value: unknown): value is object {
  return typeof value === 'object' && value !== null;
}
