// This lib is effectively a port of govuk-frontend's spacing sass helpers
// Tracking:
// https://github.com/alphagov/govuk-frontend/blob/master/src/helpers/_spacing.scss

import {
  MEDIA_QUERIES,
  SPACING_MAP,
  SPACING_POINTS,
} from '@govuk-react/constants';

export function simple(size) {
  const scale = SPACING_POINTS[size];

  if (scale === undefined) {
    throw Error(`Unknown spacing size ${size} - expected a point from the spacing scale.`);
  }

  return scale;
}

function styleForDirection(size, property, direction) {
  // NB emotion automatically sets style to include `px` if needed
  return {
    [(direction && direction !== 'all') ? `${property}-${direction}` : property]: size,
  };
}

export function responsive({
  size, property, direction, adjustment = 0,
} = {}) {
  const scale = SPACING_MAP[size];

  if (scale === undefined) {
    throw Error(`Unknown responsive spacing size ${
      size} - expected a point from the responsive spacing scale.`);
  }

  if (!property) {
    throw Error('No property passed to responsiveSpacing');
  }

  // TODO consider checking adjustment is a number
  // TODO consider supporting non-number (string) adjustments, such as px or rem values

  if (Array.isArray(direction)) {
    return Object.assign(
      {},
      ...direction.map(dir => styleForDirection(scale.mobile + adjustment, property, dir)),
      {
        [MEDIA_QUERIES.TABLET]: Object.assign(
          {},
          ...direction.map(dir => styleForDirection(scale.tablet + adjustment, property, dir)),
        ),
      },
    );
  }

  return Object.assign(
    {},
    styleForDirection(scale.mobile + adjustment, property, direction),
    {
      [MEDIA_QUERIES.TABLET]: styleForDirection(scale.tablet + adjustment, property, direction),
    },
  );
}

export function responsiveMargin(value) {
  if (Number.isInteger(value)) {
    return responsive({ size: value, property: 'margin' });
  }

  const { size, direction, adjustment } = value;

  return responsive({
    size, property: 'margin', direction, adjustment,
  });
}

export function responsivePadding(value) {
  if (Number.isInteger(value)) {
    return responsive({ size: value, property: 'padding' });
  }

  const { size, direction, adjustment } = value;

  return responsive({
    size, property: 'padding', direction, adjustment,
  });
}
