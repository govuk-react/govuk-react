// https://github.com/alphagov/govuk-frontend/tree/master/src/components/date-input

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { BLACK, YELLOW, ERROR_COLOUR } from 'govuk-colours';
import {
  FONT_SIZE,
  LINE_HEIGHT,
  MEDIA_QUERIES,
  NTA_LIGHT,
  SPACING,
} from '@govuk-react/constants';
import Label from '@govuk-react/label';
import LabelText from '@govuk-react/label-text';
import ErrorText from '@govuk-react/error-text';
import HintText from '@govuk-react/hint-text';
import { withWhiteSpace } from '@govuk-react/hoc';

const StyledContainer = styled('div')(
  {
    display: 'flex',
    flexDirection: 'column',
  },
  ({ errorText }) => ({
    borderLeft: errorText ? `4px solid ${ERROR_COLOUR}` : undefined,
    marginRight: errorText ? SPACING.SCALE_3 : undefined,
    paddingLeft: errorText ? SPACING.SCALE_2 : undefined,
  }),
);

const StyledInput = styled('input')(
  {
    boxSizing: 'border-box',
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
    width: '100%',
    padding: '5px 4px 4px',
    border: `2px solid ${BLACK}`,
    ':focus': {
      outline: `3px solid ${YELLOW}`,
      outlineOffset: 0,
    },
  },
  ({ errorText }) => ({
    border: errorText ? `4px solid ${ERROR_COLOUR}` : `2px solid ${BLACK}`,
  }),
);

const StyledList = styled('div')({
  fontFamily: NTA_LIGHT,
  display: 'flex',
  '> label': {
    width: '50px',
    marginRight: '20px',
    marginBottom: 0,
  },
  '> label.year': {
    width: '70px',
  },
});

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * <DateInput>What is your date of birth?</DateInput>
 * ```
 *
 * Date with hint text
 * ```jsx
 * <DateInput hintText="For example, 31 03 1980">
 *    What is your date of birth?
 *  </DateInput>
 * ```
 *
 * Date with hint text & error
 * ```jsx
 * <DateInput
 *    hintText="For example, 31 03 1980"
 *    errorText="Error message goes here"
 *  >
 *    What is your date of birth?
 *  </DateInput>
 * ```
 * ### References:
 * - https://github.com/alphagov/govuk-frontend/tree/master/src/components/date-input
 *
 */
const DateInput = ({
  children,
  errorText,
  hintText,
  ...props
}) => (
  <StyledContainer {...props} errorText={errorText}>
    <LabelText errorText={errorText}>{children}</LabelText>
    {hintText ? <HintText>{hintText}</HintText> : <span />}
    {errorText ? (
      <ErrorText errorText={errorText}>{errorText}</ErrorText>
    ) : (
      <span />
    )}
    <StyledList>
      <Label>
        <LabelText>Day</LabelText>
        <StyledInput errorText={errorText} type="text" />
      </Label>
      <Label>
        <LabelText>Month</LabelText>
        <StyledInput errorText={errorText} type="text" />
      </Label>
      <Label className="year">
        <LabelText>Year</LabelText>
        <StyledInput errorText={errorText} type="text" />
      </Label>
    </StyledList>
  </StyledContainer>
);

DateInput.defaultProps = {
  hintText: undefined,
  errorText: undefined,
};

DateInput.propTypes = {
  children: PropTypes.node.isRequired,
  hintText: PropTypes.string,
  errorText: PropTypes.string,
};

export default withWhiteSpace({ marginBottom: 6 })(DateInput);
