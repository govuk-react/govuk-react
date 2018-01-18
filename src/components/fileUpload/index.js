// https://github.com/alphagov/govuk-frontend/blob/master/src/components/input/_input.scss
// https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_forms.scss

import React from "react";
import PropTypes from "prop-types";

import Label from "../label/index";
import LabelText from "../labelText/index";
import ErrorText from "../errorText/index";
import HintText from "../hintText/index";
import Input from "../input/index";

const FileUpload = ({ children, errorText, hintText, acceptedFormats }) => (
  <Label errorText={errorText}>
    <LabelText errorText={errorText}>{children}</LabelText>
    <HintText>{hintText}</HintText>
    <ErrorText>{errorText}</ErrorText>
    <Input type="file" accept={acceptedFormats} errorText={errorText} />
  </Label>
);

FileUpload.defaultProps = {
  hintText: null,
  errorText: null,
  acceptedFormats: null
};

FileUpload.propTypes = {
  children: PropTypes.node.isRequired,
  hintText: PropTypes.string,
  errorText: PropTypes.string,
  acceptedFormats: PropTypes.string
};

export default FileUpload;
