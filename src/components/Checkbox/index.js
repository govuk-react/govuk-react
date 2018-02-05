// https://github.com/alphagov/govuk-frontend/blob/master/src/components/checkboxes/_checkboxes.scss

import React from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";

import { YELLOW, BLACK } from "govuk-colours";

const MultipleChoice = glamorous.label("multiple-choice", {
  display: "block",
  float: "left",
  clear: "left",
  position: "relative",
  padding: "0 0 0 38px",
  marginBottom: "10px"
});

const Input = glamorous.input({
  position: "absolute",
  cursor: "pointer",
  left: 0,
  top: 0,
  width: "38px",
  height: "38px",
  zIndex: 1,
  margin: 0,
  zoom: 1,
  opacity: 0,
  "[disabled]": {
    cursor: "auto"
  },
  "[disabled] + span": {
    opacity: ".4",
    cursor: "auto",
    pointerEvents: "none"
  },
  ":checked + span::after": {
    opacity: 1
  },
  ":focus + span::before": {
    boxShadow: `0 0 0 4px ${YELLOW}`
  }
});

const Label = glamorous.span({
  fontFamily: '"nta", Arial, sans-serif',
  fontWeight: 400,
  textTransform: "none",
  fontSize: "16px",
  lineHeight: "1.25",
  cursor: "pointer",
  padding: "8px 10px 9px 12px",
  display: "block",
  color: `${BLACK}`,
  "::before": {
    content: " ",
    display: "block",
    border: `2px solid ${BLACK}`,
    background: "transparent",
    width: "34px",
    height: "34px",
    position: "absolute",
    top: 0,
    left: 0
  },
  "::after": {
    content: " ",
    border: "solid",
    borderWidth: "0 0 5px 5px",
    background: "transparent",
    borderTopColor: "transparent",
    width: "17px",
    height: "7px",
    position: "absolute",
    top: "10px",
    left: "8px",
    transform: "rotate(-45deg)",
    zoom: 1,
    opacity: 0
  }
});

const Checkbox = ({ children, inline, ...input }) => (
  <MultipleChoice inline={inline}>
    <Input type="checkbox" {...input} />
    <Label>{children}</Label>
  </MultipleChoice>
);

Checkbox.defaultProps = {
  inline: undefined
};

Checkbox.propTypes = {
  children: PropTypes.node.isRequired,
  inline: PropTypes.bool
};

export default Checkbox;
