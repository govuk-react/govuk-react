// TODO INSERT A COMMENT REFERENCE TO EXTERNAL URL IF POSSIBLE

import React from "react";
import glamorous from "glamorous";
// import { BrowserRouter, Link } from "react-router";
// import PhaseBadge from "../PhaseBadge/index";

const StyledLinkItem = glamorous.span({
  border: "1px solid red"
});

function componentWrapper(child) {
  if (!child.props.child) {
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
