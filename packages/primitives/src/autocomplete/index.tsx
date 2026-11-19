'use client';

import * as React from 'react';
import { useEffect, useRef } from 'react';
import type { ComponentProps, CSSProperties } from 'react';
import { Slot } from '../utils/slot.js';
import { translationAttributes, type Translation } from '../utils/translation.js';
import { tagName, type AutocompleteElement, type Filter } from './element.js';

export type { Filter } from './element.js';
export type { Translation } from '../utils/translation.js';

/*
 * Headless autocomplete: unstyled parts over the <govuk-react-autocomplete> element
 * (./element.ts), a port of accessible-autocomplete. Every part except Root takes `asChild`.
 *
 * The input's value is the query, and the options are whatever you render in `Listbox`, so there
 * is nothing else to control. Without JavaScript it's a plain input.
 */

export type RootProps = Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> & {
  /** The length the query needs before options show. 0 by default. */
  minLength?: number;
  /**
   * Which options match the query: "contains" (the default), "starts-with", or "none" for
   * options that already match, such as results from a server.
   */
  filter?: Filter;
  /** Confirm the highlighted option when focus leaves it. `true` by default. */
  confirmOnBlur?: boolean;
  /**
   * Submit the input's form when the user confirms an option, and let Enter submit it while the
   * menu is open with no option highlighted.
   */
  submitOnConfirm?: boolean;
  /**
   * Called when the user changes the query and options are due, such as to fetch them. Also
   * called once hydrated, with a query the user typed before hydration.
   */
  onQueryChange?: (query: string) => void;
  /** Called when the user confirms an option. Call `preventDefault` on the event to stop `submitOnConfirm`. */
  onConfirm?: (value: string, event: CustomEvent<{ value: string }>) => void;
  /** Heard while the query is too short. `%{count}` is `minLength`. */
  statusQueryTooShort?: Translation;
  /** Heard when no option matches. */
  statusNoResults?: Translation;
  /** Heard after the results while an option is highlighted. `%{option}`, `%{position}` and `%{count}`. */
  statusSelectedOption?: Translation;
  /** Heard when options match. `%{count}` is the number of options. */
  statusResults?: Translation;
};

const isAutocomplete = (element: HTMLElement): element is AutocompleteElement => 'query' in element;

export function Root({
  minLength,
  filter,
  confirmOnBlur,
  submitOnConfirm,
  onQueryChange,
  onConfirm,
  statusQueryTooShort,
  statusNoResults,
  statusSelectedOption,
  statusResults,
  ...props
}: RootProps) {
  const element = useRef<HTMLElement>(null);
  const callbacks = useRef({ onQueryChange, onConfirm });
  useEffect(() => {
    callbacks.current = { onQueryChange, onConfirm };
  });

  useEffect(() => {
    const node = element.current;
    if (!node) return undefined;
    // A nested autocomplete's events bubble through this one.
    const onQuery = (event: CustomEvent<{ query: string }>) => {
      if (event.target === node) callbacks.current.onQueryChange?.(event.detail.query);
    };
    const onConfirmed = (event: CustomEvent<{ value: string }>) => {
      if (event.target === node) callbacks.current.onConfirm?.(event.detail.value, event);
    };
    node.addEventListener('govuk-react-autocomplete:query', onQuery);
    node.addEventListener('govuk-react-autocomplete:confirm', onConfirmed);

    // A query typed before hydration fired no event React heard, so report it once.
    const input = node.querySelector('input[data-autocomplete-input]');
    const query = isAutocomplete(node) ? node.query : undefined;
    if (query && input instanceof HTMLInputElement && query !== input.defaultValue) {
      callbacks.current.onQueryChange?.(query);
    }
    return () => {
      node.removeEventListener('govuk-react-autocomplete:query', onQuery);
      node.removeEventListener('govuk-react-autocomplete:confirm', onConfirmed);
    };
  }, []);

  return React.createElement(tagName, {
    ...props,
    ref: element,
    // The element owns `data-upgraded` and `data-focused`.
    suppressHydrationWarning: true,
    'min-length': minLength,
    filter,
    'confirm-on-blur': confirmOnBlur === false ? 'false' : undefined,
    'submit-on-confirm': submitOnConfirm ? '' : undefined,
    ...translationAttributes('status-query-too-short', statusQueryTooShort),
    ...translationAttributes('status-no-results', statusNoResults),
    ...translationAttributes('status-selected-option', statusSelectedOption),
    ...translationAttributes('status-results', statusResults),
  });
}

