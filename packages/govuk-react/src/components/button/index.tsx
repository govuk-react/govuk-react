import * as React from 'react';
import type { ElementType, ReactNode } from 'react';
import * as Primitives from '@govuk-react/primitives/button';
import {
  Button as MarkupButton,
  StartButton as MarkupStartButton,
  type ButtonLinkProps,
  type ButtonProps,
} from 'govuk-frontend-react/button';

export { StartButtonContent, StartButtonIcon } from 'govuk-frontend-react/button';
export type { ButtonLinkProps, ButtonProps, ButtonVariant, StartButtonIconProps } from 'govuk-frontend-react/button';

/**
 * Use the button component to help users carry out an action.
 *
 * As in govuk-frontend, with `preventDoubleClick` a second click within a second is ignored, and
 * Space activates a link button.
 *
 * @see https://design-system.service.gov.uk/components/button/
 */
export function Button(props: ButtonLinkProps): ReactNode;
export function Button<As extends ElementType = 'button'>(props: ButtonProps<As>): ReactNode;
export function Button(props: ButtonProps<ElementType>) {
  return (
    // Covers `as` components too, which govuk-frontend-react doesn't mark. Links can't be double submitted.
    <Primitives.Root asChild preventDoubleClick={props.href ? undefined : props.preventDoubleClick}>
      <MarkupButton {...props} />
    </Primitives.Root>
  );
}

/**
 * Use a start button for the main call to action on your service's start page.
 *
 * As in govuk-frontend, with `preventDoubleClick` a second click within a second is ignored, and
 * Space activates a link button.
 *
 * @see https://design-system.service.gov.uk/components/button/#start-buttons
 */
export function StartButton(props: Omit<ButtonLinkProps, 'start'>): ReactNode;
export function StartButton<As extends ElementType = 'button'>(props: Omit<ButtonProps<As>, 'start'>): ReactNode;
export function StartButton(props: Omit<ButtonProps<ElementType>, 'start'>) {
  return (
    // Covers `as` components too, which govuk-frontend-react doesn't mark. Links can't be double submitted.
    <Primitives.Root asChild preventDoubleClick={props.href ? undefined : props.preventDoubleClick}>
      <MarkupStartButton {...props} />
    </Primitives.Root>
  );
}
