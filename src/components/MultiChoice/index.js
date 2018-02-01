// TODO INSERT A COMMENT REFERENCE TO EXTERNAL URL IF POSSIBLE

import React from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";
import { ERROR_COLOUR } from "govuk-colours";

import LabelText from "../LabelText/index";
import ErrorText from "../ErrorText/index";
import HintText from "../HintText/index";
import { MEDIA_QUERIES, SITE_WIDTH, SPACING } from "../../constants/index";

const FieldSet = glamorous.fieldset(
  {
    display: "flex",
    flexDirection: "column",
    padding: 0,
    margin: 0,
    border: 0,
    boxSizing: "border-box",
    width: "100%",
    [MEDIA_QUERIES.LARGESCREEN]: {
      maxWidth: SITE_WIDTH
    }
  },
  ({ error }) => ({
    borderLeft: error ? `4px solid ${ERROR_COLOUR}` : "",
    marginRight: error ? SPACING.SCALE_3 : 0,
    paddingLeft: error ? SPACING.SCALE_2 : 0
  })
);

const MultiChoice = ({ meta, label, children, hint }) => (
  <FieldSet error={meta.touched}>
    <LabelText>{label}</LabelText>
    {hint && <HintText>{hint}</HintText>}
    {meta.touched && <ErrorText>{meta.error}</ErrorText>}
    {children}
  </FieldSet>
);

MultiChoice.defaultProps = {
  hint: undefined,
  meta: {}
};

MultiChoice.propTypes = {
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
  label: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  hint: PropTypes.string
};

export default MultiChoice;
