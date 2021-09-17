import type { WithWhiteSpaceProps } from '@govuk-react/lib';

import React from 'react';
import styled from 'styled-components';
import { ERROR_COLOUR } from 'govuk-colours';
import { SPACING } from '@govuk-react/constants';
import LabelText from '@govuk-react/label-text';
import ErrorText from '@govuk-react/error-text';
import HintText from '@govuk-react/hint-text';
import { spacing } from '@govuk-react/lib';

import type { InputProps } from './input';
import Input from './input';

const StyledContainer = styled('div')<DateFieldProps>(
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
 *
 * ```jsx
 * import { DateField } from 'govuk-react'
 *
 * <DateField>What is your date of birth?</DateField>
 * ```
 *
 * Date with hint text
 *
 * ```jsx
 * <DateField hintText="For example, 31 03 1980">
 *   What is your date of birth?
 * </DateField>
 * ```
 *
 * Date with hint text & error
 *
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
 *
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
 *
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/date-field
 *
 */
export const DateField: DateFieldType = ({
  children,
  errorText,
  hintText,
  inputNames,
  defaultValues,
  input,
  ...props
}: DateFieldProps) => (
  <StyledContainer {...props} errorText={errorText}>
    <LabelText>{children}</LabelText>
    {hintText && <HintText>{hintText}</HintText>}
    {errorText && <ErrorText>{errorText}</ErrorText>}
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
DateField.displayName = 'DateField';

export interface DateFieldType extends React.FC<DateFieldProps> {
  Input: typeof Input;
  Container: typeof StyledContainer;
}

DateField.Container = StyledContainer;
DateField.Input = Input;

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

export interface DateFieldProps extends InputProps, WithWhiteSpaceProps {
  children: React.ReactNode;
  /**
   * Optional hint text
   */
  hintText?: string;
  /**
   * Error text
   */
  errorText?: string;
  /**
   * Input name attributes
   */
  inputNames?: {
    day?: string;
    month?: string;
    year?: string;
  };
  defaultValues?: {
    day?: string;
    month?: string;
    year?: string;
  };
  /**
   * Properties that are sent to the input, matching final form and redux form input type
   */
  input?: {
    /**
     * Called when the day, month or year changes
     */
    onChange?: (date: { day: string; month: string; year: string }) => unknown;
    /**
     * Called when the day, month or year fields are blurred
     * (does not get called when moving between inputs in the same datefield)
     */
    onBlur?: (...args: unknown[]) => unknown;
    /**
     * Called when the day, month or year fields are focussed
     * (does not get called when moving between inputs in the same datefield)
     */
    onFocus?: (...args: unknown[]) => unknown;
    /**
     * When the form field is controlled, this sets the value of the day, month and year inputs
     */
    value?: {
      day?: string;
      month?: string;
      year?: string;
    };
  };
}

export default DateField;
