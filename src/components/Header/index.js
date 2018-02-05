// https://govuk-elements.herokuapp.com/typography/#typography-headings
// https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_typography.scss
// https://github.com/alphagov/govuk-frontend/blob/master/src/globals/scss/core/_typography.scss
// https://github.com/alphagov/govuk_elements/blob/master/packages/govuk-elements-sass/public/sass/elements/_elements-typography.scss

import glamorous from "glamorous";
import React, { createElement } from "react";
import PropTypes from "prop-types";

import { MEDIA_QUERIES, NTA_LIGHT } from "../../constants/index";
import { LEVEL_SIZE, FONT_SIZES, LEVEL_TAG } from "../../constants/typography";

const Header = glamorous(({ level, children, ...props }) =>
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

Header.defaultProps = {
  level: 1,
  size: undefined
};

Header.propTypes = {
  level: PropTypes.number,
  size: PropTypes.oneOf(Object.keys(FONT_SIZES))
};

export default Header;

export const H1 = props => <Header level={1} size={LEVEL_SIZE[1]} {...props} />;
export const H2 = props => <Header level={2} size={LEVEL_SIZE[2]} {...props} />;
export const H3 = props => <Header level={3} size={LEVEL_SIZE[3]} {...props} />;
export const H4 = props => <Header level={4} size={LEVEL_SIZE[4]} {...props} />;
export const H5 = props => <Header level={5} size={LEVEL_SIZE[5]} {...props} />;
export const H6 = props => <Header level={6} size={LEVEL_SIZE[6]} {...props} />;
