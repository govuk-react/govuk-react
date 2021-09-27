import React from 'react';
import styled from 'styled-components';
import { link } from '@govuk-react/lib';

export interface LinkProps {
  /** link contents */
  children: React.ReactNode;
  /** show link in a "muted" (grey) style */
  muted?: boolean;
  /** ensure link is shown in plain text colour */
  textColour?: boolean;
  /** ensure there is no "visited" style */
  noVisitedState?: boolean;
}

/**
 *
 * ### Usage
 *
 * Simple
 *
 * ```jsx
 * import { Link } from 'govuk-react'
 *
 * <Link href="/some/page">Example</Link>
 * ```
 *
 * It is possible to use this component to style a link from react-router, or reach-router
 * as follows:
 *
 * ```jsx
 * import { Link as RouterLink } from 'react-router-dom';

 * <Link as={RouterLink} to="destination">Router example</Link>
 * ```
 *
 * NB if no link destination is set then the link styling will not be applied.
 *
 * ### References
 *
 * - https://design-system.service.gov.uk/styles/typography/#links
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/core/_links.scss
 */
export const Link = styled('a').withConfig<LinkProps>({
  shouldForwardProp: (prop) => !['noVisitedState', 'textColour', 'muted'].includes(prop),
})<LinkProps>(
  ...link.common(),
  link.styleDefault,
  link.printFriendly,
  ({ muted }) => (muted ? link.styleMuted : undefined),
  ({ textColour }) => (textColour ? link.styleText : undefined),
  ({ noVisitedState }) => (noVisitedState ? link.styleNoVisitedState : undefined)
);

Link.defaultProps = {
  muted: false,
  textColour: false,
  noVisitedState: false,
};

Link.displayName = 'Link';

export default Link;
