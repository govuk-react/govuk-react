'use client';

import * as React from 'react';
import { useEffect, useMemo, useReducer, useRef } from 'react';
import type { ComponentProps } from 'react';
import { early, live, type ChangeDetails } from '../utils/change-details.js';
import { composeRefs } from '../utils/slot.js';

export type { ChangeDetails };

/*
 * Headless details: a native <details>, which shows and hides its content without JavaScript.
 * It needs no custom element, because the browser keeps its state before React hydrates.
 */

export type RootProps = Omit<ComponentProps<'details'>, 'open'> & {
  /** Whether it's open, to control it once hydrated. */
  open?: boolean;
  /** Called when the user opens or closes it. */
  onOpenChange?: (open: boolean, details: ChangeDetails) => void;
};

export function Root({ open, onOpenChange, onToggle, ref, ...props }: RootProps) {
  const details = useRef<HTMLDetailsElement>(null);
  const refs = useMemo(() => composeRefs(details, ref), [ref]);
  const onOpenChangeRef = useRef(onOpenChange);
  const synced = useRef(false);
  const [, render] = useReducer((count: number) => count + 1, 0);

  useEffect(() => {
    onOpenChangeRef.current = onOpenChange;
  });

  // The user can open or close it before hydration. That's reported, rather than undone.
  useEffect(() => {
    const node = details.current;
    if (!node) return;
    if (!synced.current) {
      synced.current = true;
      if (node.open !== (open ?? false) && onOpenChangeRef.current) {
        onOpenChangeRef.current(node.open, early);
        if (open !== undefined) {
          // It stays as the user left it until the next render, which adopts it or goes back to `open`.
          render();
          return;
        }
      }
    }
    if (open !== undefined) node.open = open;
  });

  return (
    <details
      {...props}
      ref={refs}
      open={open}
      onToggle={(event) => {
        onToggle?.(event);
        if (event.currentTarget.open !== open) onOpenChange?.(event.currentTarget.open, live);
      }}
      suppressHydrationWarning
    />
  );
}
