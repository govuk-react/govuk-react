// This lib is effectively a port of govuk-frontend's spacing sass helpers
// Tracking:
// https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/helpers/_spacing.scss
// Further references:
// https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/overrides/_spacing.scss
// https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/settings/_spacing.scss

import { MEDIA_QUERIES, SPACING_MAP, SPACING_POINTS, WIDTHS } from '@govuk-react/constants';

export function simple(size: number): number {
  const scale = SPACING_POINTS[Math.abs(size)];
  const polarity = size < 0 ? -1 : 1;

  if (scale === undefined) {
    throw Error(`Unknown spacing size ${size} - expected a point from the spacing scale.`);
  }

  return scale * polarity;
}

function styleForDirection(size, property, direction = null) {
  // NB styled-components automatically sets style to include `px` if needed
  return {
    [direction && direction !== 'all' ? `${property}-${direction}` : property]: size,
  };
}

export function responsive({
  size,
  property,
  direction = null,
  adjustment = 0,
}: {
  size: number;
  property: string;
  direction?: string | string[];
  adjustment?: number;
}): any {
  const scale = SPACING_MAP[Math.abs(size)];
  const polarity = size < 0 ? -1 : 1;

  if (scale === undefined) {
    throw Error(`Unknown responsive spacing size ${size} - expected a point from the responsive spacing scale.`);
  }

  if (!property) {
    throw Error('No property passed to responsiveSpacing');
  }

  // TODO consider checking adjustment is a number
  // TODO consider supporting non-number (string) adjustments, such as px or rem values

  if (Array.isArray(direction)) {
    return Object.assign(
      {},
      ...direction.map((dir) => styleForDirection(scale.mobile * polarity + adjustment, property, dir)),
      {
        [MEDIA_QUERIES.TABLET]: Object.assign(
          {},
          ...direction.map((dir) => styleForDirection(scale.tablet * polarity + adjustment, property, dir))
        ),
      }
    );
  }

  return {
    ...styleForDirection(scale.mobile * polarity + adjustment, property, direction),
    [MEDIA_QUERIES.TABLET]: styleForDirection(scale.tablet * polarity + adjustment, property, direction),
  };
}

export function responsiveMargin(
  value: number | { size: number; direction?: string | string[]; adjustment?: number }
): any {
  if (Number.isInteger(value)) {
    return responsive({ size: Number(value), property: 'margin' });
  }
  if (typeof value !== 'object') {
    throw Error('Expected padding value to be an object or integer');
  }

  const { size, direction, adjustment } = value;

  return responsive({
    size,
    property: 'margin',
    direction,
    adjustment,
  });
}

export function responsivePadding(
  value: number | { size: number; direction?: string | string[]; adjustment?: number }
): any {
  if (Number.isInteger(value)) {
    return responsive({ size: Number(value), property: 'padding' });
  }
  if (typeof value !== 'object') {
    throw Error('Expected padding value to be an object or integer');
  }

  const { size, direction, adjustment } = value;

  return responsive({
    size,
    property: 'padding',
    direction,
    adjustment,
  });
}

// withWhiteSpace lib styling function
// does not form part of govuk-frontend

// `withWhiteSpace(config)`
// generates a styling function, based on config, which can be used when styling a component

// `margin` and `padding` are supported as props and config values
// can be a single number, to indicate scale size to use in all directions
// can be an object in format `{ size, direction, adjustment }`
// - see `responsivePadding` and `responsiveMargin` calls
// can be an array of numbers/objects

export function withWhiteSpace(
  config: { margin?: any; padding?: any; marginBottom?: any } = {}
): (settings?: { mb?: number; margin?: number; padding?: number }) => any[] {
  return ({
    margin = config.margin,
    padding = config.padding,
    mb: marginBottom = config.marginBottom,
  }: WithWhiteSpaceProps = {}) => {
    const styles = [];

    if (margin !== undefined) {
      if (Array.isArray(margin)) {
        styles.push(margin.map((val) => responsiveMargin(val)));
      } else {
        styles.push(responsiveMargin(margin));
      }
    }

    if (padding !== undefined) {
      if (Array.isArray(padding)) {
        styles.push(padding.map((val) => responsivePadding(val)));
      } else {
        styles.push(responsivePadding(padding));
      }
    }

    if (marginBottom !== undefined) {
      styles.push(responsiveMargin({ size: marginBottom, direction: 'bottom' }));
    }

    return styles;
  };
}

// TODO: this could be typed better, using the old proptypes as a guide:

// const Directions = PropTypes.oneOf(['all', 'top', 'right', 'bottom', 'left']);

// const SpacingShape = PropTypes.shape({
//   size: PropTypes.number.isRequired,
//   direction: PropTypes.oneOfType([Directions, PropTypes.arrayOf(Directions)]),
//   adjustment: PropTypes.number,
// });

// `mb` (Margin Bottom) prop name comes from the naming convention used by https://github.com/jxnblk/grid-styled
// withWhiteSpace.propTypes = {
//   mb: PropTypes.oneOf(SPACING_MAP_INDEX),
//   margin: PropTypes.oneOfType([
//     PropTypes.number,
//     SpacingShape,
//     PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, SpacingShape])),
//   ]),
//   padding: PropTypes.oneOfType([
//     PropTypes.number,
//     SpacingShape,
//     PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, SpacingShape])),
//   ]),
// };

export function withWidth(config: { width?: any; mediaQuery?: string; noDefault?: boolean } = {}): ({
  setWidth,
}?: WithWidthProps) => {
  [x: string]:
    | string
    | {
        width: any;
      };
  width?: string;
} {
  return ({ setWidth = config.width } = {}) => {
    if (setWidth) {
      const width = WIDTHS[setWidth] || setWidth;
      const { mediaQuery = MEDIA_QUERIES.TABLET, noDefault } = config;

      return {
        width: noDefault ? undefined : '100%',
        [mediaQuery]: {
          width,
        },
      };
    }

    return undefined;
  };
}

export type WithWhiteSpaceProps = { margin?: any; padding?: any; mb?: any };

export type WithWidthProps = { setWidth?: string };
