'use client';

import * as React from 'react';
import type { ComponentProps } from 'react';
import { Slot } from '../utils/slot.js';
import { tagName } from './element.js';

/*
 * Headless password input: unstyled parts over the <govuk-react-password-input> element
 * (./element.ts), which adds the show and hide button on upgrade. Every part except Root takes
 * `asChild`.
 *
 * The input's `type` is the state, owned by the element, so there is no React state to control.
 */

export type RootProps = React.HTMLAttributes<HTMLElement> & {
  /** The button's text when the password is hidden. Defaults to "Show". */
  showText?: string;
  /** The button's text when the password is visible. Defaults to "Hide". */
  hideText?: string;
  /** The button's accessible name when the password is hidden. Defaults to "Show password". */
  showLabel?: string;
  /** The button's accessible name when the password is visible. Defaults to "Hide password". */
  hideLabel?: string;
  /** Announced when the password becomes visible. Defaults to "Your password is visible". */
  shownAnnouncement?: string;
  /** Announced when the password is hidden. Defaults to "Your password is hidden". */
  hiddenAnnouncement?: string;
};

export function Root({
  showText,
  hideText,
  showLabel,
  hideLabel,
  shownAnnouncement,
  hiddenAnnouncement,
  ...props
}: RootProps) {
  return React.createElement(tagName, {
    ...props,
    // The element owns `data-upgraded`.
    suppressHydrationWarning: true,
    'show-text': showText,
    'hide-text': hideText,
    'show-label': showLabel,
    'hide-label': hideLabel,
    'shown-announcement': shownAnnouncement,
    'hidden-announcement': hiddenAnnouncement,
  });
}

type PartProps<E extends keyof React.JSX.IntrinsicElements> = ComponentProps<E> & {
  /** Render the only child instead, with this part's props merged onto it. */
  asChild?: boolean;
};

export type InputProps = PartProps<'input'>;

/** The password field. Its `type` starts as "password" and the element switches it. */
export function Input({ asChild, ...props }: InputProps) {
  if (asChild) return <Slot data-password-input="" suppressHydrationWarning {...props} />;
  // The element sets `type` after upgrade, so it can differ from the server's.
  return <input type="password" data-password-input="" suppressHydrationWarning {...props} />;
}

export type ToggleProps = PartProps<'button'>;

/** The show and hide button. Hidden until the element upgrades, which then sets its text and label. */
export function Toggle({ asChild, children = 'Show', ...props }: ToggleProps) {
  const shared = { 'data-password-toggle': '', hidden: true, suppressHydrationWarning: true };
  if (asChild)
    return (
      <Slot {...shared} {...props}>
        {children}
      </Slot>
    );
  return (
    <button type="button" aria-label="Show password" {...shared} {...props}>
      {children}
    </button>
  );
}

export type StatusProps = PartProps<'div'>;

/** A live region for the announcements. Make it visually hidden. */
export function Status({ asChild, ...props }: StatusProps) {
  const Element = asChild ? Slot : 'div';
  return <Element data-password-status="" aria-live="polite" suppressHydrationWarning {...props} />;
}
