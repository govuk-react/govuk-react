// https://github.com/alphagov/govuk-frontend/blob/master/src/components/input/_input.scss
// https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_forms.scss

import React from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";

import * as COLOUR from "govuk-colours";
import { FONT_SIZE, MEDIA_QUERIES, NTA_LIGHT } from "../../constants/index";

import LabelText from "../labelText/index";
import ErrorText from "../errorText/index";
import HintText from "../hintText/index";
import Label from "../label/index";

const Input = glamorous.input(
  {
    boxSizing: "border-box",
    fontFamily: NTA_LIGHT,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    fontWeight: 400,
    textTransform: "none",
    fontSize: FONT_SIZE.SIZE_16,
    lineHeight: "20px",
    width: "100%",
    padding: "5px 4px 4px",
    border: `2px solid ${COLOUR.BLACK}`,
    [MEDIA_QUERIES.LARGESCREEN]: {
      width: "50%",
      fontSize: FONT_SIZE.SIZE_19,
      lineHeight: "25px"
    },
    "[disabled]": {
      cursor: "auto"
    },
    ":focus": {
      outline: `3px solid ${COLOUR.YELLOW}`,
      outlineOffset: 0
    }
  },
  ({ errorText }) => ({
    border: errorText
      ? `4px solid ${COLOUR.ERROR_COLOUR}`
      : `2px solid ${COLOUR.BLACK}`
  })
);

const InputField = ({ children, errorText, hintText }) => (
  <Label errorText={errorText}>
    <LabelText errorText={errorText}>{children}</LabelText>
    <HintText>{hintText}</HintText>
    <ErrorText errorText={errorText}>{errorText}</ErrorText>
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
