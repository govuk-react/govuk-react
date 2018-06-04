// https://github.com/alphagov/govuk-frontend/tree/master/src/components/

import styled from 'react-emotion';
import React from 'react';
import * as COLOUR from 'govuk-colours';
import { withWhiteSpace } from '@govuk-react/hoc';
import {
  FONT_SIZE,
  LINE_HEIGHT,
  MEDIA_QUERIES,
  NTA_LIGHT,
} from '@govuk-react/constants';

const StyledHint = styled('span')({
  display: 'block',
  fontFamily: NTA_LIGHT,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  fontWeight: 400,
  textTransform: 'none',
  fontSize: FONT_SIZE.SIZE_16,
  lineHeight: LINE_HEIGHT.SIZE_16,
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: FONT_SIZE.SIZE_19,
    lineHeight: LINE_HEIGHT.SIZE_19,
  },
  color: `${COLOUR.GREY_1}`,
});

const HintText = props => <StyledHint {...props} />;

export default withWhiteSpace({ marginBottom: 0 })(HintText);
