import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { link } from '@govuk-react/lib';

const Link = styled('a')(
  link.common(),
  link.styleDefault,
  link.printFriendly,
  ({ muted }) => (muted ? link.styleMuted : undefined),
  ({ textColour }) => (textColour ? link.styleText : undefined),
  ({ noVisitedState }) => (noVisitedState ? link.styleNoVisitedState : undefined)
);

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * <Link href="/some/page">Example</Link>
 * ```
 *
 * It is possible to use this component to style a link from react-router, or reach-router
 * as follows:
 * ```jsx
 * import { Link as RouterLink } from 'react-router-dom';

 * <Link as={RouterLink} to="destination">Router example</Link>
 * ```
 *
 * NB if no link destination is set then the link styling will not be applied
 *
 * ### References
 * - https://design-system.service.gov.uk/styles/typography/#links
 * - https://github.com/alphagov/govuk-frontend/blob/master/src/core/_links.scss
 */
const LinkDocumented = props => <Link {...props} />;

LinkDocumented.propTypes = {
  /** link contents */
  children: PropTypes.node.isRequired,
  /** show link in a "muted" (grey) style */
  muted: PropTypes.bool,
  /** ensure link is shown in plain text colour */
  textColour: PropTypes.bool,
  /** ensure there is no "visited" style */
  noVisitedState: PropTypes.bool,
};
LinkDocumented.defaultProps = {
  muted: false,
  textColour: false,
  noVisitedState: false,
};

Link.propTypes = LinkDocumented.propTypes;
Link.defaultProps = LinkDocumented.defaultProps;

export { LinkDocumented };
export default Link;
