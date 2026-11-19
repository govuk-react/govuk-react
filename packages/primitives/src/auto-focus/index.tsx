'use client';

import * as React from 'react';
import type { ComponentProps } from 'react';
import { Slot } from '../utils/slot';
import { tagName } from './element';

/*
 * Headless auto focus: the <govuk-react-auto-focus> element (./element.ts) moves focus to its
 * `Target` when it appears. The server renders the target with `autofocus`, so the browser focuses
 * it when the page loads, even without JavaScript.
 */

export type RootProps = React.HTMLAttributes<HTMLElement> & {
  /** Don't move focus. */
  disabled?: boolean;
};

export function Root({ disabled, ...props }: RootProps) {
  return React.createElement(tagName, { ...props, disabled: disabled ? '' : undefined });
}

export type TargetProps = ComponentProps<'div'> & {
  /** Render the only child instead, with this part's props merged onto it. */
  asChild?: boolean;
  /** Don't move focus. Pass the same as to `Root`. */
  disabled?: boolean;
};

/** What gets focus. */
export function Target({ asChild, disabled, ...props }: TargetProps) {
  const Element = asChild ? Slot : 'div';
  let focus = {};
  if (!disabled) {
    // `data-focus-tabindex` says the tabindex is only for this, so it goes when focus moves on.
    focus =
      props.tabIndex === undefined ? { tabIndex: -1, autoFocus: true, 'data-focus-tabindex': '' } : { autoFocus: true };
  }
  // The element owns `tabindex` and `autofocus` after it has moved focus.
  return <Element data-auto-focus="" suppressHydrationWarning {...focus} {...props} />;
}
