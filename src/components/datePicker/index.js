// https://github.com/alphagov/govuk-frontend/blob/master/src/components/input/_input.scss
// https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_forms.scss

import React from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";
import { BLACK, YELLOW, ERROR_COLOUR } from "govuk-colours";
import {
  FONT_SIZE,
  MEDIA_QUERIES,
  NTA_LIGHT,
  SPACING
} from "../../constants/index";

// import Label from "../label/index";
import LabelText from "../labelText/index";
import ErrorText from "../errorText/index";
import HintText from "../hintText/index";
// import Input from "../input/index";

const Label = glamorous.div(
  {
    display: "flex",
    flexDirection: "column"
  },
  ({ errorText }) => ({
    borderLeft: errorText ? `4px solid ${ERROR_COLOUR}` : "",
    marginRight: errorText ? SPACING.SCALE_3 : 0,
    paddingLeft: errorText ? SPACING.SCALE_2 : 0
  })
);

const Input = glamorous.input(
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

const ListParent = glamorous.div({
  fontFamily: NTA_LIGHT,
  display: "flex",
  "> label": {
    display: "flex",
    flexDirection: "column",
    width: "50px",
    marginRight: "20px",
    marginBottom: 0,
    ".year": {
      width: "70px"
    }
  }
});

const DatePicker = ({ children, ...props }) => (
  <Label errorText={props.errorText}>
    <LabelText errorText={props.errorText}>{children}</LabelText>
    {props.hintText ? <HintText>{props.hintText}</HintText> : <span />}
    {props.errorText ? (
      <ErrorText errorText={props.errorText}>{props.errorText}</ErrorText>
    ) : (
      <span />
    )}
    <ListParent>
      <label>
        <span>Day</span>
        <Input type="text" errorText={props.errorText} />
      </label>
      <label>
        <span>Month</span>
        <Input type="text" errorText={props.errorText} />
      </label>
      <label className="year">
        <span>Year</span>
        <Input type="text" errorText={props.errorText} />
      </label>
    </ListParent>
  </Label>
);

DatePicker.defaultProps = {
  hintText: null,
  errorText: null
};

DatePicker.propTypes = {
  children: PropTypes.node.isRequired,
  hintText: PropTypes.string,
  errorText: PropTypes.string
};

export default DatePicker;
