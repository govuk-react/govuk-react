// https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/input/_input.scss
// https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_forms.scss
import type { LabelProps } from '@govuk-react/label';
import type { InputProps } from '@govuk-react/input';

import React from 'react';
import Label from '@govuk-react/label';
import LabelText from '@govuk-react/label-text';
import ErrorText from '@govuk-react/error-text';
import HintText from '@govuk-react/hint-text';
import Input from '@govuk-react/input';

/**
 *
 * ### Usage
 *
 * Simple
 *
 * ```jsx
 * import { InputField } from 'govuk-react'
 *
 * <InputField name="group0">National Insurance number</InputField>
 * ```
 *
 * Input with hint text
 *
 * ```jsx
 * <InputField
 *    input={{ name: 'group1' }}
 *    hint={[
 *      'It’s on your National Insurance card, benefit letter, payslip or P60.',
 *      <br />,
 *      'For example, ‘QQ 12 34 56 C’.',
 *    ]}
 *  >
 *    National Insurance number
 *  </InputField>
 * ```
 *
 * Input with hint text & error
 *
 * ```jsx
 *  const meta = {
 *    touched: true,
 *    error: 'Example',
 *  };
 *
 *  <InputField
 *    input={{ name: 'group1' }}
 *    hint={[
 *      'It’s on your National Insurance card, benefit letter, payslip or P60.',
 *      <br />,
 *      'For example, ‘QQ 12 34 56 C’.',
 *    ]}
 *    meta={meta}
 *  >
 *    National Insurance number
 *  </InputField>
 * ```
 *
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/input/_input.scss
 * - https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_forms.scss
 */
const InputField = ({ meta, children, hint, input, ...props }: InputFieldProps) => (
  <Label {...props} error={meta.touched && !!meta.error}>
    <LabelText>{children}</LabelText>
    {hint && <HintText>{hint}</HintText>}
    {meta.touched && meta.error && <ErrorText>{meta.error}</ErrorText>}
    <Input error={meta.touched && !!meta.error} {...input} />
  </Label>
);

InputField.defaultProps = {
  hint: undefined,
  input: {},
  meta: {},
};

interface InputFieldProps extends LabelProps {
  hint?: React.ReactNode;
  input?: InputProps;
  meta?: {
    active?: boolean;
    dirty?: boolean;
    dirtySinceLastSubmit?: boolean;
    error?: any;
    initial?: any;
    invalid?: boolean;
    pristine?: boolean;
    submitError?: any;
    submitFailed?: boolean;
    submitSucceeded?: boolean;
    touched?: boolean;
    valid?: boolean;
    visited?: boolean;
  };
  children: React.ReactNode;
}

/** Component is not exported withWhitespace because Label
 *  is also exported withWhitespace and therefore takes precedence.
 */
export default InputField;
