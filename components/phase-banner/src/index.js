// https://govuk-elements.herokuapp.com/alpha-beta-banners/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
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

const PhaseBanner = ({ level, children, ...props }) => (
  <StyledBanner {...props}>
    <PhaseBadge>{level}</PhaseBadge>
    {children}
  </StyledBanner>
);

PhaseBanner.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.string.isRequired,
};

export default withWhiteSpace({ marginBottom: 0 })(PhaseBanner);
