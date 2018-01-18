// References:
// https://govuk-elements.herokuapp.com/buttons/
//
// https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/design-patterns/_buttons.scss
// https://github.com/alphagov/govuk-frontend/blob/master/src/components/button/_button.scss
// https://github.com/alphagov/govuk_elements/blob/master/packages/govuk-elements-sass/public/sass/elements/_buttons.scss

import React from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";
import { BLACK, YELLOW } from "govuk-colours";

// const Button
const Anchor = glamorous.button({
  fontFamily: "'nta', Arial, sans-serif",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "16px",
  display: "inline-block",
  position: "relative",
  marginTop: "15px",
  marginBottom: "15px",
  paddingLeft: "14px",
  border: 0,
  color: `${BLACK}`,
  borderBottom: `1px solid ${BLACK}`,
  textDecoration: "none",
  "::before": {
    display: "block",
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderColor: "transparent",
    clipPath: "polygon(0% 50%, 100% 100%, 100% 0%)",
    borderWidth: "5px 6px 5px 0",
    borderRightColor: `${BLACK}`,
    content: "''",
    position: "absolute",
    top: "-1px",
    bottom: "1px",
    left: 0,
    margin: "auto"
  },
  ":focus": {
    backgroundColor: `${YELLOW}`,
    outline: `3px solid ${YELLOW}`
  }
});

const BackLink = ({ children, goBack }) => (
  <Anchor onClick={goBack}>{children}</Anchor>
);

BackLink.propTypes = {
  children: PropTypes.node.isRequired,
  goBack: PropTypes.func.isRequired
};

export default BackLink;
