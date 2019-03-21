import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ERROR_COLOUR } from 'govuk-colours';
import { SPACING } from '@govuk-react/constants';
import LabelText from '@govuk-react/label-text';
import ErrorText from '@govuk-react/error-text';
import HintText from '@govuk-react/hint-text';
import { spacing } from '@govuk-react/lib';

import Input from './input';

const StyledContainer = styled('div')(
  {
    display: 'flex',
    flexDirection: 'column',
  },
  ({ errorText }) =>
    errorText
      ? {
          borderLeft: `4px solid ${ERROR_COLOUR}`,
          marginRight: SPACING.SCALE_3,
          paddingLeft: SPACING.SCALE_2,
        }
      : undefined,
  spacing.withWhiteSpace({ marginBottom: 6 })
);

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
 * <DateField hintText="For example, 31 03 1980"
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
const DateField = ({ children, errorText, hintText, inputNames, defaultValues, input, ...props }) => (
  <StyledContainer {...props} errorText={errorText}>
    <LabelText errorText={errorText}>{children}</LabelText>
    {hintText && <HintText>{hintText}</HintText>}
    {errorText && <ErrorText errorText={errorText}>{errorText}</ErrorText>}
    <Input
      names={inputNames}
      // TODO: defaultValues should be a prop on input
      defaultValues={defaultValues}
      // TODO: allow each individual input (day, month, year) to have a separate bool for error
      error={!!errorText}
      {...input}
    />
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
   * Properties that are sent to the input, matching final form and redux form input type
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

export default DateField;
