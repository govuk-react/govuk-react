'use client';

import * as React from 'react';
import { useEffect, useRef } from 'react';
import type { ComponentProps } from 'react';
import { Slot } from '../utils/slot';
import { tagName, type DisclosureElement } from './element';

/*
 * Headless disclosure: unstyled parts over the <govuk-react-disclosure> element (./element.ts),
 * which adds the show and hide button on upgrade. Every part except Root takes `asChild`.
 *
 * Without JavaScript the content is shown and the button hidden.
 */

export type RootProps = Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> & {
  /** While this media query matches, the content is always shown and the button hidden. */
  media?: string;
  /** Whether the content is shown, to control it once hydrated. */
  open?: boolean;
  /** Whether the content starts shown once the element upgrades. */
  defaultOpen?: boolean;
  /** Called when the user shows or hides the content. */
  onOpenChange?: (open: boolean) => void;
};

const isDisclosure = (element: HTMLElement): element is DisclosureElement => 'pickedOpen' in element;

export function Root({ media, open, defaultOpen, onOpenChange, ...props }: RootProps) {
  const element = useRef<HTMLElement>(null);
  const onOpenChangeRef = useRef(onOpenChange);
  const synced = useRef(false);

  useEffect(() => {
    onOpenChangeRef.current = onOpenChange;
  });

  useEffect(() => {
    const node = element.current;
    if (!node) return undefined;
    const onChange = (event: CustomEvent<{ open: boolean }>) => onOpenChangeRef.current?.(event.detail.open);
    node.addEventListener('govuk-react-disclosure:change', onChange);
    return () => node.removeEventListener('govuk-react-disclosure:change', onChange);
  }, []);

  // `open` is set once hydrated, so the server markup is uncontrolled and a user's click before
  // hydration still works. That click is then reported, rather than undone.
  useEffect(() => {
    const node = element.current;
    if (!node || open === undefined) {
      node?.removeAttribute('open');
      return;
    }
    if (!synced.current) {
      synced.current = true;
      const picked = isDisclosure(node) ? node.pickedOpen : undefined;
      if (picked !== undefined && picked !== open && onOpenChangeRef.current) {
        onOpenChangeRef.current(picked);
        return;
      }
    }
    node.setAttribute('open', String(open));
  });

  return React.createElement(tagName, {
    ...props,
    ref: element,
    media,
    'default-open': defaultOpen ? '' : undefined,
  });
}

type PartProps<E extends keyof React.JSX.IntrinsicElements> = ComponentProps<E> & {
  /** Render the only child instead, with this part's props merged onto it. */
  asChild?: boolean;
};

export type ToggleProps = PartProps<'button'>;

/** The show and hide button. Hidden until the element upgrades. */
export function Toggle({ asChild, ...props }: ToggleProps) {
  // The element owns `hidden`, `aria-hidden` and `aria-expanded` after upgrade.
  const shared = { 'data-disclosure-toggle': '', hidden: true, suppressHydrationWarning: true };
  if (asChild) return <Slot {...shared} {...props} />;
  return <button type="button" {...shared} {...props} />;
}

export type ContentProps = PartProps<'div'>;

/** The content the button shows and hides. Give it an id for the button's `aria-controls`. */
export function Content({ asChild, ...props }: ContentProps) {
  const Element = asChild ? Slot : 'div';
  // The element owns `hidden` after upgrade.
  return <Element data-disclosure-content="" suppressHydrationWarning {...props} />;
}
