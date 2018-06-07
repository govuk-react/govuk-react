// https://govuk-elements.herokuapp.com/alpha-beta-banners/

import styled from 'react-emotion';
import React from 'react';
import { BLUE, WHITE } from 'govuk-colours';
import {
  FONT_SIZE,
  LINE_HEIGHT,
  MEDIA_QUERIES,
  NTA_LIGHT,
} from '@govuk-react/constants';
import { withWhiteSpace } from '@govuk-react/hoc';

const StyledBadge = styled('strong')({
  display: 'inline-block',
  margin: '0 8px 0 0',
  padding: '2px 5px',
  fontFamily: NTA_LIGHT,
  fontWeight: 700,
  fontSize: FONT_SIZE.SIZE_14,
  lineHeight: LINE_HEIGHT.SIZE_14,
  textTransform: 'uppercase',
  letterSpacing: '1px',
  textDecoration: 'none',
  color: WHITE,
  backgroundColor: BLUE,
  WebkitFontMmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: FONT_SIZE.SIZE_16,
    lineHeight: LINE_HEIGHT.SIZE_16,
    paddingBottom: 0,
  },
});

const PhaseBadge = props => <StyledBadge {...props} />;

export default withWhiteSpace({ marginBottom: 0 })(PhaseBadge);
