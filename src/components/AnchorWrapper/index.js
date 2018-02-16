// https://govuk-elements.herokuapp.com/typography/

import React from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";
import { BLUE, PURPLE, YELLOW } from "govuk-colours";

const AnchorInner = glamorous.span({
  "> a": {
    color: BLUE,
    padding: "3px",
    margin: "-3px",
    outlineColor: "transparent",
    display: "inline-block",
    textDecoration: "underline",
    ":focus": {
      backgroundColor: YELLOW,
      outline: `3px solid ${YELLOW}`
    },
    ":visited": {
      color: PURPLE
    }
  }
});

const AnchorWrapper = ({ children }) => <AnchorInner>{children}</AnchorInner>;

AnchorWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default AnchorWrapper;
