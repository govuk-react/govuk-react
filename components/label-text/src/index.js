// https://github.com/alphagov/govuk-frontend/tree/master/src/components/

import glamorous from 'glamorous';
import React from 'react';
import PropTypes from 'prop-types';
import { BLACK } from 'govuk-colours';
import {
  FONT_SIZE,
  MEDIA_QUERIES,
  NTA_LIGHT,
  SPACING,
} from '@govuk-react/constants';

const GLabelText = glamorous.span(
  {
    fontFamily: NTA_LIGHT,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    display: 'block',
    clear: 'none',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '1.25',
    color: `${BLACK}`,
    paddingBottom: '2px',
    [MEDIA_QUERIES.LARGESCREEN]: {
      fontSize: '19px',
      lineHeight: '1.31579',
    },
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

export default LabelText;
