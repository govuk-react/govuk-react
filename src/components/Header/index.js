// https://govuk-elements.herokuapp.com/typography/#typography-headings
// https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_typography.scss
// https://github.com/alphagov/govuk-frontend/blob/master/src/globals/scss/core/_typography.scss
// https://github.com/alphagov/govuk_elements/blob/master/packages/govuk-elements-sass/public/sass/elements/_elements-typography.scss

import glamorous from "glamorous";
import React, { createElement } from "react";
import PropTypes from "prop-types";

import { MEDIA_QUERIES, NTA_LIGHT } from "../../constants/index";
import { LEVEL_SIZE, FONT_SIZES, LEVEL_TAG } from "../../constants/typography";

const GHeader = glamorous(({ level, children, ...props }) =>
  createElement(LEVEL_TAG[level], props, children)
)(
  {
    fontFamily: NTA_LIGHT,
    fontWeight: "bold",
    margin: 0
  },
  ({ level, size = LEVEL_SIZE[level] }) => ({
    fontSize: FONT_SIZES[size].mobile.fontSize,
    lineHeight: FONT_SIZES[size].mobile.lineHeight,
    marginBottom: FONT_SIZES[size].mobile.spacing,
    [MEDIA_QUERIES.LARGESCREEN]: {
      fontSize: FONT_SIZES[size].tablet.fontSize,
      lineHeight: FONT_SIZES[size].tablet.lineHeight,
      marginBottom: FONT_SIZES[size].tablet.spacing
    },
    [MEDIA_QUERIES.PRINT]: {
      fontSize: FONT_SIZES[size].print.fontSize
    }
  })
);

const Header = props => <GHeader {...props} />;

Header.defaultProps = {
  level: 1,
  size: undefined
};

Header.propTypes = {
  level: PropTypes.number,
  size: PropTypes.oneOf(Object.keys(FONT_SIZES))
};

export default Header;
