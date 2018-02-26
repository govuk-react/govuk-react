// https://github.com/alphagov/govuk-frontend/tree/master/src/components

import glamorous from "glamorous";
import React from "react";
import { ERROR_COLOUR } from "govuk-colours";
import { FONT_SIZE, MEDIA_QUERIES, NTA_LIGHT } from "../../constants/index";

const GErrorText = glamorous.span({
  display: "block",
  fontFamily: NTA_LIGHT,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  fontWeight: 700,
  textTransform: "none",
  fontSize: FONT_SIZE.SIZE_16,
  lineHeight: "20px",
  color: `${ERROR_COLOUR}`,
  paddingTop: "4px",
  paddingBottom: "2px",
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: FONT_SIZE.SIZE_19,
    lineHeight: "25px"
  }
});

const ErrorText = (props = {}) => <GErrorText {...props} />;
export default ErrorText;
