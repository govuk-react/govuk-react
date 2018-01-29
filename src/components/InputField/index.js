// https://github.com/alphagov/govuk-frontend/blob/master/src/components/input/_input.scss
// https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_forms.scss

import React from "react";
import PropTypes from "prop-types";

import Label from "../Label/index";
import LabelText from "../LabelText/index";
import ErrorText from "../ErrorText/index";
import HintText from "../HintText/index";
import Input from "../Input/index";

const InputField = props => (
  <Label error={props.meta.touched && props.meta.error}>
    <LabelText>{props.children}</LabelText>
    {props.hint && <HintText>{props.hint}</HintText>}
    {props.meta.touched &&
      props.meta.error && <ErrorText>{props.meta.error}</ErrorText>}
    <Input type="text" {...props.input} />
  </Label>
);

InputField.defaultProps = {
  hint: null
};

InputField.propTypes = {
  hint: PropTypes.string,
  input: PropTypes.shape({
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.any
  }).isRequired,
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
  }).isRequired,
  children: PropTypes.node.isRequired
};

export default InputField;
