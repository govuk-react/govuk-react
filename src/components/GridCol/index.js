// https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_grid_layout.scss
// https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_layout.scss

import React from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";
import { GUTTER_HALF, MEDIA_QUERIES, SPACING } from "../../constants/index";

const GridColInner = glamorous.div(
  {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: "transparent",
    backgroundImage: "none",
    margin: 0,
    marginBottom: SPACING.SCALE_3,
    textIndent: "0",
    boxSize: "border-box",
    [MEDIA_QUERIES.LARGESCREEN]: {
      width: "100%",
      margin: `0 ${GUTTER_HALF}`,
      ":first-child": {
        marginLeft: 0
      },
      ":last-child": {
        marginRight: 0
      }
    }
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
  }),
  ({ noFlex }) => ({
    display: noFlex ? "block" : GridColInner.display,
    flexDirection: noFlex ? "unset" : GridColInner.flexDirection,
    alignItems: noFlex ? "unset" : GridColInner.alignItems
  })
);

const GridCol = ({ children, ...props }) => (
  <GridColInner {...props}>{children}</GridColInner>
);

GridCol.defaultProps = {
  children: undefined
};

GridCol.propTypes = {
  children: PropTypes.node
};

export default GridCol;
