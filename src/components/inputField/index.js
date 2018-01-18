// https://github.com/alphagov/govuk-frontend/blob/master/src/components/input/_input.scss
// https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_forms.scss

import React from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";

import * as COLOUR from "govuk-colours";
import { BREAKPOINTS, SITE_WIDTH } from "../../constants/index";

const mediaQueries = {
  largeScreen: `@media only screen and (min-width: ${BREAKPOINTS.LARGESCREEN})`
};

const Label = glamorous.label(
  {
    marginBottom: "15px",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    [mediaQueries.largeScreen]: {
      maxWidth: SITE_WIDTH,
      marginBottom: "30px"
    }
  },
  ({ errorText }) => ({
    borderLeft: errorText ? `4px solid ${COLOUR.ERROR_COLOUR}` : "",
    marginRight: errorText ? `15px` : "0",
    paddingLeft: errorText ? `10px` : "0"
  })
);

const LabelText = glamorous.span(
  {
    fontFamily: '"nta", Arial, sans-serif',
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "1.25",
    color: `${COLOUR.BLACK}`,
    paddingBottom: "2px",
    [mediaQueries.largeScreen]: {
      fontSize: "19px",
      lineHeight: "1.31579"
    }
  },
  ({ errorText }) => ({
    fontWeight: errorText ? 700 : LabelText.fontWeight
  })
);

const HintText = glamorous.span({
  fontFamily: '"nta", Arial, sans-serif',
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  fontWeight: 400,
  textTransform: "none",
  fontSize: "16px",
  lineHeight: "1.25",
  color: `${COLOUR.GREY_1}`,
  [mediaQueries.largeScreen]: {
    fontSize: "19px",
    lineHeight: "1.31579"
  }
});

const ErrorText = glamorous.span({
  fontFamily: '"nta", Arial, sans-serif',
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  fontWeight: 700,
  textTransform: "none",
  fontSize: "16px",
  lineHeight: "1.25",
  color: `${COLOUR.ERROR_COLOUR}`,
  paddingTop: "4px",
  paddingBottom: "2px",
  [mediaQueries.largeScreen]: {
    fontSize: "19px",
    lineHeight: "1.31579"
  }
});

const Input = glamorous.input(
  {
    boxSizing: "border-box",
    fontFamily: '"nta", Arial, sans-serif',
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    fontWeight: 400,
    textTransform: "none",
    fontSize: "16px",
    lineHeight: "1.25",
    width: "100%",
    padding: "5px 4px 4px",
    border: `2px solid ${COLOUR.BLACK}`,
    [mediaQueries.largeScreen]: {
      width: "50%"
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
