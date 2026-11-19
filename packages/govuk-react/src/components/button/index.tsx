import * as React from 'react';
import type { ElementType, ReactNode } from 'react';
import * as Primitives from '@govuk-react/primitives/button';
import * as Markup from 'govuk-frontend-react/button';

export { StartContent, StartIcon } from 'govuk-frontend-react/button';
export type { LinkProps, RootProps, StartIconProps, Variant } from 'govuk-frontend-react/button';

/**
 * Use the button component to help users carry out an action.
 *
 * As in govuk-frontend, with `preventDoubleClick` a second click within a second is ignored, and
 * Space activates a link button.
 *
 * @see https://design-system.service.gov.uk/components/button/
 */
export function Root(props: Markup.LinkProps): ReactNode;
export function Root<As extends ElementType = 'button'>(props: Markup.RootProps<As>): ReactNode;
export function Root(props: Markup.RootProps<ElementType>) {
  return (
    // Covers `as` components too, which govuk-frontend-react doesn't mark. Links can't be double submitted.
    <Primitives.Root asChild preventDoubleClick={props.href ? undefined : props.preventDoubleClick}>
      <Markup.Root {...props} />
    </Primitives.Root>
  );
}

/**
 * Use the button component to help users carry out an action.
 *
 * As in govuk-frontend, with `preventDoubleClick` a second click within a second is ignored, and
 * Space activates a link button.
 *
 * @see https://design-system.service.gov.uk/components/button/
 */
export function Composite(props: Markup.LinkProps): ReactNode;
export function Composite<As extends ElementType = 'button'>(props: Markup.RootProps<As>): ReactNode;
export function Composite(props: Markup.RootProps<ElementType>) {
  return (
    // Covers `as` components too, which govuk-frontend-react doesn't mark. Links can't be double submitted.
    <Primitives.Root asChild preventDoubleClick={props.href ? undefined : props.preventDoubleClick}>
      <Markup.Composite {...props} />
    </Primitives.Root>
  );
}
