// https://github.com/alphagov/govuk-frontend/tree/master/src/components/select

import React from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";

import * as COLOUR from "govuk-colours";
import { BREAKPOINTS } from "../../constants/index";

import Label from "../label/index";
import LabelText from "../labelText/index";
import ErrorText from "../errorText/index";
import HintText from "../hintText/index";

const mediaQueries = {
  largeScreen: `@media only screen and (min-width: ${BREAKPOINTS.LARGESCREEN})`
};

const Input = glamorous.select(
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
      width: "50%",
      fontSize: "19px",
      lineHeight: "1.31579"
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

const Select = ({ children, hintText, errorText, label }) => (
  <Label errorText={errorText}>
    <LabelText errorText={errorText}>{label}</LabelText>
    {hintText ? <HintText>{hintText}</HintText> : <span />}
    {errorText ? (
      <ErrorText errorText={errorText}>{errorText}</ErrorText>
    ) : (
      <span />
    )}
    <Input errorText={errorText}>{children}</Input>
  </Label>
);

Select.defaultProps = {
  hintText: null,
  errorText: null
};

Select.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  hintText: PropTypes.string,
  errorText: PropTypes.string
};

export default Select;
