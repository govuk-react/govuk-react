import styled from 'react-emotion';
import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import {
  MEDIA_QUERIES,
  NTA_LIGHT,
  LEVEL_SIZE,
  FONT_SIZES,
  LEVEL_TAG,
} from '@govuk-react/constants';
import { withWhiteSpace } from '@govuk-react/hoc';

const StyledHeader = styled(({ level, children, ...props }) =>
  createElement(LEVEL_TAG[level], props, children))(
  {
    fontFamily: NTA_LIGHT,
    fontWeight: 'bold',
    margin: 0,
  },
  ({ level, size = LEVEL_SIZE[level] }) => ({
    fontSize: FONT_SIZES[size].mobile.fontSize,
    lineHeight: FONT_SIZES[size].mobile.lineHeight,
    marginBottom: FONT_SIZES[size].mobile.spacing,
    [MEDIA_QUERIES.LARGESCREEN]: {
      fontSize: FONT_SIZES[size].tablet.fontSize,
      lineHeight: FONT_SIZES[size].tablet.lineHeight,
      marginBottom: FONT_SIZES[size].tablet.spacing,
    },
    [MEDIA_QUERIES.PRINT]: {
      fontSize: FONT_SIZES[size].print.fontSize,
    },
  }),
);

/**
 *
 * ### Usage
 *
 *
 * Simple
 * ```jsx
 * <Header level={1}>Heading text</Header>
 * ```
 *
 * Using shortcuts
 * ```jsx
 * import { H1, H2, H3, H4, H5, H6 } from "@govuk-react/header";
 *
 * <H1>h1</H1>
 * <H2>h2</H2>
 * <H3>h3</H3>
 * <H4>h4</H4>
 * <H5>h5</H5>
 * <H6>h6</H6>
 * ```
 *
 * Differing sizes
 * ```jsx
 * <Header level={6} size="XXLARGE">
 *   h6 with XXLARGE style
 * </Header>
 * <Header level={2} size="XSMALL">
 *   h2 with XSMALL style
 * </Header>
 * <H3 size="LARGE">h3 with LARGE style</H3>
 * ```
 *
 * Props pass through
 * ```jsx
 * <Header onClick={() => { console.log('clicked'); }}>Click me</Header>
 * ```
 *
 * ### References:
 * - https://govuk-elements.herokuapp.com/typography/#typography-headings
 * - https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_typography.scss
 * - https://github.com/alphagov/govuk-frontend/blob/master/src/globals/scss/core/_typography.scss
 * - https://github.com/alphagov/govuk_elements/blob/master/packages/govuk-elements-sass/public/sass/elements/_elements-typography.scss
 */
const Header = props => <StyledHeader {...props} />;

Header.defaultProps = {
  level: 1,
  size: undefined,
};

Header.propTypes = {
  /**
   * Semantic heading level value between 1 and 6
   */
  level: PropTypes.number,
  /**
   * Visual size level, accepts   `XLARGE`, `LARGE`, `MEDIUM`, `SMALL`, `XSMALL`
   */
  size: PropTypes.oneOf(Object.keys(FONT_SIZES)),
};

export default withWhiteSpace()(Header);

export { H1, H2, H3, H4, H5, H6 } from './presets';
