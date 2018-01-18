// https://github.com/alphagov/govuk-frontend/blob/master/src/components/input/_input.scss
// https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_forms.scss

import React from "react";
import glamorous from "glamorous";
import PropTypes from "prop-types";

import { STYLE_DEFAULT } from "../../constants/index";

const Label = glamorous.label(STYLE_DEFAULT.LABEL, ({ errorText }) =>
  STYLE_DEFAULT.LABEL.ERROR(errorText)
);

const LabelText = glamorous.span(STYLE_DEFAULT.LABEL_TEXT, ({ errorText }) =>
  STYLE_DEFAULT.LABEL_TEXT.ERROR(errorText)
);

const HintText = glamorous.span(STYLE_DEFAULT.HINT_TEXT);

const ErrorText = glamorous.span(STYLE_DEFAULT.ERROR_TEXT);

const Input = glamorous.input(STYLE_DEFAULT.INPUT);

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
