import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import InsetText from '@govuk-react/inset-text';
import { LINK_COLOUR, LINK_HOVER_COLOUR, FOCUS_COLOUR } from 'govuk-colours';
import { FOCUS_WIDTH, FONT_SIZE, SPACING, NTA_LIGHT } from '@govuk-react/constants';
import { withWhiteSpace } from '@govuk-react/hoc';

const HIDDEN_TEXT_FOCUS_WIDTH = `${parseInt(FOCUS_WIDTH.split('px')[0], 10) + 1}px`;

const StyledSpan = styled('span')({
  textDecoration: 'underline',
  textDecorationSkipInk: 'none',
});

const StyledSummary = styled('summary')({
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
    outline: `${HIDDEN_TEXT_FOCUS_WIDTH} solid ${FOCUS_COLOUR}`,
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
 * - https://github.com/alphagov/govuk-frontend/blob/master/src/components/details/_details.scss
 */
const HiddenText = ({ summaryText, children, ...props }) => (
  <details {...props}>
    <StyledSummary><StyledSpan>{summaryText}</StyledSpan></StyledSummary>
    <InsetText mb={0} isNarrow>{ children }</InsetText>
  </details>
);

HiddenText.defaultProps = {
  children: undefined,
};

HiddenText.propTypes = {
  /**  The nodes that will be displayed within the InsetText component */
  children: PropTypes.node,
  /** Text for the summary button link e.g. Help with nationality */
  summaryText: PropTypes.string.isRequired,
};

export default withWhiteSpace({ marginBottom: 6 })(HiddenText);
