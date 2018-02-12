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

const FileUpload = ({ meta, children, hint, acceptedFormats }) => (
  <Label error={meta.error}>
    <LabelText error={meta.error}>{children}</LabelText>
    {hint && <HintText>{hint}</HintText>}
    {meta.touched && meta.error && <ErrorText>{meta.error}</ErrorText>}
    <Input type="file" accept={acceptedFormats} error={meta.error} />
  </Label>
);

FileUpload.defaultProps = {
  hint: null,
  meta: {},
  acceptedFormats: null
};

FileUpload.propTypes = {
  hint: PropTypes.string,
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
  children: PropTypes.node.isRequired,
  acceptedFormats: PropTypes.string
};

export default FileUpload;
