'use client';

import * as React from 'react';
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import type { ComponentProps } from 'react';
import { Slot } from '../utils/slot.js';
import { tagName, type CharacterCountElement } from './element.js';
import { countMessage, messageAttributes, type CountType, type Translation } from './messages.js';

export type { CountType, Translation } from './messages.js';

/*
 * Headless character count: unstyled parts over the <govuk-react-character-count> element
 * (./element.ts), which shows the count on upgrade and keeps it up to date. Every part except Root
 * takes `asChild`.
 *
 * The field's value is the state, so there is nothing else to control. Without JavaScript the
 * description is shown and the counts are hidden.
 */

export type RootProps = React.HTMLAttributes<HTMLElement> & {
  /** The most characters, or words, the user should enter. Without it there's no count. */
  maxLength?: number;
  /**
   * What to count: "length" (the default) counts UTF-16 code units, as `maxlength` does;
   * "characters" counts characters as users see them, such as an emoji as one; "words" counts words.
   */
  countType?: CountType;
  /** The percentage of the limit from which the count is shown. */
  threshold?: number;
  /** Shown while under the limit. `%{count}` is the number left. */
  charactersUnderLimitText?: Translation;
  /** Shown at the limit. */
  charactersAtLimitText?: Translation;
  /** Shown while over the limit. `%{count}` is the number too many. */
  charactersOverLimitText?: Translation;
  /** Shown while under the limit when counting words. `%{count}` is the number left. */
  wordsUnderLimitText?: Translation;
  /** Shown at the limit when counting words. */
  wordsAtLimitText?: Translation;
  /** Shown while over the limit when counting words. `%{count}` is the number too many. */
  wordsOverLimitText?: Translation;
  /** Classes that visually hide the description once upgraded. Without them, inline styles do. */
  hiddenDescriptionClass?: string;
  /** Classes for the visible count while within the limit. */
  withinLimitClass?: string;
  /** Classes for the visible count while over the limit. */
  overLimitClass?: string;
  /** Classes for the visible count while below `threshold`. */
  belowThresholdClass?: string;
  /** Classes for the field while over the limit. */
  inputOverLimitClass?: string;
};

// What the counts start with, so the element only changes text React rendered.
const InitialMessage = createContext<string | undefined>(undefined);

const isCharacterCount = (element: HTMLElement): element is CharacterCountElement => 'update' in element;

/** Counts what the user types in its `Input` against a limit. Without JavaScript the description shows and the counts are hidden. */
export function Root({
  maxLength,
  countType = 'length',
  threshold,
  charactersUnderLimitText,
  charactersAtLimitText,
  charactersOverLimitText,
  wordsUnderLimitText,
  wordsAtLimitText,
  wordsOverLimitText,
  hiddenDescriptionClass,
  withinLimitClass,
  overLimitClass,
  belowThresholdClass,
  inputOverLimitClass,
  ...props
}: RootProps) {
  const element = useRef<HTMLElement>(null);
  const messages = {
    'characters-under-limit-text': charactersUnderLimitText,
    'characters-at-limit-text': charactersAtLimitText,
    'characters-over-limit-text': charactersOverLimitText,
    'words-under-limit-text': wordsUnderLimitText,
    'words-at-limit-text': wordsAtLimitText,
    'words-over-limit-text': wordsOverLimitText,
  };

  // A value set by React, rather than typed, fires no `input` event.
  useEffect(() => {
    const node = element.current;
    if (node && isCharacterCount(node)) node.update();
  });

  // Rendered once and then left to the element, so a re-render never puts back a stale count.
  const [initial] = useState(() =>
    maxLength === undefined ? undefined : countMessage(maxLength, countType, messages, props.lang || 'en').text
  );

  return (
    <InitialMessage.Provider value={initial}>
      {React.createElement(tagName, {
        ...props,
        ref: element,
        // The element owns `data-upgraded`.
        suppressHydrationWarning: true,
        maxlength: maxLength,
        'count-type': countType,
        threshold,
        ...messageAttributes('characters-under-limit-text', charactersUnderLimitText),
        ...messageAttributes('characters-at-limit-text', charactersAtLimitText),
        ...messageAttributes('characters-over-limit-text', charactersOverLimitText),
        ...messageAttributes('words-under-limit-text', wordsUnderLimitText),
        ...messageAttributes('words-at-limit-text', wordsAtLimitText),
        ...messageAttributes('words-over-limit-text', wordsOverLimitText),
        'hidden-description-class': hiddenDescriptionClass,
        'within-limit-class': withinLimitClass,
        'over-limit-class': overLimitClass,
        'below-threshold-class': belowThresholdClass,
        'input-over-limit-class': inputOverLimitClass,
      })}
    </InitialMessage.Provider>
  );
}

type PartProps<E extends keyof React.JSX.IntrinsicElements> = ComponentProps<E> & {
  /** Render the only child instead, with this part's props merged onto it. */
  asChild?: boolean;
};

export type InputProps = PartProps<'textarea'>;

/** The field: a `textarea`, or an `input` with `asChild`. Its `maxlength` is removed on upgrade. */
export function Input({ asChild, ...props }: InputProps) {
  const Element = asChild ? Slot : 'textarea';
  // The element owns `maxlength` and its over-limit classes after upgrade.
  return <Element data-character-count-input="" suppressHydrationWarning {...props} />;
}

export type DescriptionProps = PartProps<'div'>;

/**
 * The description, such as "You can enter up to 200 characters", shown without JavaScript and
 * visually hidden on upgrade. Give it an id and add that to the field's `aria-describedby`.
 */
export function Description({ asChild, ...props }: DescriptionProps) {
  const Element = asChild ? Slot : 'div';
  // The element owns its hiding styles after upgrade.
  return <Element data-character-count-description="" suppressHydrationWarning {...props} />;
}

export type StatusProps = PartProps<'div'>;

/** The visible count, hidden from assistive technology. Hidden until the element upgrades. */
export function Status({ asChild, children, ...props }: StatusProps) {
  const initial = useContext(InitialMessage);
  const Element = asChild ? Slot : 'div';
  // The element owns `hidden`, its text and its classes after upgrade.
  return (
    <Element data-character-count-status="" hidden aria-hidden="true" suppressHydrationWarning {...props}>
      {children ?? initial}
    </Element>
  );
}

export type ScreenReaderStatusProps = PartProps<'div'>;

/** The count for screen readers, once the user pauses typing. Make it visually hidden. */
export function ScreenReaderStatus({ asChild, children, ...props }: ScreenReaderStatusProps) {
  const initial = useContext(InitialMessage);
  const Element = asChild ? Slot : 'div';
  // The element owns `hidden`, `aria-hidden` and its text after upgrade.
  return (
    <Element data-character-count-sr-status="" hidden aria-live="polite" suppressHydrationWarning {...props}>
      {children ?? initial}
    </Element>
  );
}
