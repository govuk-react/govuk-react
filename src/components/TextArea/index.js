// https://github.com/alphagov/govuk-frontend/tree/master/src/components/textarea

import React from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";

import * as COLOUR from "govuk-colours";
import { BREAKPOINTS } from "../../constants/index";

import Label from "../Label/index";
import LabelText from "../LabelText/index";
import ErrorText from "../ErrorText/index";
import HintText from "../HintText/index";

const mediaQueries = {
  largeScreen: `@media only screen and (min-width: ${BREAKPOINTS.LARGESCREEN})`
};

const TextareaField = glamorous.textarea(
  {
    boxSizing: "border-box",
    fontFamily: '"nta", Arial, sans-serif',
    fontWeight: 400,
    textTransform: "none",
    fontSize: "16px",
    lineHeight: "1.25",
    width: "100%",
    padding: "5px 4px 4px",
    border: `2px solid ${COLOUR.BLACK}`,
    [mediaQueries.largeScreen]: {
      width: "75%"
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

const TextArea = ({ children, hintText, errorText }) => (
  <Label errorText={errorText}>
    <LabelText errorText={errorText}>{children}</LabelText>
    {hintText ? <HintText>{hintText}</HintText> : <span />}
    {errorText ? (
      <ErrorText errorText={errorText}>{errorText}</ErrorText>
    ) : (
      <span />
    )}
    <TextareaField type="text" rows="5" errorText={errorText} />
  </Label>
);

TextArea.defaultProps = {
  hintText: null,
  errorText: null
};

TextArea.propTypes = {
  children: PropTypes.node.isRequired,
  hintText: PropTypes.string,
  errorText: PropTypes.string
};

export default TextArea;
