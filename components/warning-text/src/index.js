// TODO INSERT A COMMENT REFERENCE TO EXTERNAL URL IF POSSIBLE

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import {
  FONT_SIZE,
  LINE_HEIGHT,
  MEDIA_QUERIES,
  NTA_LIGHT,
} from '@govuk-react/constants';

const WarningTextInner = styled('div')({
  boxSizing: 'border-box',
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
});

const WarningText = ({ children }) => (
  <WarningTextInner>{children}</WarningTextInner>
);

WarningText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WarningText;
