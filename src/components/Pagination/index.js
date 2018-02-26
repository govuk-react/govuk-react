// https://govuk-static.herokuapp.com/component-guide/previous_and_next_navigation

import React from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";

const PaginationWrapper = glamorous.ul({
  boxSizing: "border-box",
  display: "flex",
  margin: 0,
  padding: "10px",
  justifyContent: "space-between",
  fontFamily: '"nta", Arial, sans-serif',
  fontWeight: 400,
  textTransform: "none",
  fontSize: "16px",
  lineHeight: "1.25",
  width: "100%"
});

const Pagination = ({ children }) => (
  <PaginationWrapper>{children}</PaginationWrapper>
);

Pagination.propTypes = {
  children: PropTypes.node.isRequired
};

export default Pagination;
