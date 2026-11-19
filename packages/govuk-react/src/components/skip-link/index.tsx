import * as React from 'react';
import * as FocusLinks from '@govuk-react/primitives/focus-links';
import * as Markup from 'govuk-frontend-react/skip-link';

export type SkipLinkProps = Markup.SkipLinkProps;

/**
 * Use the skip link component to help keyboard-only users skip to the main content on a page.
 *
 * As in govuk-frontend, once JavaScript runs it moves focus to the main content, which is outlined
 * until focus moves on.
 *
 * @see https://design-system.service.gov.uk/components/skip-link/
 */
export function SkipLink(props: SkipLinkProps) {
  return (
    <FocusLinks.Root focusedClass="govuk-skip-link-focused-element">
      <Markup.SkipLink {...props} />
    </FocusLinks.Root>
  );
}
