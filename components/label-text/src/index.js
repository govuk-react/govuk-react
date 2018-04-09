// https://github.com/alphagov/govuk-frontend/tree/master/src/components/

import glamorous from 'glamorous';
import React from 'react';
import PropTypes from 'prop-types';
import { BLACK } from 'govuk-colours';
import { withWhiteSpace } from '@govuk-react/hoc';
import {
  FONT_SIZE,
  LINE_HEIGHT,
  MEDIA_QUERIES,
  NTA_LIGHT,
} from '@govuk-react/constants';

const GLabelText = glamorous.span(
  {
    fontFamily: NTA_LIGHT,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    display: 'block',
    clear: 'none',
    fontWeight: 400,
    fontSize: FONT_SIZE.SIZE_16,
    lineHeight: LINE_HEIGHT.SIZE_16,
    [MEDIA_QUERIES.LARGESCREEN]: {
      fontSize: FONT_SIZE.SIZE_19,
      lineHeight: LINE_HEIGHT.SIZE_19,
    },
    color: `${BLACK}`,
    paddingBottom: '2px',
  },
  ({ error }) => ({
    fontWeight: error ? 700 : undefined,
  }),
);

const LabelText = ({ children, ...props }) => (
  <GLabelText {...props}>
    {children}
  </GLabelText>);

LabelText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withWhiteSpace({ marginBottom: 0 })(LabelText);
