// https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/input/_input.scss
// https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_forms.scss

import React from 'react';
import PropTypes from 'prop-types';
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
 *    name="group1"
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
 *    name="group1"
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
const InputField = ({ meta, children, hint, input, ...props }) => (
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

InputField.propTypes = {
  hint: PropTypes.node,
  input: PropTypes.shape({
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    // eslint-disable-next-line react/forbid-prop-types
    value: PropTypes.any,
  }),
  meta: PropTypes.shape({
    active: PropTypes.bool,
    dirty: PropTypes.bool,
    dirtySinceLastSubmit: PropTypes.bool,
    // eslint-disable-next-line react/forbid-prop-types
    error: PropTypes.any,
    // eslint-disable-next-line react/forbid-prop-types
    initial: PropTypes.any,
    invalid: PropTypes.bool,
    pristine: PropTypes.bool,
    // eslint-disable-next-line react/forbid-prop-types
    submitError: PropTypes.any,
    submitFailed: PropTypes.bool,
    submitSucceeded: PropTypes.bool,
    touched: PropTypes.bool,
    valid: PropTypes.bool,
    visited: PropTypes.bool,
  }),
  children: PropTypes.node.isRequired,
};

/** Component is not exported withWhitespace because Label
 *  is also exported withWhitespace and therefore takes precedence.
 */
export default InputField;
