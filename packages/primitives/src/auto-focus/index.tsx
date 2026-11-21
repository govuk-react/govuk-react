'use client';

import * as React from 'react';
import { createContext, isValidElement, useContext } from 'react';
import type { ComponentProps } from 'react';
import { Slot } from '../utils/slot.js';
import { tagName } from './element.js';

/*
 * Headless auto focus: the <govuk-react-auto-focus> element (./element.ts) moves focus to its
 * `Target` when it appears. The server renders the target with `autofocus`, so the browser focuses
 * it when the page loads, even without JavaScript.
 *
 * Context only fills in a default: in an island without a Root, pass `disabled` to Target.
 */

const AutoFocusContext = createContext<{ disabled?: boolean }>({});

export type RootProps = React.HTMLAttributes<HTMLElement> & {
  /** Don't move focus. */
  disabled?: boolean;
};

export function Root({ disabled, ...props }: RootProps) {
  return (
    <AutoFocusContext.Provider value={{ disabled }}>
      {React.createElement(tagName, { ...props, disabled: disabled ? '' : undefined })}
    </AutoFocusContext.Provider>
  );
}

export type TargetProps = ComponentProps<'div'> & {
  /** Render the only child instead, with this part's props merged onto it. */
  asChild?: boolean;
  /** Don't move focus. Defaults to Root's. */
  disabled?: boolean;
};

/** The tabindex of the target, or with `asChild`, of its child. */
function tabIndexOf({ asChild, tabIndex, children }: TargetProps) {
  if (tabIndex !== undefined || !asChild) return tabIndex;
  return isValidElement<{ tabIndex?: number }>(children) ? children.props.tabIndex : undefined;
}

/** What gets focus. */
export function Target({ asChild, disabled: disabledProp, ...props }: TargetProps) {
  const context = useContext(AutoFocusContext);
  const disabled = disabledProp ?? context.disabled;
  const Element = asChild ? Slot : 'div';
  let focus = {};
  if (!disabled) {
    // `data-focus-tabindex` says the tabindex is only for this, so it goes when focus moves on.
    focus =
      tabIndexOf({ asChild, ...props }) === undefined
        ? { tabIndex: -1, autoFocus: true, 'data-focus-tabindex': '' }
        : { autoFocus: true };
  }
  // The element owns `tabindex` and `autofocus` after it has moved focus.
  return <Element data-auto-focus="" suppressHydrationWarning {...focus} {...props} />;
}
