// https://govuk-static.herokuapp.com/component-guide/lead_paragraph

import React from 'react';
import styled from 'react-emotion';
import { withWhiteSpace } from '@govuk-react/hoc';

import {
  FONT_SIZE,
  LINE_HEIGHT,
  MEDIA_QUERIES,
  NTA_LIGHT,
} from '@govuk-react/constants';

const StyledParagraph = styled('p')({
  fontFamily: NTA_LIGHT,
  fontSize: FONT_SIZE.SIZE_18,
  lineHeight: LINE_HEIGHT.SIZE_18,
  marginTop: 0,
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: FONT_SIZE.SIZE_24,
    lineHeight: LINE_HEIGHT.SIZE_24,
  },
});

/**
 *
 * ### Usage
 *
 *
 * Simple
 * ```js
 * <LeadParagraph>LeadParagraph example</LeadParagraph>
 * ```
 *
 * ### References
 * - https://govuk-static.herokuapp.com/component-guide/lead_paragraph
 */
const LeadParagraph = props => <StyledParagraph {...props} />;

export default withWhiteSpace({ marginBottom: 5 })(LeadParagraph);
