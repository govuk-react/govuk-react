// https://github.com/alphagov/govuk-frontend/tree/master/src/components/file-upload

import React from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";

import Label from "../Label/index";
import LabelText from "../LabelText/index";
import ErrorText from "../ErrorText/index";
import HintText from "../HintText/index";

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
