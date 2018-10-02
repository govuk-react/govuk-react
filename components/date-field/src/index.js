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

import Input from './input';

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

const StyledLabel = styled(Label)({
  marginRight: '20px',
  marginBottom: 0,
}, ({ year }) => ({
  width: year ? '70px' : '50px',
}));

const StyledList = styled('div')({
  fontFamily: NTA_LIGHT,
  display: 'flex',
});

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * <DateField>What is your date of birth?</DateField>
 * ```
 *
 * Date with hint text
 * ```jsx
 * <DateField hintText="For example, 31 03 1980">
 *   What is your date of birth?
 * </DateField>
 * ```
 *
 * Date with hint text & error
 * ```jsx
 * <DateField
 *   hintText="For example, 31 03 1980"
 *   errorText="Error message goes here"
 * >
 *   What is your date of birth?
 * </DateField>
 * ```
 *
 * With custom input name props
 * ```jsx
 * <DateInput hintText="For example, 31 03 1980"
 *   inputNames={{
 *     day: 'dayInputName',
 *     month: 'monthInputName',
 *     year: 'yearInputName',
 *   }}
 *  >
 *   What is your date of birth?
 * </DateField>
 * ```
 *
 * ### References:
 * - https://github.com/alphagov/govuk-frontend/tree/master/src/components/date-field
 *
 */
const DateField = ({
  children,
  errorText,
  hintText,
  inputNames,
  defaultValues,
  input,
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
      <StyledLabel>
        <LabelText>Day</LabelText>
        <StyledInput name={day} errorText={errorText} type="number" defaultValue={defaultDay} />
      </StyledLabel>
      <StyledLabel>
        <LabelText>Month</LabelText>
        <StyledInput name={month} errorText={errorText} type="number" defaultValue={defaultMonth} />
      </StyledLabel>
      <StyledLabel year>
        <LabelText>Year</LabelText>
        <StyledInput name={year} errorText={errorText} type="number" defaultValue={defaultYear} />
      </StyledLabel>
    </StyledList>
  </StyledContainer>
);

DateField.defaultProps = {
  hintText: undefined,
  errorText: undefined,
  inputNames: {
    day: undefined,
    month: undefined,
    year: undefined,
  },
  defaultValues: {
    day: undefined,
    month: undefined,
    year: undefined,
  },
  input: undefined,
};

DateField.propTypes = {
  children: PropTypes.node.isRequired,
  /**
   * Optional hint text
   */
  hintText: PropTypes.string,
  /**
   * Error text
   */
  errorText: PropTypes.string,
  /**
   * Input name attributes
   */
  inputNames: PropTypes.shape({
    day: PropTypes.string,
    month: PropTypes.string,
    year: PropTypes.string,
  }),
  defaultValues: {
    day: PropTypes.any,
    month: PropTypes.any,
    year: PropTypes.any,
  },
  /**
   * Properties that are sent to the input, matching final form input type
   */
  input: PropTypes.shape({
    /**
     * Called when the day, month or year changes
     */
    onChange: PropTypes.func,
    /**
     * Called when the day, month or year fields are blurred
     * (does not get called when moving between inputs in the same datefield)
     */
    onBlur: PropTypes.func,
    /**
     * Called when the day, month or year fields are focussed
     * (does not get called when moving between inputs in the same datefield)
     */
    onFocus: PropTypes.func,
    /**
     * When the form field is controlled, this sets the value of the day, month and year inputs
     */
    value: PropTypes.shape({
      day: PropTypes.string,
      month: PropTypes.string,
      year: PropTypes.string,
    }),
  }),
};

export default withWhiteSpace({ marginBottom: 6 })(DateField);
