'use client';

import * as React from 'react';
import type { ComponentProps } from 'react';
import { Slot } from '../utils/slot';
import { tagName } from './element';

export { defaultMessages, type ExitThisPageElement, type MessageName } from './element';

/*
 * Headless exit this page: unstyled parts over the <govuk-react-exit-this-page> element
 * (./element.ts). The button, a SkipLink, or pressing Shift 3 times hides the page and goes to
 * the button's `href`. Every part except Root takes `asChild`.
 *
 * Without JavaScript the button is a plain link. To stay on the page, such as in a test, listen for
 * `govuk-react-exit-this-page:exit` and cancel it.
 */

export type RootProps = React.HTMLAttributes<HTMLElement> & {
  /** Announced once activated. Defaults to "Loading.". */
  activatedText?: string;
  /** Announced when the Shift presses time out. Defaults to "Exit this page expired.". */
  timedOutText?: string;
  /** Announced after one press of Shift. Defaults to "Shift, press 2 more times to exit.". */
  pressTwoMoreTimesText?: string;
  /** Announced after two presses of Shift. Defaults to "Shift, press 1 more time to exit.". */
  pressOneMoreTimeText?: string;
  /** Classes for the indicator while counting presses. */
  indicatorVisibleClass?: string;
  /** Classes for each light of the indicator once pressed. */
  lightOnClass?: string;
  /** Classes for `body` that hide the page behind the overlay. */
  hideContentClass?: string;
  /** Classes for the overlay. Without them, inline styles cover the page. */
  overlayClass?: string;
};

export function Root({
  activatedText,
  timedOutText,
  pressTwoMoreTimesText,
  pressOneMoreTimeText,
  indicatorVisibleClass,
  lightOnClass,
  hideContentClass,
  overlayClass,
  ...props
}: RootProps) {
  return React.createElement(tagName, {
    ...props,
    activated: activatedText,
    'timed-out': timedOutText,
    'press-two-more-times': pressTwoMoreTimesText,
    'press-one-more-time': pressOneMoreTimeText,
    'indicator-visible-class': indicatorVisibleClass,
    'light-on-class': lightOnClass,
    'hide-content-class': hideContentClass,
    'overlay-class': overlayClass,
    // The element owns `data-upgraded`.
    suppressHydrationWarning: true,
  });
}

type PartProps<E extends keyof React.JSX.IntrinsicElements> = ComponentProps<E> & {
  /** Render the only child instead, with this part's props merged onto it. */
  asChild?: boolean;
};

export type ButtonProps = PartProps<'a'>;

/** The link to a safe page, which the element follows once it has hidden the page. */
export function Button({ asChild, ...props }: ButtonProps) {
  const Element = asChild ? Slot : 'a';
  return <Element data-exit-this-page-button="" {...props} />;
}

export type SkipLinkProps = PartProps<'a'>;

/** A link anywhere on the page, such as in the skip links, that exits too. */
export function SkipLink({ asChild, ...props }: SkipLinkProps) {
  const Element = asChild ? Slot : 'a';
  return <Element data-exit-this-page-skiplink="" {...props} />;
}

export type IndicatorProps = PartProps<'div'>;

/** Shows how many times Shift has been pressed. Has three Lights unless given children. */
export function Indicator({ asChild, children, ...props }: IndicatorProps) {
  const Element = asChild ? Slot : 'div';
  return (
    // The element owns `data-visible` and its classes.
    <Element data-exit-this-page-indicator="" aria-hidden="true" suppressHydrationWarning {...props}>
      {children ?? (
        <>
          <Light />
          <Light />
          <Light />
        </>
      )}
    </Element>
  );
}

export type LightProps = PartProps<'div'>;

/** One press of Shift. */
export function Light({ asChild, ...props }: LightProps) {
  const Element = asChild ? Slot : 'div';
  // The element owns `data-on` and its classes.
  return <Element data-exit-this-page-light="" suppressHydrationWarning {...props} />;
}

export type StatusProps = PartProps<'span'>;

/** Tells screen readers how many more presses are needed. Make it visually hidden. */
export function Status({ asChild, children, ...props }: StatusProps) {
  const Element = asChild ? Slot : 'span';
  // The element owns its text. A string child, even an empty one, is hydrated as text, so text the
  // element set before hydration is kept rather than being a mismatch.
  return (
    <Element data-exit-this-page-status="" role="status" suppressHydrationWarning {...props}>
      {children ?? ''}
    </Element>
  );
}
