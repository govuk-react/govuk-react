'use client';

import * as React from 'react';
import { useEffect, useEffectEvent, useReducer, useRef } from 'react';
import type { ComponentProps } from 'react';
import { early, live, type ChangeDetails } from '../utils/change-details.js';
import { Slot } from '../utils/slot.js';
import { tagName, type DisclosureElement } from './element.js';

export type { ChangeDetails };

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
  onOpenChange?: (open: boolean, details: ChangeDetails) => void;
};

/** Content that a button shows and hides. Without JavaScript the content is shown and the button hidden. */
export function Root({ media, open, defaultOpen, onOpenChange, ...props }: RootProps) {
  const element = useRef<DisclosureElement>(null);
  const reportChange = useEffectEvent((next: boolean, details: ChangeDetails) => onOpenChange?.(next, details));
  const synced = useRef(false);
  const [, render] = useReducer((count: number) => count + 1, 0);

  useEffect(() => {
    const node = element.current;
    if (!node) return undefined;
    // A nested disclosure's change bubbles through this one.
    const onChange = (event: CustomEvent<{ open: boolean }>) => {
      if (event.target === node) reportChange(event.detail.open, live);
    };
    node.addEventListener('govuk-react-disclosure:change', onChange);
    return () => node.removeEventListener('govuk-react-disclosure:change', onChange);
  }, []);

  // `open` is set once hydrated, so the server markup is uncontrolled and a user's click before
  // hydration still works. That click is then reported, rather than undone.
  useEffect(() => {
    const node = element.current;
    if (!node) return;
    if (!synced.current) {
      synced.current = true;
      const picked = node.pickedOpen;
      if (picked !== undefined && picked !== (open ?? defaultOpen ?? false) && onOpenChange) {
        reportChange(picked, early);
        if (open !== undefined) {
          // The click shows until the next render, which adopts it or goes back to `open`.
          render();
          return;
        }
      }
    }
    node.open = open;
  });

  return React.createElement(tagName, {
    ...props,
    ref: element,
    // The element owns `data-upgraded`.
    suppressHydrationWarning: true,
    media,
    'default-open': defaultOpen ? '' : undefined,
  });
}

type PartProps<E extends keyof React.JSX.IntrinsicElements> = ComponentProps<E> & {
  /** Render the only child instead, with this part's props merged onto it. */
  asChild?: boolean;
};

export type TriggerProps = PartProps<'button'>;

/** The show and hide button. Hidden until the element upgrades. */
export function Trigger({ asChild, ...props }: TriggerProps) {
  // The element owns `hidden`, `aria-hidden` and `aria-expanded` after upgrade.
  const shared = { 'data-disclosure-trigger': '', hidden: true, suppressHydrationWarning: true };
  if (asChild) return <Slot {...shared} {...props} />;
  return <button type="button" {...shared} {...props} />;
}

export type ContentProps = Omit<PartProps<'div'>, 'hidden'> & {
  /**
   * How to hide the content while closed: `true` for plain `hidden`, or "until-found", so find in
   * page opens it. Defaults to `true`. It's shown without JavaScript either way.
   */
  hidden?: true | 'until-found';
};

/** The content the button shows and hides. Give it an id for the button's `aria-controls`. */
export function Content({ asChild, hidden, ...props }: ContentProps) {
  const Element = asChild ? Slot : 'div';
  // The element owns `hidden` after upgrade.
  return (
    <Element
      data-disclosure-content=""
      data-hidden={hidden === true ? '' : hidden}
      suppressHydrationWarning
      {...props}
    />
  );
}
