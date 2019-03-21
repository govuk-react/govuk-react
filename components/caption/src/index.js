import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { SECONDARY_TEXT_COLOUR } from 'govuk-colours';
import { spacing, typography } from '@govuk-react/lib';
import { CAPTION_SIZES, MEDIA_QUERIES, SPACING_POINTS, TYPOGRAPHY_SCALE } from '@govuk-react/constants';

const StyledCaption = styled('span')(
  ({ size }) => {
    const actualSize = Number.isNaN(Number(size)) ? CAPTION_SIZES[size] : size;

    if (!actualSize) {
      throw Error(`Unknown size ${size} used for header.`);
    }

    return typography.font({ size: actualSize });
  },
  ({ size }) => {
    const actualSize = Number.isNaN(Number(size)) ? CAPTION_SIZES[size] : size;

    // bottom margin - hard-coded values because they're a bit odd
    const marginStyle = actualSize > 19 ? { marginBottom: SPACING_POINTS[1] } : undefined;
    const marginResponsiveStyle = actualSize === 24 ? { [MEDIA_QUERIES.TABLET]: { marginBottom: 0 } } : undefined;

    return {
      ...marginStyle,
      ...marginResponsiveStyle,
    };
  },
  {
    display: 'block',
    color: SECONDARY_TEXT_COLOUR,
  },
  spacing.withWhiteSpace()
);

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * <Caption>Caption heading text</Caption>
 * ```
 *
 * With another header
 * ```jsx
 * import { H1 } from '@govuk-react/heading';
 *
 * <Caption size="XL">Supporting header text</Caption>
 * <H1>Main header text</H1>
 * ```
 *
 * ### References
 * - https://github.com/alphagov/govuk-frontend/blob/master/src/core/_typography.scss
 * - https://design-system.service.gov.uk/styles/typography/#headings
 */
const Caption = props => <StyledCaption {...props} />;

Caption.propTypes = {
  /** Text to be rendered as a caption */
  children: PropTypes.string.isRequired,
  /**
   * Visual size level, accepts:
   *    `XLARGE`, `LARGE`, `MEDIUM`, `XL`, `L`, `M`
   *    or a numeric size that fits in the GDS font scale list
   */
  size: PropTypes.oneOf([...Object.keys(CAPTION_SIZES), ...Object.keys(TYPOGRAPHY_SCALE)]),
};

Caption.defaultProps = {
  size: 'XL',
};

export default Caption;
