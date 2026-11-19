import * as React from 'react';
import { clsx } from 'clsx';
import * as Primitives from '@govuk-react/primitives/character-count';
import * as Markup from 'govuk-frontend-react/character-count';
import { ErrorMessageComposite } from 'govuk-frontend-react/error-message';
import { Hint } from 'govuk-frontend-react/hint';
import { LabelComposite } from 'govuk-frontend-react/label';

/*
 * govuk-frontend-react's CharacterCount markup, with the count from @govuk-react/primitives.
 * Without JavaScript the field shows its description, such as "You can enter up to 200
 * characters", and keeps its `maxlength`, if you give it one.
 */

export type RootProps = Markup.RootProps;

/**
 * Tell users how many characters or words they can enter into a textarea.
 *
 * Wrap `Textarea`, `Message`, `Status` and `ScreenReaderStatus`, with the label, hint and error
 * message.
 *
 * @see https://design-system.service.gov.uk/components/character-count/
 */
export function Root({
  maxLength,
  maxWords,
  threshold,
  countType,
  charactersUnderLimitText,
  charactersAtLimitText,
  charactersOverLimitText,
  wordsUnderLimitText,
  wordsAtLimitText,
  wordsOverLimitText,
  error,
  ...props
}: RootProps) {
  const text = {
    charactersUnderLimitText,
    charactersAtLimitText,
    charactersOverLimitText,
    wordsUnderLimitText,
    wordsAtLimitText,
    wordsOverLimitText,
  };
  return (
    <Primitives.Root
      // As in govuk-frontend, `maxWords` counts words, and `maxLength` wins.
      maxLength={maxLength ?? maxWords}
      countType={countType ?? (maxWords && maxLength === undefined ? 'words' : 'length')}
      threshold={threshold}
      charactersUnderLimit={charactersUnderLimitText}
      charactersAtLimit={charactersAtLimitText}
      charactersOverLimit={charactersOverLimitText}
      wordsUnderLimit={wordsUnderLimitText}
      wordsAtLimit={wordsAtLimitText}
      wordsOverLimit={wordsOverLimitText}
      hiddenDescriptionClass="govuk-visually-hidden"
      withinLimitClass="govuk-hint"
      overLimitClass="govuk-error-message"
      belowThresholdClass="govuk-character-count__message--disabled"
      // An error message already marks the field.
      inputOverLimitClass={error ? undefined : 'govuk-textarea--error'}
    >
      <Markup.Root
        maxLength={maxLength}
        maxWords={maxWords}
        threshold={threshold}
        countType={countType}
        error={error}
        {...text}
        {...props}
      />
    </Primitives.Root>
  );
}

export type TextareaProps = Markup.TextareaProps;

/** The field. */
export function Textarea(props: TextareaProps) {
  return (
    <Primitives.Input asChild>
      <Markup.Textarea {...props} />
    </Primitives.Input>
  );
}

export type MessageProps = Markup.MessageProps;

/**
 * The description, such as "You can enter up to 200 characters". Shown without JavaScript, and
 * visually hidden once the count shows. Give it the field's id followed by `-info`, and add that to
 * the field's `aria-describedby`.
 */
export function Message(props: MessageProps) {
  return (
    <Primitives.Description asChild>
      <Markup.Message {...props} />
    </Primitives.Description>
  );
}

export type StatusProps = Omit<Primitives.StatusProps, 'asChild'>;

/** The visible count, after `Message`. Shown once JavaScript runs. */
export function Status({ className, ...props }: StatusProps) {
  return (
    <Primitives.Status
      className={clsx('govuk-hint', 'govuk-character-count__message', 'govuk-character-count__status', className)}
      {...props}
    />
  );
}

export type ScreenReaderStatusProps = Omit<Primitives.ScreenReaderStatusProps, 'asChild'>;

/** The count for screen readers, after `Status`, once the user pauses typing. */
export function ScreenReaderStatus({ className, ...props }: ScreenReaderStatusProps) {
  return (
    <Primitives.ScreenReaderStatus
      className={clsx('govuk-character-count__sr-status', 'govuk-visually-hidden', className)}
      {...props}
    />
  );
}

export type FieldProps = Markup.FieldProps;

const isSet = (node: React.ReactNode) => node !== undefined && node !== null && node !== false && node !== '';

/**
 * Tell users how many characters or words they can enter into a textarea.
 *
 * @see https://design-system.service.gov.uk/components/character-count/
 */
export function Field({
  id: idProp,
  name,
  label,
  labelSize,
  labelIsPageHeading,
  hint,
  errorMessage,
  maxLength,
  maxWords,
  threshold,
  countType,
  textareaDescriptionText,
  charactersUnderLimitText,
  charactersAtLimitText,
  charactersOverLimitText,
  wordsUnderLimitText,
  wordsAtLimitText,
  wordsOverLimitText,
  'aria-describedby': describedBy,
  ...props
}: FieldProps) {
  const id = idProp || name;
  const infoId = `${id}-info`;
  const hintId = isSet(hint) ? `${id}-hint` : undefined;
  const errorId = isSet(errorMessage) ? `${id}-error` : undefined;
  const limit = maxWords || maxLength;
  const words = (countType ?? (maxWords ? 'words' : undefined)) === 'words';
  const ariaDescribedBy = [describedBy, infoId, hintId, errorId].filter(Boolean).join(' ') || undefined;

  return (
    <Root
      error={Boolean(errorId)}
      maxLength={maxLength}
      maxWords={maxWords}
      threshold={threshold}
      countType={countType}
      textareaDescriptionText={textareaDescriptionText}
      charactersUnderLimitText={charactersUnderLimitText}
      charactersAtLimitText={charactersAtLimitText}
      charactersOverLimitText={charactersOverLimitText}
      wordsUnderLimitText={wordsUnderLimitText}
      wordsAtLimitText={wordsAtLimitText}
      wordsOverLimitText={wordsOverLimitText}
    >
      <LabelComposite htmlFor={id} size={labelSize} isPageHeading={labelIsPageHeading}>
        {label}
      </LabelComposite>
      {hintId && <Hint id={hintId}>{hint}</Hint>}
      {errorId && <ErrorMessageComposite id={errorId}>{errorMessage}</ErrorMessageComposite>}
      <Textarea id={id} name={name} error={Boolean(errorId)} aria-describedby={ariaDescribedBy} {...props} />
      <Message id={infoId}>
        {limit
          ? (textareaDescriptionText || `You can enter up to %{count} ${words ? 'words' : 'characters'}`).replaceAll(
              '%{count}',
              String(limit)
            )
          : null}
      </Message>
      <Status />
      <ScreenReaderStatus />
    </Root>
  );
}
