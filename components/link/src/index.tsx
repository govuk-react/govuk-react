/**
 * ### References
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/core/_links.scss
 */

import * as React from 'react';
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
 * Link/Anchor element.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/link
 * - https://design-system.service.gov.uk/styles/typography/#links
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
