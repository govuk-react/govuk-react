// https://github.com/alphagov/govuk-frontend/tree/master/src/components/
import React from "react";
import glamorous from "glamorous";
import PropTypes from "prop-types";

import { BLACK, YELLOW, ERROR_COLOUR } from "govuk-colours";
import { FONT_SIZE, MEDIA_QUERIES, NTA_LIGHT } from "../../constants/index";

const InputText = glamorous.input(
  {
    boxSizing: "border-box",
    fontFamily: NTA_LIGHT,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    fontWeight: 400,
    textTransform: "none",
    fontSize: FONT_SIZE.SIZE_16,
    lineHeight: "20px",
    width: "100%",
    padding: "5px 4px 4px",
    border: `2px solid ${BLACK}`,
    [MEDIA_QUERIES.LARGESCREEN]: {
      width: "50%",
      fontSize: FONT_SIZE.SIZE_19,
      lineHeight: "25px"
    },
    "[disabled]": {
      cursor: "auto"
    },
    ":focus": {
      outline: `3px solid ${YELLOW}`,
      outlineOffset: 0
    }
  },
  ({ errorText }) => ({
    border: errorText ? `4px solid ${ERROR_COLOUR}` : `2px solid ${BLACK}`
  })
);

const Input = ({ value, onChange }) => (
  <InputText type="text" value={value} onChange={onChange} />
);

Input.defaultProps = {
  value: undefined,
  onChange: null
};

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default Input;
