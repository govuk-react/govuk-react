import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SPACING_POINTS } from '@govuk-react/constants';
import { link, typography, visuallyHidden } from '@govuk-react/lib';

const SkipLink = styled('a')(visuallyHidden.focusable(), link.common(), link.styleText, typography.responsive(16), {
  display: 'block',
  padding: `${SPACING_POINTS[2]}px ${SPACING_POINTS[3]}px`,
  '@supports (padding:max(calc(0px)))': {
    paddingRight: `max(${SPACING_POINTS[3]}px, calc(${SPACING_POINTS[3]}px + env(safe-area-inset-right)))`,
    paddingLeft: `max(${SPACING_POINTS[3]}px, calc(${SPACING_POINTS[3]}px + env(safe-area-inset-left)))`,
  },
});

/**
 *
 * ### Usage
 *
 * Use the skip link component to help keyboard-only users skip to the main content on a page.
 *
 * Simple
 * ```jsx
 * <SkipLink href="#main-content">Skip to main content</SkipLink>
 * ```
 *
 * ### References
 * - https://design-system.service.gov.uk/components/skip-link/
 * - https://github.com/alphagov/govuk-frontend/tree/master/src/components/skip-link
 */
const SkipLinkDocumented = props => <SkipLink {...props} />;

SkipLinkDocumented.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
};

SkipLinkDocumented.defaultProps = {
  children: 'Skip to main content',
  href: '#content',
};

SkipLink.propTypes = SkipLinkDocumented.propTypes;
SkipLink.defaultProps = SkipLinkDocumented.defaultProps;

export { SkipLinkDocumented };
export default SkipLink;
