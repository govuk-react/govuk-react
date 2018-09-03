import React from 'react';
import PropTypes from 'prop-types';
import Label from '@govuk-react/label';
import Input from '@govuk-react/input';
import LabelText from '@govuk-react/label-text';
import ErrorText from '@govuk-react/error-text';
import HintText from '@govuk-react/hint-text';
import { withWhiteSpace } from '@govuk-react/hoc';

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * <TextField label="Label text" />
 * ```
 *
 * With hint and an example error
 * ```jsx
 * <TextField label="Label text" hint="hint text" meta={{error: "some error information"}} />
 * ```
 *
 * ### References:
 * - https://github.com/alphagov/govuk-frontend/blob/master/src/components/input/_input.scss
 * - https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_forms.scss
 * - https://medium.com/@penx/form-elements-in-presentational-component-packages-a618e9aa7416
 * - https://redux-form.com/7.1.2/docs/api/field.md/#input-props
 * - https://redux-form.com/7.1.2/docs/api/field.md/#meta-props
 */
const TextField = ({
  label, hint, input, meta, ...props
}) => (
  <Label error={meta.touched && meta.error} {...props}>
    <LabelText className="govuk-react--label-text">{label}</LabelText>
    {hint && <HintText className="govuk-react--hint-text">{hint}</HintText>}
    {meta.touched && meta.error && <ErrorText className="govuk-react--error-text">{meta.error}</ErrorText>}
    <Input error={meta.touched && meta.error} {...input} />
  </Label>
);

TextField.propTypes = {
  /**
   * The text label presented to a user
   */
  label: PropTypes.string,
  /**
   * An optional text string to help a user enter form data
   */
  hint: PropTypes.string,
  /**
   * An input object based off https://redux-form.com/7.1.2/docs/api/field.md/#input-props
   */
  input: PropTypes.shape({
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.any,
  }),
  /**
   * A meta object based off https://redux-form.com/7.1.2/docs/api/field.md/#meta-props
   */
  meta: PropTypes.shape({
    active: PropTypes.bool,
    dirty: PropTypes.bool,
    dirtySinceLastSubmit: PropTypes.bool,
    error: PropTypes.any,
    initial: PropTypes.any,
    invalid: PropTypes.bool,
    pristine: PropTypes.bool,
    submitError: PropTypes.any,
    submitFailed: PropTypes.bool,
    submitSucceeded: PropTypes.bool,
    touched: PropTypes.bool,
    valid: PropTypes.bool,
    visited: PropTypes.bool,
  }),
};

TextField.defaultProps = {
  label: undefined,
  hint: undefined,
  input: {
    name: undefined,
    onBlur: undefined,
    onChange: undefined,
    onFocus: undefined,
    value: undefined,
  },
  meta: {
    active: undefined,
    dirty: undefined,
    dirtySinceLastSubmit: undefined,
    error: undefined,
    initial: undefined,
    invalid: undefined,
    pristine: undefined,
    submitError: undefined,
    submitFailed: undefined,
    submitSucceeded: undefined,
    touched: undefined,
    valid: undefined,
    visited: undefined,
  },
};

export default withWhiteSpace({ marginBottom: 0 })(TextField);
