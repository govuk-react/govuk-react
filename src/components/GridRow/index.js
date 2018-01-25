// INSERT A COMMENT REFERENCE TO EXTERNAL URL IF POSSIBLE

import React from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";
import { MEDIA_QUERIES, SITE_WIDTH } from "../../constants/index";

const GridRowInner = glamorous.div({
  margin: "0 -15px",
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
