// TODO INSERT A COMMENT REFERENCE TO EXTERNAL URL IF POSSIBLE

import React from "react";
import glamorous from "glamorous";
import { BLUE, PURPLE, YELLOW } from "govuk-colours";

const StyledLinkItem = glamorous.span({
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

function componentWrapper(child) {
  if (!child.props.component) {
    return (
      <a href={child.props.hyperLink} target={child.props.target}>
        {child.props.children}
      </a>
    );
  }

  return child;
}

const StyledLink = ({ ...props }) => (
  <StyledLinkItem>{componentWrapper({ props })}</StyledLinkItem>
);

export default StyledLink;
