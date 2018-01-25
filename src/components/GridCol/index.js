// INSERT A COMMENT REFERENCE TO EXTERNAL URL IF POSSIBLE

import React from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";
import { MEDIA_QUERIES } from "../../constants/index";

const GridColInner = glamorous.div(
  {
    backgroundColor: "#7DADD3",
    backgroundImage:
      "repeating-linear-gradient(180deg, #7DADD3, #7DADD3 15px, #B7CFE1 15px, #B7CFE1 30px)",
    marginBottom: "0",
    overflow: "hidden",
    textIndent: "-999em",
    border: "4px solid white",
    width: "100%"
  },
  ({ showContent }) => ({
    textIndent: showContent ? "0" : GridColInner.textIndent,
    backgroundColor: showContent ? "" : GridColInner.backgroundColor,
    backgroundImage: showContent ? "" : GridColInner.backgroundImage
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

const GridCol = ({ children }) => <GridColInner>{children}</GridColInner>;

GridCol.propTypes = {
  children: PropTypes.node.isRequired
};

export default GridCol;
