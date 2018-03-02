// https://github.com/alphagov/govuk-frontend/tree/master/src/components/

import glamorous from 'glamorous';
import React from 'react';
import { BLACK } from 'govuk-colours';
import { MEDIA_QUERIES } from '@govuk-react/constants/index';

const GLabelText = glamorous.span(
  {
    fontFamily: '"nta", Arial, sans-serif',
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

const LabelText = props => <GLabelText {...props} />;

export default LabelText;