type PartProps<E extends keyof React.JSX.IntrinsicElements> = ComponentProps<E> & {
  /** Render the only child instead, with this part's props merged onto it. */
  asChild?: boolean;
};

export type InputProps = PartProps<'input'>;

/** The input, with an `id` and a label. A combobox once upgraded. */
export function Input({ asChild, ...props }: InputProps) {
  const Element = asChild ? Slot : 'input';
  // The element owns `role`, `autocomplete` and the ARIA after upgrade.
  return <Element data-autocomplete-input="" suppressHydrationWarning {...props} />;
}

export type ListboxProps = PartProps<'ul'>;

/** Holds the options. Hidden until there are options to show. */
export function Listbox({ asChild, ...props }: ListboxProps) {
  const Element = asChild ? Slot : 'ul';
  // The element owns `id`, `role`, `aria-labelledby` and `hidden` after upgrade.
  return <Element data-autocomplete-listbox="" hidden suppressHydrationWarning {...props} />;
}

export type OptionProps = PartProps<'li'> & {
  /** What the input gets when the option is confirmed, and what the query is matched against. Its text by default. */
  value?: string;
};

/** An option, in `Listbox`. Shown while it matches the query. */
export function Option({ asChild, value, ...props }: OptionProps) {
  const Element = asChild ? Slot : 'li';
  // The element owns `id`, `role`, `hidden`, `tabindex`, its ARIA and `data-focused` after upgrade.
  return <Element data-autocomplete-option="" data-value={value} suppressHydrationWarning {...props} />;
}

export type NoResultsProps = PartProps<'li'>;

/** Shown in `Listbox` when no option matches the query. Leave it out to show nothing. */
export function NoResults({ asChild, children = 'No results found', ...props }: NoResultsProps) {
  const Element = asChild ? Slot : 'li';
  // The element owns `hidden`, `role` and `aria-disabled` after upgrade.
  return (
    <Element data-autocomplete-no-results="" hidden suppressHydrationWarning {...props}>
      {children}
    </Element>
  );
}

// The same visually hidden styles as accessible-autocomplete's.
const visuallyHidden: CSSProperties = {
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: 1,
  marginBottom: -1,
  marginRight: -1,
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: 1,
};

export type StatusProps = PartProps<'div'>;

/** What screen readers hear about the options, once the user pauses. Visually hidden. */
export function Status({ asChild, style, ...props }: StatusProps) {
  const Element = asChild ? Slot : 'div';
  return (
    <Element data-autocomplete-status="" style={{ ...visuallyHidden, ...style }} {...props}>
      {/* An empty string, rather than no children, lets the element set the text before hydration. */}
      <div
        data-autocomplete-status-region=""
        role="status"
        aria-atomic="true"
        aria-live="polite"
        suppressHydrationWarning
      >
        {''}
      </div>
      <div
        data-autocomplete-status-region=""
        role="status"
        aria-atomic="true"
        aria-live="polite"
        suppressHydrationWarning
      >
        {''}
      </div>
    </Element>
  );
}

export type AssistiveHintProps = PartProps<'span'>;

/** How to use the options, which describes the input while the query is empty. Never shown. */
export function AssistiveHint({
  asChild,
  children = 'When autocomplete results are available use up and down arrows to review and enter to select. Touch device users, explore by touch or with swipe gestures.',
  ...props
}: AssistiveHintProps) {
  const Element = asChild ? Slot : 'span';
  // The element owns `id` after upgrade.
  return (
    <Element data-autocomplete-hint="" hidden suppressHydrationWarning {...props}>
      {children}
    </Element>
  );
}
