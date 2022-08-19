/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_typography.scss
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/core/_typography.scss
 */

import type { StyledComponentProps } from 'styled-components';

import type { WithWhiteSpaceProps } from '@govuk-react/lib';

import styled from 'styled-components';
import * as React from 'react';
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
 * Use heading tags, such as `<h1>`, `<h2>` and so on, to tag the headings on a page.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/heading
 * - https://design-system.service.gov.uk/styles/typography/#headings
 */
export const Heading: HeadingType = ({ level, size, ...props }: HeadingOwnProps & WithWhiteSpaceProps) => {
  if (level) {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.warn(`deprecated prop 'level' used in Heading, please replace with an "H${level}" component`);
    }
    if (LEVEL_TAG[level]) {
      return <StyledHeading size={LEVEL_SIZE[level]} {...props} as={LEVEL_TAG[level]} />;
    }
  }

  return <StyledHeading size={size} {...props} />;
};
Heading.defaultProps = {
  level: undefined,
  size: 'XLARGE',
  children: undefined,
};

Heading.displayName = 'Heading';

export interface HeadingType extends React.FC<HeadingOwnProps & WithWhiteSpaceProps> {
  (props: HeadingPropsWithoutAs): React.ReactElement<HeadingPropsWithoutAs>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <AsC extends string | React.ComponentType<any> = 'h1', FAsC extends string | React.ComponentType<any> = AsC>(
    props: HeadingPropsWithAs<AsC, FAsC>
  ): React.ReactElement<HeadingPropsWithAs<AsC, FAsC>>;
}

type HeadingPropsWithoutAs = StyledComponentProps<'h1', never, HeadingOwnProps, never> & {
  as?: never | undefined;
  forwardedAs?: never | undefined;
};

type HeadingPropsWithAs<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  AsC extends string | React.ComponentType<any>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  FAsC extends string | React.ComponentType<any> = AsC
> = StyledComponentProps<AsC, never, HeadingOwnProps, never, FAsC> & {
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

export interface HeadingOwnProps {
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
  children?: React.ReactNode;
}

export default Heading;
