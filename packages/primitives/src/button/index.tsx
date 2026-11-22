'use client';

import * as React from 'react';
import type { ComponentProps } from 'react';
import { Slot } from '../utils/slot.js';
import './element.js';

/*
 * Headless button behaviour (./element.ts): `Button` marks a button or link button for it. Prevents
 * double clicks with `preventDoubleClick`, and makes Space activate a link with `role="button"`.
 */

export type ButtonProps = ComponentProps<'button'> & {
  /** Render the only child instead, such as a link with `role="button"`, with this part's props merged onto it. */
  asChild?: boolean;
  /** Cancel a second click within a second of the first, so a form isn't submitted twice. */
  preventDoubleClick?: boolean;
};

export function Button({ asChild, preventDoubleClick, ...props }: ButtonProps) {
  const Element = asChild ? Slot : 'button';
  return (
    <Element
      data-button=""
      data-prevent-double-click={preventDoubleClick === undefined ? undefined : String(preventDoubleClick)}
      {...props}
    />
  );
}
