// https://github.com/alphagov/govuk-frontend/tree/master/src/components/select

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

const Input = glamorous.select(
  {
    boxSizing: "border-box",
    fontFamily: '"nta", Arial, sans-serif',
    fontWeight: 400,
    textTransform: "none",
    fontSize: "16px",
    lineHeight: "1.25",
    width: "100%",
    height: "33px",
    padding: "5px 4px 4px",
    border: `2px solid ${COLOUR.BLACK}`,
    [mediaQueries.largeScreen]: {
      width: "50%",
      height: "38px",
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

const Select = ({ children, hint, label, meta, input }) => (
  <Label error={meta.touched && meta.error}>
    <LabelText>{label}</LabelText>
    {hint && <HintText>{hint}</HintText>}
    {meta.touched && meta.error && <ErrorText>{meta.error}</ErrorText>}
    <Input {...input}>{children}</Input>
  </Label>
);

Select.defaultProps = {
  hint: undefined,
  errorText: null,
  input: {},
  meta: {}
};

Select.propTypes = {
  hint: PropTypes.string,
  input: PropTypes.shape({
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.any
  }),
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
  label: PropTypes.string.isRequired,
  errorText: PropTypes.string
};

export default Select;
