// https://github.com/alphagov/govuk-frontend/blob/master/src/components/input/_input.scss
// https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_forms.scss

import React from "react";
import PropTypes from "prop-types";

import Label from "../Label/index";
import LabelText from "../LabelText/index";
import ErrorText from "../ErrorText/index";
import HintText from "../HintText/index";
import Input from "../Input/index";

const InputField = ({ meta, children, hint, input }) => (
  <Label error={meta.touched && meta.error}>
    <LabelText>{children}</LabelText>
    {hint && <HintText>{hint}</HintText>}
    {meta.touched && meta.error && <ErrorText>{meta.error}</ErrorText>}
    <Input {...input} />
  </Label>
);

InputField.defaultProps = {
  hint: null,
  input: {},
  meta: {}
};

InputField.propTypes = {
  hint: PropTypes.string,
  input: PropTypes.shape({
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.any
  }),
  meta: PropTypes.shape({
    active: PropTypes.bool,
    dirty: PropTypes.bool,
    dirtySinceLastSubmit: PropTypes.bool,
    error: PropTypes.any,
    initial: PropTypes.bool,
    invalid: PropTypes.bool,
    pristine: PropTypes.bool,
    submitError: PropTypes.any,
    submitFailed: PropTypes.bool,
    submitSucceeded: PropTypes.bool,
    touched: PropTypes.bool,
    valid: PropTypes.bool,
    visited: PropTypes.bool
  }),
  children: PropTypes.node.isRequired
};

export default InputField;
