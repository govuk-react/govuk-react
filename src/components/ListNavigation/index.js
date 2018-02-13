// https://govuk-static.herokuapp.com/component-guide/government_navigation

import React from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";

const ListNavigationInner = glamorous.ul({
  boxSizing: "border-box",
  fontFamily: '"nta", Arial, sans-serif',
  fontWeight: 400,
  textTransform: "none",
  fontSize: "16px",
  lineHeight: "1.25",
  width: "100%"
});

const ListItem = glamorous.li({
  listStyleType: "bullet",
  marginBottom: "5px"
});

const ListNavigation = ({ children }) => (
  <ListNavigationInner>
    {children.length && children.map ? (
      children.map((child, i) => (
        <ListItem key={child.key || i}>{child}</ListItem>
      ))
    ) : (
      <ListItem>{children}</ListItem>
    )}
  </ListNavigationInner>
);

ListNavigation.propTypes = {
  children: PropTypes.node.isRequired
};

export default ListNavigation;
