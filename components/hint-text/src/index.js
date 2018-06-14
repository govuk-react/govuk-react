// https://github.com/alphagov/govuk-frontend/tree/master/src/components/

import styled from 'react-emotion';
import React from 'react';
import PropTypes from 'prop-types';
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

/**
 *
 * ### Usage
 *
 *
 * Simple
 * ```jsx
 * <HintText>Example</HintText>
 * ```
 *
 * ### References
 * - https://github.com/alphagov/govuk-frontend/tree/master/src/components/
 */
const HintText = props => <StyledHint {...props} />;

HintText.propTypes = {
  /** Text for the hint */
  children: PropTypes.node.isRequired,
};

export default withWhiteSpace({ marginBottom: 0 })(HintText);
