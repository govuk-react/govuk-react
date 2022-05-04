/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/date-field
 */

import type { WithWhiteSpaceProps } from '@govuk-react/lib';

import * as React from 'react';
import styled from 'styled-components';
import { ERROR_COLOUR } from 'govuk-colours';
import { SPACING } from '@govuk-react/constants';
import LabelText from '@govuk-react/label-text';
import ErrorText from '@govuk-react/error-text';
import HintText from '@govuk-react/hint-text';
import { spacing } from '@govuk-react/lib';
import { InputProps as BaseInputProps } from '@govuk-react/input';

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
 * Use the date input component to help users enter a memorable date or one they can easily look up.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/date-field
 * - https://design-system.service.gov.uk/components/date-input/
 */
export const DateField: DateFieldType = ({
  children,
  errorText,
  hintText,
  inputNames,
  defaultValues,
  inputs,
  input,
  ...props
}: DateFieldProps) => (
  <StyledContainer {...props} errorText={errorText}>
    <LabelText>{children}</LabelText>
    {hintText && <HintText>{hintText}</HintText>}
    {errorText && <ErrorText>{errorText}</ErrorText>}
    <Input names={inputNames} defaultValues={defaultValues} error={!!errorText} inputs={inputs} {...input} />
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
  inputs: {
    day: undefined,
    month: undefined,
    year: undefined,
  },
  input: undefined,
};

export interface DateFieldProps extends React.HTMLAttributes<HTMLDivElement>, WithWhiteSpaceProps {
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
   * Custom props to pass down to the input fields
   */
  inputs?: {
    day?: BaseInputProps;
    month?: BaseInputProps;
    year?: BaseInputProps;
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
    onBlur?: (date: { day: string; month: string; year: string }) => void;
    /**
     * Called when the day, month or year fields are focussed
     * (does not get called when moving between inputs in the same datefield)
     */
    onFocus?: (date: { day: string; month: string; year: string }) => void;
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
