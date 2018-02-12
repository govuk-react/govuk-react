// https://github.com/alphagov/govuk-frontend/blob/master/src/components/breadcrumb/_breadcrumb.scss
import React from "react";
import glamorous from "glamorous";
import PropTypes from "prop-types";

import { BLACK, GREY_1, YELLOW } from "govuk-colours";
import { MEDIA_QUERIES } from "../../constants/index";

const BreadcrumbContainer = glamorous.div({
  fontFamily: "nta, Arial, sans-serif",
  fontSize: "14px",
  lineHeight: "16px",
  marginTop: "15px",
  marginBottom: "10px",
  WebkitFontSmoothing: "antialiased",
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: "16px",
    lineHeight: "20px"
  }
});

const BreadcrumbList = glamorous.ul({
  margin: 0,
  padding: 0,
  listStyleType: "none",
  display: "block"
});

const BreadcrumbListItem = glamorous.li({
  position: "relative",
  display: "inline-block",
  whiteSpace: "no-wrap",
  marginBottom: "5px",
  marginLeft: "10px",
  paddingLeft: "15px",
  ":first-child": {
    marginLeft: 0,
    paddingLeft: 0,
    "::before": {
      display: "none"
    }
  },
  "::before": {
    content: " ",
    display: "block",
    position: "absolute",
    top: "-1px",
    bottom: "1px",
    left: "-3.31px",
    width: "7px",
    height: "7px",
    margin: "auto 0",
    transform: "rotate(45deg)",
    border: "solid",
    borderWidth: "1px 1px 0 0",
    borderColor: `${GREY_1}`
  },
  "> a": {
    color: `${BLACK}`,
    textDecoration: "underline",
    ":focus": {
      backgroundColor: `${YELLOW}`,
      outline: `3px solid ${YELLOW}`
    }
  }
});

const Breadcrumb = ({ children }) => (
  <BreadcrumbContainer>
    <BreadcrumbList>
      {children.length && children.map ? (
        children.map((child, i) => (
          <BreadcrumbListItem key={child.key || i}>{child}</BreadcrumbListItem>
        ))
      ) : (
        <BreadcrumbListItem>{children}</BreadcrumbListItem>
      )}
    </BreadcrumbList>
  </BreadcrumbContainer>
);

Breadcrumb.propTypes = {
  children: PropTypes.node.isRequired
};

export default Breadcrumb;
