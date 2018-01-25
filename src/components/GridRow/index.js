// https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_grid_layout.scss
// https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_layout.scss

import React from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";
import { MEDIA_QUERIES, SITE_WIDTH } from "../../constants/index";

const GridRowInner = glamorous.div({
  margin: "0 -15px 15px",
  width: "100%",
  [MEDIA_QUERIES.LARGESCREEN]: {
    display: "flex",
    maxWidth: SITE_WIDTH
  }
});

const GridRow = ({ children }) => <GridRowInner>{children}</GridRowInner>;

GridRow.propTypes = {
  children: PropTypes.node.isRequired
};

export default GridRow;
