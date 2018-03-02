// https://govuk-elements.herokuapp.com/alpha-beta-banners/

import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { BLUE } from 'govuk-colours';
import {
  FONT_SIZE,
  LINE_HEIGHT,
  MEDIA_QUERIES,
  NTA_LIGHT,
} from '@govuk-react/constants';

import PhaseBadge from '../PhaseBadge/index';

const PhaseBannerInner = glamorous.p({
  borderBottom: '1px solid #bfc1c3',
  boxSizing: 'border-box',
  paddingBottom: '10px',
  fontFamily: NTA_LIGHT,
  fontWeight: 400,
  textTransform: 'none',
  fontSize: FONT_SIZE.SIZE_14,
  lineHeight: LINE_HEIGHT.SIZE_14,
  width: '100%',
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: FONT_SIZE.SIZE_16,
    lineHeight: LINE_HEIGHT.SIZE_16,
  },
  '> a': {
    color: BLUE,
  },
});

const PhaseBanner = ({ level, children }) => (
  <PhaseBannerInner>
    <PhaseBadge>{level}</PhaseBadge>
    {children}
  </PhaseBannerInner>
);

PhaseBanner.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.string.isRequired,
};

export default PhaseBanner;
