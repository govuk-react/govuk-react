// https://github.com/alphagov/govuk-frontend/blob/master/src/components/input/_input.scss
// https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_forms.scss

import React from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";
import { YELLOW } from "govuk-colours";

import Label from "../label/index";
import LabelText from "../labelText/index";
import ErrorText from "../errorText/index";
import HintText from "../hintText/index";

import { FONT_SIZE, NTA_LIGHT, MEDIA_QUERIES } from "../../constants/index";

const Input = glamorous.input({
  boxSizing: "border-box",
  fontFamily: NTA_LIGHT,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  fontWeight: 400,
  textTransform: "none",
  fontSize: FONT_SIZE.SIZE_14,
  width: "100%",
  padding: "5px 4px 4px",
  [MEDIA_QUERIES.LARGESCREEN]: {
    width: "50%"
  },
  "[disabled]": {
    cursor: "auto"
  }
});

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
