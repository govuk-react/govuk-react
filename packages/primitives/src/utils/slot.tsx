import { Children, cloneElement, isValidElement } from 'react';
import type { ReactNode } from 'react';
import { clsx } from 'clsx';

type Props = Record<string, unknown>;

export type SlotProps<P extends object> = P & { children?: ReactNode };

/**
 * Renders its only child, merging its own props onto it, for parts that
 * take `asChild`. Class names are joined, styles are merged and event
 * handlers both run (the child's first). For any other prop, the child's
 * value wins. Undefined props are ignored.
 */
export function Slot<P extends object>({ children, ...slotProps }: SlotProps<P>) {
  const child = Children.only(children);
  if (!isValidElement<Props>(child)) return null;

  const merged: Props = { ...child.props };
  for (const [key, slotValue] of Object.entries(slotProps)) {
    // A prop left out stays left out, and doesn't hide one the child sets itself.
    if (slotValue === undefined) continue;
    const childValue: unknown = child.props[key];
    if (childValue === undefined) {
      merged[key] = slotValue;
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
