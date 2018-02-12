// TODO INSERT A COMMENT REFERENCE TO EXTERNAL URL IF POSSIBLE

import React from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";

const betaBannerInner = glamorous.div({
  boxSizing: "border-box",
  fontFamily: '"nta", Arial, sans-serif',
  fontWeight: 400,
  textTransform: "none",
  fontSize: "16px",
  lineHeight: "1.25",
  width: "100%"
});

const BetaBanner = ({ children }) => (
  <betaBannerInner>{children}</betaBannerInner>
);

BetaBanner.propTypes = {
  children: PropTypes.node.isRequired
};

export default BetaBanner;
