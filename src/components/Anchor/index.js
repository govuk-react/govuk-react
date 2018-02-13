// TODO INSERT A COMMENT REFERENCE TO EXTERNAL URL IF POSSIBLE

import React from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";

import { BLUE, PURPLE, YELLOW } from "govuk-colours";

const AnchorInner = glamorous.a({
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
});

const Anchor = ({ hyperLink, children, target }) => (
  <AnchorInner href={hyperLink} target={target}>
    {children}
  </AnchorInner>
);

Anchor.defaultProps = {
  target: undefined
};

Anchor.propTypes = {
  children: PropTypes.node.isRequired,
  hyperLink: PropTypes.string.isRequired,
  target: PropTypes.string
};

export default Anchor;
