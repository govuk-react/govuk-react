// https://github.com/alphagov/govuk-frontend/tree/master/src/components/

import glamorous from 'glamorous';
import React from 'react';
import PropTypes from 'prop-types';
import * as COLOUR from 'govuk-colours';
import {
  FONT_SIZE,
  MEDIA_QUERIES,
  NTA_LIGHT,
  SPACING,
} from '@govuk-react/constants';

const GHintText = glamorous.span({
  display: 'block',
  fontFamily: NTA_LIGHT,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  fontWeight: 400,
  textTransform: 'none',
  fontSize: FONT_SIZE.SIZE_16,
  lineHeight: '20px',
  color: `${COLOUR.GREY_1}`,
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: FONT_SIZE.SIZE_19,
    lineHeight: '25px',
  },
});

const HintText = ({ children, ...props }) => (
  <GHintText {...props}>
    {children}
  </GHintText>);

HintText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HintText;
