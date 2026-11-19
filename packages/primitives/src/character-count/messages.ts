/*
 * Counting and count messages, shared by the <govuk-react-character-count> element and its React
 * parts, so the server can render the message the element starts with.
 */

import {
  translate,
  translationAttributes,
  translationFromAttributes,
  withLocale,
  type Translation,
} from '../utils/translation.js';

export type { Translation };

export type CountType = 'length' | 'characters' | 'words';

export const messageNames = [
  'characters-under-limit',
  'characters-at-limit',
  'characters-over-limit',
  'words-under-limit',
  'words-at-limit',
  'words-over-limit',
] as const;

export type MessageName = (typeof messageNames)[number];

/** govuk-frontend's English messages. `%{count}` is replaced with the number. */
export const defaultMessages: Record<MessageName, Translation> = {
  'characters-under-limit': {
    one: 'You have %{count} character remaining',
    other: 'You have %{count} characters remaining',
  },
  'characters-at-limit': 'You have 0 characters remaining',
  'characters-over-limit': {
    one: 'You have %{count} character too many',
    other: 'You have %{count} characters too many',
  },
  'words-under-limit': { one: 'You have %{count} word remaining', other: 'You have %{count} words remaining' },
  'words-at-limit': 'You have 0 words remaining',
  'words-over-limit': { one: 'You have %{count} word too many', other: 'You have %{count} words too many' },
};

/** The attributes for a message: the message itself, or one attribute for each plural form. */
export const messageAttributes = (name: MessageName, message: Translation | undefined) =>
  translationAttributes(name, message);

/** Reads a message back from attributes written by `messageAttributes`. */
export const messageFromAttributes = (element: Element, name: MessageName) => translationFromAttributes(element, name);

/** Counts the text as govuk-frontend does: UTF-16 code units, characters as users see them, or words. */
export function countOf(text: string, countType: CountType, locale?: string) {
  if (countType === 'length') return text.length;
  if (typeof Intl.Segmenter !== 'function') {
    // Older browsers: close enough, rather than no count at all.
    return countType === 'words' ? (text.match(/\S+/g)?.length ?? 0) : Array.from(text).length;
  }
  const segmenter = withLocale(
    locale,
    (l) => new Intl.Segmenter(l, { granularity: countType === 'words' ? 'word' : 'grapheme' })
  );
  const segments = Array.from(segmenter.segment(text));
  return countType === 'words' ? segments.filter((segment) => segment.isWordLike).length : segments.length;
}

/** The message for the number of characters or words left, with its state. */
export function countMessage(
  remaining: number,
  countType: CountType,
  messages: Partial<Record<MessageName, Translation>>,
  locale?: string
) {
  const state = remaining < 0 ? 'over' : remaining === 0 ? 'at' : 'under';
  const name: MessageName = `${countType === 'words' ? 'words' : 'characters'}-${state}-limit`;
  const message = messages[name] ?? defaultMessages[name];
  return { state, text: translate(message, Math.abs(remaining), locale) };
}
