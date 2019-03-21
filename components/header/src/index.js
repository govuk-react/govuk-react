import styled from 'styled-components';
import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import { HEADING_SIZES, LEVEL_SIZE, LEVEL_TAG, MEDIA_QUERIES, TYPOGRAPHY_SCALE } from '@govuk-react/constants';
import { spacing, typography } from '@govuk-react/lib';
import { deprecate } from '@govuk-react/hoc';

// use `size` only with string for XLARGE, SMALL etc and number for px size
// so if `size` is a string, we find a numeric size based off `HEADING_SIZES`
// but if `size` is a number we just send through that number

const StyledHeader = styled(({ level, children, size, ...props }) => createElement(LEVEL_TAG[level], props, children))(
  typography.textColour,
  ({ level, size = LEVEL_SIZE[level] }) => {
    const actualSize = Number.isNaN(Number(size)) ? HEADING_SIZES[size] : size;

    if (!actualSize) {
      throw Error(`Unknown size ${size} used for header.`);
    }

    return Object.assign({}, typography.font({ size: actualSize, weight: 'bold' }));
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
      }
    );
  },
  spacing.withWhiteSpace()
);

/**
 *
 * ### Usage
 *
 * This component is DEPRECATED.
 *
 * Please use the `Heading` component instead.
 *
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
   *    `XLARGE`, `LARGE`, `MEDIUM`, `SMALL`, `XL`, `L`, `M`, `S`
   *    or a numeric size that fits in the GDS font scale list
   */
  size: PropTypes.oneOf([...Object.keys(HEADING_SIZES), ...Object.keys(TYPOGRAPHY_SCALE)]),
};

export default deprecate(Header, 'please use the Heading component instead');

export { Header as DocumentedHeader };
export { H1, H2, H3, H4, H5, H6 } from './presets';
