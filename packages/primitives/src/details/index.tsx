'use client';

import * as React from 'react';
import { useEffect, useEffectEvent, useMemo, useReducer, useRef } from 'react';
import type { ComponentProps } from 'react';
import { early, live, type ChangeDetails } from '../utils/change-details.js';
import { composeRefs } from '../utils/slot.js';

export type { ChangeDetails };

/*
 * Headless details: a native <details>, which shows and hides its content without JavaScript.
 * It needs no custom element, because the browser keeps its state before React hydrates.
 */

export type DetailsProps = Omit<ComponentProps<'details'>, 'open'> & {
  /** Whether it's open, to control it once hydrated. */
  open?: boolean;
  /** Called when the user opens or closes it. */
  onOpenChange?: (open: boolean, details: ChangeDetails) => void;
};

/** A native `<details>`, which shows and hides its content without JavaScript. */
export function Details({ open, onOpenChange, onToggle, ref, ...props }: DetailsProps) {
  const details = useRef<HTMLDetailsElement>(null);
  const refs = useMemo(() => composeRefs(details, ref), [ref]);
  const reportChange = useEffectEvent((next: boolean, details: ChangeDetails) => onOpenChange?.(next, details));
  const synced = useRef(false);
  // The open state already reported or set, as `toggle` fires in a later task, even after hydration.
  const known = useRef<boolean>(undefined);
  const [, render] = useReducer((count: number) => count + 1, 0);

  // The user can open or close it before hydration. That's reported, rather than undone.
  useEffect(() => {
    const node = details.current;
    if (!node) return;
    if (!synced.current) {
      synced.current = true;
      known.current = node.open;
      if (node.open !== (open ?? false) && onOpenChange) {
        reportChange(node.open, early);
        if (open !== undefined) {
          // It stays as the user left it until the next render, which adopts it or goes back to `open`.
          render();
          return;
        }
      }
    }
    if (open !== undefined) {
      known.current = open;
      node.open = open;
    }
  });

  return (
    <details
      {...props}
      ref={refs}
      open={open}
      onToggle={(event) => {
        onToggle?.(event);
        const next = event.currentTarget.open;
        // Until synced, the effect reports what changed before hydration.
        if (!synced.current || next === known.current) return;
        known.current = next;
        if (next !== open) onOpenChange?.(next, live);
      }}
      suppressHydrationWarning
    />
  );
}
