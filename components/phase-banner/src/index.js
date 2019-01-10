import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { BLUE } from 'govuk-colours';
import {
  FONT_SIZE,
  LINE_HEIGHT,
  MEDIA_QUERIES,
  NTA_LIGHT,
} from '@govuk-react/constants';
import { withWhiteSpace } from '@govuk-react/hoc';

import PhaseBadge from '@govuk-react/phase-badge';

const StyledBanner = styled('div')({
  borderBottom: '1px solid #bfc1c3',
  boxSizing: 'border-box',
  paddingTop: '10px',
  paddingBottom: '10px',
  fontFamily: NTA_LIGHT,
  fontWeight: 400,
  textTransform: 'none',
  fontSize: FONT_SIZE.SIZE_14,
  lineHeight: LINE_HEIGHT.SIZE_14,
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: FONT_SIZE.SIZE_16,
    lineHeight: LINE_HEIGHT.SIZE_16,
  },
  '> a': {
    color: BLUE,
  },
});

/**
 *
 * ### Usage
 *
 * Alpha
 * ```jsx
 * <PhaseBanner level="alpha">
 *    This part of GOV.UK is being rebuilt &#8211;{' '}
 *    <AnchorLink href="https://example.com">find out what that means</AnchorLink>
 *  </PhaseBanner>
 * ```
 *
 * Beta
 * ```jsx
 * <PhaseBanner level="beta">
 *    This part of GOV.UK is being rebuilt &#8211;{' '}
 *    <AnchorLink href="https://example.com">find out what that means</AnchorLink>
 *  </PhaseBanner>
 * ```
 *
 * ### References:
 * - https://govuk-elements.herokuapp.com/alpha-beta-banners/
 *
 */
const PhaseBanner = ({ level, children, ...props }) => (
  <StyledBanner {...props}>
    <PhaseBadge>{level}</PhaseBadge>
    {children}
  </StyledBanner>
);

PhaseBanner.propTypes = {
  /** Children text and links */
  children: PropTypes.node.isRequired,
  /** Alpha or beta banner */
  level: PropTypes.string.isRequired,
};

export default withWhiteSpace({ marginBottom: 0 })(PhaseBanner);
