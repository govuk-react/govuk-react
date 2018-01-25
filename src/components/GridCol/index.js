// INSERT A COMMENT REFERENCE TO EXTERNAL URL IF POSSIBLE

import React from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";
import { MEDIA_QUERIES } from "../../constants/index";

const GridColInner = glamorous.div(
  {
    backgroundColor: "transparent",
    backgroundImage: "none",
    marginBottom: "0",
    overflow: "hidden",
    textIndent: "0",
    border: "4px solid white",
    width: "100%"
  },
  ({ hideContent }) => ({
    textIndent: hideContent ? "-999em" : GridColInner.textIndent,
    backgroundColor: hideContent ? "#7DADD3" : GridColInner.backgroundColor,
    backgroundImage: hideContent
      ? "repeating-linear-gradient(180deg, #7DADD3, #7DADD3 15px, #B7CFE1 15px, #B7CFE1 30px)"
      : GridColInner.backgroundImage
  }),
  ({ columnOneThird }) => ({
    [MEDIA_QUERIES.LARGESCREEN]: {
      width: columnOneThird ? "33.3333%" : GridColInner.width
    }
  }),
  ({ columnTwoThirds }) => ({
    [MEDIA_QUERIES.LARGESCREEN]: {
      width: columnTwoThirds ? "66.6667%" : GridColInner.width
    }
  }),
  ({ columnOneQuarter }) => ({
    [MEDIA_QUERIES.LARGESCREEN]: {
      width: columnOneQuarter ? "50%" : GridColInner.width
    }
  })
);

const GridCol = ({ children, ...props }) => (
  <GridColInner {...props}>{children}</GridColInner>
);

GridCol.propTypes = {
  children: PropTypes.node.isRequired
};

export default GridCol;
