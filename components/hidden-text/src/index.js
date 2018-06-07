import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import InsetText from '@govuk-react/inset-text';
import { LINK_COLOUR, LINK_HOVER_COLOUR, FOCUS_COLOUR } from 'govuk-colours';
import { FOCUS_WIDTH, FONT_SIZE, SPACING, NTA_LIGHT } from '@govuk-react/constants';

const StyledSpan = styled('span')({
  textDecoration: 'underline',
  textDecorationSkipInk: 'none',
});

const StyledSummary = styled('summary')({
  display: 'inline-block',
  cursor: 'pointer',
  color: LINK_COLOUR,
  fontFamily: NTA_LIGHT,
  fontSize: FONT_SIZE.SIZE_19,
  position: 'relative',
  marginBottom: SPACING.SCALE_1,
  ':hover': {
    color: LINK_HOVER_COLOUR,
  },
  ':focus': {
    outline: `${FOCUS_WIDTH} solid ${FOCUS_COLOUR}`,
    outlineOffset: '-1px',
  },
});

/**
 *
 * ### Usage
 *
 *
 * Simple
 * ```jsx
 * import Paragraph from '@govuk-react/paragraph';
 *
 * <HiddenText summaryText={'Help with nationality'}>
 *   <Paragraph mb={0}>I am a paragraph. Please read me.</Paragraph>
 * </HiddenText>
 * ```
 *
 * ### References
 * - https://govuk-elements.herokuapp.com/typography/#typography-hidden-text
 */
const HiddenText = ({ summaryText, ...props }) => (
  <details open>
    <StyledSummary><StyledSpan>{ summaryText }</StyledSpan></StyledSummary>
    <InsetText isNarrow {...props} />
  </details>
);

HiddenText.defaultProps = {
  summaryText: '',
};

HiddenText.propTypes = {
  summaryText: PropTypes.string,
};

export default HiddenText;
