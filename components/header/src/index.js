import styled from 'react-emotion';
import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import {
  HEADING_SIZES,
  LEVEL_SIZE,
  LEVEL_TAG,
  MEDIA_QUERIES,
  TYPOGRAPHY_SCALE,
} from '@govuk-react/constants';
import { govukFont } from '@govuk-react/lib';
import { withWhiteSpace } from '@govuk-react/hoc';

// use `size` only with string for XLARGE, SMALL etc and number for px size
// so if `size` is a string, we find a numeric size based off `HEADING_SIZES`
// but if `size` is a number we just send through that number

const StyledHeader = styled(({
  level, children, size, ...props
}) =>
  createElement(LEVEL_TAG[level], props, children))(
  // TODO add in govuk-text-colour
  ({ level, size = LEVEL_SIZE[level] }) => {
    const actualSize = Number.isNaN(Number(size)) ? HEADING_SIZES[size] : size;

    if (!actualSize) {
      throw Error(`Unknown size ${size} used for header.`);
    }

    return Object.assign(
      {},
      govukFont({ size: actualSize, weight: 'bold' }),
    );
  },
  {
    display: 'block',
    marginTop: 0,
  },
  ({ level, size = LEVEL_SIZE[level] }) => {
    const actualSize = Number.isNaN(Number(size)) ? HEADING_SIZES[size] : size;
    const scaleInfo = TYPOGRAPHY_SCALE[actualSize];

    return Object.assign(
      {},
      {
        marginBottom: scaleInfo.mobile.spacing,
        [MEDIA_QUERIES.TABLET]: {
          marginBottom: scaleInfo.tablet.spacing,
        },
      },
    );
  },
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
 * <Header level={6} size={80}>
 *   h6 with font size 80
 * </Header>
 * <Header level={2} size="SMALL">
 *   h2 with SMALL size
 * </Header>
 * <H3 size="LARGE">h3 with LARGE size</H3>
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
   * Visual size level, accepts:
   *    `XLARGE`, `LARGE`, `MEDIUM`, `SMALL`, 'XL', 'L', 'M', 'S'
   *    or a numeric size that fits in the GDS font scale list
   */
  size: PropTypes.oneOf([...Object.keys(HEADING_SIZES), ...Object.keys(TYPOGRAPHY_SCALE)]),
};

export default withWhiteSpace()(Header);

export { H1, H2, H3, H4, H5, H6 } from './presets';
