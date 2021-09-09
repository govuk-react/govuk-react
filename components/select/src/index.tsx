// https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/select

import React from 'react';
import styled from 'styled-components';
import { BLACK, ERROR_COLOUR, YELLOW } from 'govuk-colours';
import { MEDIA_QUERIES } from '@govuk-react/constants';
import { typography } from '@govuk-react/lib';

import Label from '@govuk-react/label';
import LabelText from '@govuk-react/label-text';
import ErrorText from '@govuk-react/error-text';
import HintText from '@govuk-react/hint-text';

const StyledSelect = styled('select')(
  typography.font({ size: 19 }),
  {
    boxSizing: 'border-box',
    width: '100%',
    height: '33px',
    padding: '5px 4px 4px',
    border: `2px solid ${BLACK}`,
    [MEDIA_QUERIES.LARGESCREEN]: {
      width: '50%',
      height: '38px',
    },
    ':focus': {
      outline: `3px solid ${YELLOW}`,
      outlineOffset: 0,
    },
  },
  ({ error }) => ({
    border: error ? `4px solid ${ERROR_COLOUR}` : undefined,
  })
);

/**
 *
 * ### Usage
 *
 * Simple
 *
 * ```jsx
 * <Select name="group1" label="This is a label">
 *   <option value="0">GOV.UK elements option 1</option>
 *   <option value="1">GOV.UK elements option 2</option>
 *   <option value="2">GOV.UK elements option 3</option>
 * </Select>
 * ```
 *
 * Select with hint text
 *
 * ```jsx
 * <Select
 *    name="group1"
 *    label="This is a label"
 *    hint={[
 *      'This is and example of hintText/description of what we need from you.',
 *    ]}
 *  >
 *    <option value="0">GOV.UK elements option 1</option>
 *    <option value="1">GOV.UK elements option 2</option>
 *    <option value="2">GOV.UK elements option 3</option>
 * </Select>
 * ```
 *
 * Select with hint text & error
 *
 * ```jsx
 * const meta = {
 *   touched: true,
 *   error: 'Example',
 * };
 *
 * <Select
 *    name="group1"
 *    label="This is a label"
 *    hint={[
 *      'This is and example of hintText/description of what we need from you.',
 *    ]}
 *    meta={meta}
 *  >
 *    <option value="0">GOV.UK elements option 1</option>
 *    <option value="1">GOV.UK elements option 2</option>
 *    <option value="2">GOV.UK elements option 3</option>
 * </Select>
 * ```
 *
 * Standalone input with inline label
 *
 * ```jsx
 * import LabelText from '@govuk-react/label-text';
 * import { SelectInput } '@govuk-react/select';
 *
 * <label>
 *    <LabelText>Sort by:&nbsp;
 *      <SelectInput>
 *        <option value="0">People</option>
 *        <option value="1">Animals</option>
 *        <option value="2">Vegetables</option>
 *      </SelectInput>
 *    </LabelText>
 *  </label>
 * ```
 *
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/select
 *
 */
const Select = ({ children, hint, label, meta, input, ...props }: SelectProps) => (
  <Label {...props} error={meta.touched && !!meta.error}>
    <LabelText>{label}</LabelText>
    {hint && <HintText>{hint}</HintText>}
    {meta.touched && meta.error && <ErrorText>{meta.error}</ErrorText>}
    <StyledSelect error={meta.touched && meta.error} {...input}>
      {children}
    </StyledSelect>
  </Label>
);

Select.defaultProps = {
  hint: undefined,
  errorText: undefined,
  input: {},
  meta: {},
};

interface SelectProps {
  hint?: React.ReactNode;
  input?: {
    name?: string;
    onBlur?(...args: unknown[]): unknown;
    onChange?(...args: unknown[]): unknown;
    onFocus?(...args: unknown[]): unknown;
    // eslint-disable-next-line react/forbid-prop-types
    value?: any;
  };
  meta?: {
    active?: boolean;
    dirty?: boolean;
    dirtySinceLastSubmit?: boolean;
    // eslint-disable-next-line react/forbid-prop-types
    error?: any;
    // eslint-disable-next-line react/forbid-prop-types
    initial?: any;
    invalid?: boolean;
    pristine?: boolean;
    // eslint-disable-next-line react/forbid-prop-types
    submitError?: any;
    submitFailed?: boolean;
    submitSucceeded?: boolean;
    touched?: boolean;
    valid?: boolean;
    visited?: boolean;
  };
  children: React.ReactNode;
  label: string;
  errorText?: string;
}

export default Select;
export { StyledSelect as SelectInput };
