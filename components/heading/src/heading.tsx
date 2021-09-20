import type { StyledComponentProps } from 'styled-components';

import type { WithWhiteSpaceProps } from '@govuk-react/lib';

import styled from 'styled-components';
import React from 'react';
import { HEADING_SIZES, LEVEL_SIZE, LEVEL_TAG, MEDIA_QUERIES, TYPOGRAPHY_SCALE } from '@govuk-react/constants';
import { spacing, typography } from '@govuk-react/lib';

// use `size` only with string for XLARGE, SMALL etc and number for px size
// so if `size` is a string, we find a numeric size based off `HEADING_SIZES`
// but if `size` is a number we just send through that number

const StyledHeading = styled('h1')<StyledHeadingOwnProps>(
  typography.textColour,
  ({ size }) => {
    const actualSize = Number.isNaN(Number(size)) ? HEADING_SIZES[size] : size;

    if (!actualSize) {
      throw Error(`Unknown size ${size} used for heading.`);
    }

    return { ...typography.font({ size: actualSize, weight: 'bold' }) };
  },
  {
    display: 'block',
    marginTop: 0,
  },
  ({ size }) => {
    const actualSize = Number.isNaN(Number(size)) ? HEADING_SIZES[size] : size;
    const scaleInfo = TYPOGRAPHY_SCALE[actualSize];

    return {
      marginBottom: scaleInfo.mobile.spacing,
      [MEDIA_QUERIES.TABLET]: {
        marginBottom: scaleInfo.tablet.spacing,
      },
    };
  },
  spacing.withWhiteSpace()
);

/**
 *
 * ### Usage
 *
 *
 * Simple
 *
 * ```jsx
 * import { Heading } from 'govuk-react'
 *
 * <Heading>Heading text</Heading>
 * ```
 *
 * To pick different heading levels it is recommended to use the shortcut versions as
 * that will pick the appropriate tag as well as set the appropriate corresponding font size.
 *
 * Using shortcuts
 *
 * ```jsx
 * import { H1, H2, H3, H4, H5, H6 } from 'govuk-react'
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
 *
 * ```jsx
 * <H6 size={80}>
 *   H6 with font size 80
 * </H6>
 * <Heading as="h2" size="SMALL">
 *   Heading as h2 with SMALL size
 * </Heading>
 * <H3 size="LARGE">H3 with LARGE size</H3>
 * ```
 *
 * Props pass through
 *
 * ```jsx
 * <Heading onClick={() => { console.log('clicked'); }}>Click me</Heading>
 * ```
 *
 * ### References:
 *
 * - https://design-system.service.gov.uk/styles/typography/#headings
 * - https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_typography.scss
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/core/_typography.scss
 */
export const Heading: HeadingType = ({ level = undefined, ...props }: React.ComponentProps<HeadingType>) => {
  if (level) {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.warn(`deprecated prop 'level' used in Heading, please replace with an "H${level}" component`);
    }
    if (LEVEL_TAG[level]) {
      return <StyledHeading size={LEVEL_SIZE[level]} {...props} as={LEVEL_TAG[level]} />;
    }
  }

  return <StyledHeading {...props} />;
};

Heading.defaultProps = {
  level: undefined,
  size: 'XLARGE',
};

Heading.displayName = 'Heading';

interface HeadingType extends React.FC<HeadingOwnProps> {
  (props: HeadingPropsWithoutAs): React.ReactElement<HeadingPropsWithoutAs>;
  <AsC extends string | React.ComponentType = 'h1', FAsC extends string | React.ComponentType = AsC>(
    props: HeadingPropsWithAs<AsC, FAsC>
  ): React.ReactElement<HeadingPropsWithAs<AsC, FAsC>>;
}

type HeadingPropsWithoutAs = StyledComponentProps<'h1', never, HeadingOwnProps, never> & {
  as?: never | undefined;
  forwardedAs?: never | undefined;
};

type HeadingPropsWithAs<AsC extends string | React.ComponentType, FAsC extends string | React.ComponentType = AsC> =
  StyledComponentProps<AsC, never, HeadingOwnProps, never, FAsC> & {
    as?: AsC | undefined;
    forwardedAs?: FAsC | undefined;
  };

interface StyledHeadingOwnProps extends WithWhiteSpaceProps {
  /**
   * Visual size level, accepts:
   *    `XLARGE`, `LARGE`, `MEDIUM`, `SMALL`, `XL`, `L`, `M`, `S`
   *    or a numeric size that fits in the GDS font scale list
   */
  size?: number | string;
}

interface HeadingOwnProps {
  /**
   * Semantic heading level value between 1 and 6 (deprecated)
   */
  level?: number | string;
  /**
   * Visual size level, accepts:
   *    `XLARGE`, `LARGE`, `MEDIUM`, `SMALL`, `XL`, `L`, `M`, `S`
   *    or a numeric size that fits in the GDS font scale list
   */
  size?: number | string;
}

export default Heading;
