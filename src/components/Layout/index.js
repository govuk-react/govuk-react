// https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_grid_layout.scss
// https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_layout.scss

import React from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";
import { BREAKPOINTS, MEDIA_QUERIES } from "../../constants/index";

const LayoutInner = glamorous.div({
  overflow: "hidden",
  padding: "20px",
  border: "1px solid #ccc",
  minWidth: BREAKPOINTS.SMALLSCREEN,
  [MEDIA_QUERIES.LARGESCREEN]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
});

const Layout = ({ children }) => <LayoutInner>{children}</LayoutInner>;

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
