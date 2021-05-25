// https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/settings/_spacing.scss

export const RESPONSIVE_0 = {
  mobile: 0,
  tablet: 0,
};

export const RESPONSIVE_1 = {
  mobile: 5,
  tablet: 5,
};

export const RESPONSIVE_2 = {
  mobile: 10,
  tablet: 10,
};

export const RESPONSIVE_3 = {
  mobile: 15,
  tablet: 15,
};

export const RESPONSIVE_4 = {
  mobile: 15,
  tablet: 20,
};

export const RESPONSIVE_5 = {
  mobile: 15,
  tablet: 25,
};

export const RESPONSIVE_6 = {
  mobile: 20,
  tablet: 30,
};

export const RESPONSIVE_7 = {
  mobile: 25,
  tablet: 40,
};

export const RESPONSIVE_8 = {
  mobile: 30,
  tablet: 50,
};

export const RESPONSIVE_9 = {
  mobile: 40,
  tablet: 60,
};

export const SPACING_MAP = [
  RESPONSIVE_0,
  RESPONSIVE_1,
  RESPONSIVE_2,
  RESPONSIVE_3,
  RESPONSIVE_4,
  RESPONSIVE_5,
  RESPONSIVE_6,
  RESPONSIVE_7,
  RESPONSIVE_8,
  RESPONSIVE_9,
];

export const SPACING_MAP_INDEX = Array.from(Array(SPACING_MAP.length).keys());

export const SPACING_POINTS = {
  0: 0,
  1: 5,
  2: 10,
  3: 15,
  4: 20,
  5: 25,
  6: 30,
  7: 40,
  8: 50,
  9: 60,
};

// Ref: https://github.com/alphagov/govuk-frontend/blob/68bd09bb3e54b7ef4b4084ad2b3336858923a041/src/settings/_measurements.scss#L23
export const WIDTHS = {
  'one-quarter': '25%',
  'one-third': '33.3333%',
  'one-half': '50%',
  'two-thirds': '66.6666%',
  'three-quarters': '75%',
  full: '100%',
};
