// https://github.com/alphagov/govuk-frontend/tree/master/src/components/

import glamorous from 'glamorous';
import React from 'react';
import * as COLOUR from 'govuk-colours';
import { FONT_SIZE, MEDIA_QUERIES, NTA_LIGHT } from '@govuk-react/constants/index';

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

const HintText = props => <GHintText {...props} />;

export default HintText;
