// https://github.com/alphagov/govuk-frontend/blob/master/src/components/input/_input.scss

import React from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";

import * as COLOUR from "govuk-colours";
import { BREAKPOINTS, SITE_WIDTH } from "../../constants/index";

const mediaQueries = {
  largeScreen: `@media only screen and (min-width: ${BREAKPOINTS.LARGESCREEN})`
};

const InputWrapper = glamorous.label({
  marginBottom: "15px",
  display: "block",
  [mediaQueries.largeScreen]: {
    maxWidth: SITE_WIDTH,
    marginBottom: "30px"
  }
});

const HintText = glamorous.span({
  display: "block",
  color: `${COLOUR.GREY_1}`
});

const Input = glamorous.input({
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

const Label = glamorous.span({
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
});

const InputField = ({ children, ...props }) => (
  <InputWrapper>
    <Label>{children}</Label>
    <Input type="text" {...props} />
  </InputWrapper>
);

InputField.propTypes = {
  children: PropTypes.node.isRequired
};

export { InputField, HintText };
