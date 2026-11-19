import * as React from 'react';
import { clsx } from 'clsx';
import * as Primitives from '@govuk-react/primitives/password-input';
import * as Markup from 'govuk-frontend-react/password-input';
import { ErrorMessageComposite } from 'govuk-frontend-react/error-message';
import { Hint } from 'govuk-frontend-react/hint';
import { LabelComposite } from 'govuk-frontend-react/label';
import { joinIds } from '../../utils/join-ids.js';

/*
 * govuk-frontend-react's PasswordInput markup, with the show and hide button from
 * @govuk-react/primitives. Without JavaScript it is a password field with no button.
 */

export type RootProps = Markup.RootProps;

/**
 * Help users accessibly enter passwords.
 *
 * @see https://design-system.service.gov.uk/components/password-input/
 */
export function Root({
  showPasswordText,
  hidePasswordText,
  showPasswordAriaLabelText,
  hidePasswordAriaLabelText,
  passwordShownAnnouncementText,
  passwordHiddenAnnouncementText,
  ...props
}: RootProps) {
  const text = {
    showPasswordText,
    hidePasswordText,
    showPasswordAriaLabelText,
    hidePasswordAriaLabelText,
    passwordShownAnnouncementText,
    passwordHiddenAnnouncementText,
  };
  return (
    <Primitives.Root
      showText={showPasswordText}
      hideText={hidePasswordText}
      showLabel={showPasswordAriaLabelText}
      hideLabel={hidePasswordAriaLabelText}
      shownAnnouncement={passwordShownAnnouncementText}
      hiddenAnnouncement={passwordHiddenAnnouncementText}
    >
      <Markup.Root {...text} {...props} />
    </Primitives.Root>
  );
}

export { Wrapper, type WrapperProps } from 'govuk-frontend-react/password-input';

export type InputProps = Markup.InputProps;

export function Input(props: InputProps) {
  return (
    <Primitives.Input asChild>
      <Markup.Input {...props} />
    </Primitives.Input>
  );
}

export type ToggleProps = Markup.ToggleProps;

/** The show and hide button. Hidden until JavaScript runs. */
export function Toggle(props: ToggleProps) {
  return (
    <Primitives.Toggle asChild>
      <Markup.Toggle {...props} />
    </Primitives.Toggle>
  );
}

export type StatusProps = Omit<Primitives.StatusProps, 'asChild'>;

/** A visually hidden live region that announces when the password is shown or hidden. */
export function Status({ className, ...props }: StatusProps) {
  return (
    <Primitives.Status
      className={clsx('govuk-password-input__sr-status', 'govuk-visually-hidden', className)}
      {...props}
    />
  );
}

export type FieldProps = Markup.FieldProps;

const isSet = (node: React.ReactNode) => node !== undefined && node !== null && node !== false && node !== '';

/**
 * Help users accessibly enter passwords.
 *
 * @see https://design-system.service.gov.uk/components/password-input/
 */
export function Field({
  id: idProp,
  name,
  label,
  labelSize,
  labelIsPageHeading,
  hint,
  errorMessage,
  showPasswordText,
  hidePasswordText,
  showPasswordAriaLabelText,
  hidePasswordAriaLabelText,
  passwordShownAnnouncementText,
  passwordHiddenAnnouncementText,
  'aria-describedby': describedBy,
  ...props
}: FieldProps) {
  const id = idProp || name;
  const hintId = isSet(hint) ? `${id}-hint` : undefined;
  const errorId = isSet(errorMessage) ? `${id}-error` : undefined;
  const ariaDescribedBy = joinIds(describedBy, hintId, errorId);

  return (
    <Root
      error={Boolean(errorId)}
      showPasswordText={showPasswordText}
      hidePasswordText={hidePasswordText}
      showPasswordAriaLabelText={showPasswordAriaLabelText}
      hidePasswordAriaLabelText={hidePasswordAriaLabelText}
      passwordShownAnnouncementText={passwordShownAnnouncementText}
      passwordHiddenAnnouncementText={passwordHiddenAnnouncementText}
    >
      <LabelComposite htmlFor={id} size={labelSize} isPageHeading={labelIsPageHeading}>
        {label}
      </LabelComposite>
      {hintId && <Hint id={hintId}>{hint}</Hint>}
      {errorId && <ErrorMessageComposite id={errorId}>{errorMessage}</ErrorMessageComposite>}
      <Markup.Wrapper>
        <Input id={id} name={name} error={Boolean(errorId)} aria-describedby={ariaDescribedBy} {...props} />
        <Status />
        <Toggle aria-controls={id} aria-label={showPasswordAriaLabelText}>
          {showPasswordText}
        </Toggle>
      </Markup.Wrapper>
    </Root>
  );
}
