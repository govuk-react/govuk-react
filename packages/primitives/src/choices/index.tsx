'use client';

import * as React from 'react';
import { useEffect, useRef } from 'react';
import type { ComponentProps } from 'react';
import { Slot } from '../utils/slot';
import { tagName, type ChoicesElement } from './element';

/*
 * Headless radios and checkboxes behaviour: unstyled parts over the <govuk-react-choices> element
 * (./element.ts), which reveals content when a choice is checked, and makes a checkbox exclusive.
 * Every part except Root takes `asChild`.
 *
 * The inputs' `checked` is the state, so control them as usual, with `checked` and `onChange`.
 */

export type RootProps = React.HTMLAttributes<HTMLElement> & {
  /** Classes for the element once upgraded. */
  upgradedClass?: string;
  /** Classes that hide a reveal. Without them, `hidden` does. */
  hiddenConditionalClass?: string;
};

const isChoices = (element: HTMLElement): element is ChoicesElement => 'sync' in element;

export function Root({ upgradedClass, hiddenConditionalClass, ...props }: RootProps) {
  const element = useRef<HTMLElement>(null);

  // A `checked` set by React fires no event.
  useEffect(() => {
    const node = element.current;
    if (node && isChoices(node)) node.sync();
  });

  return React.createElement(tagName, {
    ...props,
    ref: element,
    // The element owns `data-upgraded` and its upgraded classes.
    suppressHydrationWarning: true,
    'upgraded-class': upgradedClass,
    'hidden-conditional-class': hiddenConditionalClass,
  });
}

type PartProps<E extends keyof React.JSX.IntrinsicElements> = ComponentProps<E> & {
  /** Render the only child instead, with this part's props merged onto it. */
  asChild?: boolean;
};

export type InputProps = PartProps<'input'> & {
  /** The id of the `Conditional` this choice reveals. */
  controls?: string;
  /** For a checkbox such as "None of these": checking it unchecks the others with its name. */
  exclusive?: boolean;
};

/** A radio or checkbox. */
export function Input({ asChild, controls, exclusive, ...props }: InputProps) {
  const Element = asChild ? Slot : 'input';
  // The element owns `aria-controls` and `aria-expanded` after upgrade.
  return (
    <Element
      data-choices-controls={controls}
      data-choices-exclusive={exclusive ? '' : undefined}
      suppressHydrationWarning
      {...props}
    />
  );
}

export type ConditionalProps = PartProps<'div'>;

/** Content revealed while its choice is checked. Give it the id the choice `controls`. */
export function Conditional({ asChild, ...props }: ConditionalProps) {
  const Element = asChild ? Slot : 'div';
  // The element owns whether it's hidden after upgrade.
  return <Element data-choices-conditional="" suppressHydrationWarning {...props} />;
}
