// https://github.com/alphagov/govuk-frontend/blob/master/src/components/input/_input.scss
// https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_forms.scss

import React from "react";
import glamorous from "glamorous";
import PropTypes from "prop-types";

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
    display: "block",
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

const Input = glamorous.input({
  boxSizing: "border-box",
  fontFamily: '"nta", Arial, sans-serif',
  fontWeight: 400,
  textTransform: "none",
  fontSize: "small",
  lineHeight: "inherit",
  width: "100%",
  padding: "5px 4px 4px",
  border: `0`,
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
