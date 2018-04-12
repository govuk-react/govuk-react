// https://github.com/alphagov/govuk-frontend/tree/master/src/components

import glamorous from 'glamorous';
import React from 'react';
import PropTypes from 'prop-types';
import { ERROR_COLOUR } from 'govuk-colours';
import { withWhiteSpace } from '@govuk-react/hoc';
import {
  FONT_SIZE,
  LINE_HEIGHT,
  MEDIA_QUERIES,
  NTA_LIGHT,
} from '@govuk-react/constants';

const GErrorText = glamorous.span({
  display: 'block',
  fontFamily: NTA_LIGHT,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  fontWeight: 700,
  textTransform: 'none',
  fontSize: FONT_SIZE.SIZE_16,
  lineHeight: LINE_HEIGHT.SIZE_16,
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: FONT_SIZE.SIZE_19,
    lineHeight: LINE_HEIGHT.SIZE_19,
  },
  color: `${ERROR_COLOUR}`,
  paddingTop: '4px',
  paddingBottom: '2px',
});

const ErrorText = ({ children, ...props }) => (
  <GErrorText {...props}>
    {children}
  </GErrorText>
);

ErrorText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withWhiteSpace({ marginBottom: 0 })(ErrorText);
