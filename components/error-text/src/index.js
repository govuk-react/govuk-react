// https://github.com/alphagov/govuk-frontend/tree/master/src/components

import styled from 'react-emotion';
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

const StyledError = styled('span')({
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

const ErrorText = props => <StyledError {...props} />;

ErrorText.propTypes = {
  /** Text to describe the error */
  children: PropTypes.string.isRequired,
};

export default withWhiteSpace({ marginBottom: 0 })(ErrorText);
