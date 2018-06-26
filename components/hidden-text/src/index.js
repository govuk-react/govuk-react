import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import InsetText from '@govuk-react/inset-text';
import { LINK_COLOUR, LINK_HOVER_COLOUR, FOCUS_COLOUR } from 'govuk-colours';
import { FOCUS_WIDTH, FONT_SIZE, SPACING, NTA_LIGHT } from '@govuk-react/constants';
import { withWhiteSpace } from '@govuk-react/hoc';

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
    outline: `calc(${FOCUS_WIDTH} + 1px) solid ${FOCUS_COLOUR}`,
    // outlineOffset: '-1px', In alpha/govuk-frontend but causes arrow icon to be hidden when open
    background: FOCUS_COLOUR,
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
const HiddenText = ({ summaryText, children, ...props }) => (
  <details {...props}>
    <StyledSummary><StyledSpan>{summaryText}</StyledSpan></StyledSummary>
    <InsetText mb={0} isNarrow>{ children }</InsetText>
  </details>
);

HiddenText.defaultProps = {
  children: undefined,
  summaryText: '',
};

HiddenText.propTypes = {
  children: PropTypes.node,
  summaryText: PropTypes.string,
};

export default withWhiteSpace({ marginBottom: 6 })(HiddenText);
