// TODO INSERT A COMMENT REFERENCE TO EXTERNAL URL IF POSSIBLE

import React from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";
import { BLUE, WHITE } from "govuk-colours";
import {
  FONT_SIZE,
  LINE_HEIGHT,
  MEDIA_QUERIES,
  NTA_LIGHT
} from "../../constants/index";

const PhaseTagInner = glamorous.p({
  borderBottom: "1px solid #bfc1c3",
  boxSizing: "border-box",
  paddingBottom: "10px",
  fontFamily: NTA_LIGHT,
  fontWeight: 400,
  textTransform: "none",
  fontSize: FONT_SIZE.SIZE_14,
  lineHeight: LINE_HEIGHT.SIZE_14,
  width: "100%",
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: FONT_SIZE.SIZE_16,
    lineHeight: LINE_HEIGHT.SIZE_16
  },
  "> a": {
    color: BLUE
  }
});

const Phase = glamorous.strong({
  display: "inline-block",
  margin: "0 8px 0 0",
  padding: "2px 5px",
  fontFamily: NTA_LIGHT,
  fontWeight: 700,
  fontSize: FONT_SIZE.SIZE_14,
  lineHeight: LINE_HEIGHT.SIZE_14,
  textTransform: "uppercase",
  letterSpacing: "1px",
  textDecoration: "none",
  color: WHITE,
  backgroundColor: BLUE,
  WebkitFontMmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: FONT_SIZE.SIZE_16,
    lineHeight: LINE_HEIGHT.SIZE_16,
    paddingBottom: 0
  }
});

const PhaseTag = ({ level, children }) => (
  <PhaseTagInner>
    <Phase>{level}</Phase>
    {children}
  </PhaseTagInner>
);

PhaseTag.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.string.isRequired
};

export default PhaseTag;
