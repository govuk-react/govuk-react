// https://github.com/alphagov/govuk-frontend/blob/master/src/components/input/_input.scss
// https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_forms.scss

import React from "react";
import PropTypes from "prop-types";

import Label from "../label/index";
import LabelText from "../labelText/index";
import ErrorText from "../errorText/index";
import HintText from "../hintText/index";
import Input from "../input/index";

const InputField = ({ children, errorText, hintText }) => (
  <Label errorText={errorText}>
    <LabelText errorText={errorText}>{children}</LabelText>
    {hintText ? <HintText>{hintText}</HintText> : <span />}
    {errorText ? (
      <ErrorText errorText={errorText}>{errorText}</ErrorText>
    ) : (
      <span />
    )}
    <Input type="text" errorText={errorText} />
  </Label>
);

InputField.defaultProps = {
  hintText: null,
  errorText: null
};

InputField.propTypes = {
  children: PropTypes.node.isRequired,
  hintText: PropTypes.string,
  errorText: PropTypes.string
};

export default InputField;
