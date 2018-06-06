import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import InsetText from '@govuk-react/inset-text';
import { BLUE, LIGHT_BLUE } from 'govuk-colours';
import { NTA_LIGHT } from '@govuk-react/constants';

const StyledSummary = styled('summary')({
  display: 'inline-block',
  color: BLUE,
  cursor: 'pointer',
  textDecoration: 'underline',
  textDecorationSkipInk: 'none',
  fontFamily: NTA_LIGHT,
  position: 'relative',
  marginBottom: '0.26316em',
  ':hover': {
    color: LIGHT_BLUE,
  },
  ':focus': {
    outline: '3px solid #ffbf47',
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
    <StyledSummary>{ summaryText }</StyledSummary>
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
