// https://design-system.service.gov.uk/styles/typography/
// https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/settings/_typography-responsive.scss
// https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/settings/_typography-font.scss
// https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/core/_typography.scss

import { RESPONSIVE_8, RESPONSIVE_6, RESPONSIVE_4 } from './spacing';

export const TYPOGRAPHY_SCALE = {
  80: {
    mobile: {
      fontSize: 53,
      lineHeight: 55 / 53,
      spacing: RESPONSIVE_8.mobile,
    },
    tablet: {
      fontSize: 80,
      lineHeight: 1, // 80 / 80
      spacing: RESPONSIVE_8.tablet,
    },
    print: {
      fontSize: 53,
      lineHeight: 1.1,
    },
  },

  48: {
    mobile: {
      fontSize: 32,
      lineHeight: 35 / 32,
      spacing: RESPONSIVE_8.mobile,
    },
    tablet: {
      fontSize: 48,
      lineHeight: 50 / 48,
      spacing: RESPONSIVE_8.tablet,
    },
    print: {
      fontSize: 32,
      lineHeight: 1.15,
    },
  },

  36: {
    mobile: {
      fontSize: 24,
      lineHeight: 25 / 24,
      spacing: RESPONSIVE_6.mobile,
    },
    tablet: {
      fontSize: 36,
      lineHeight: 40 / 36,
      spacing: RESPONSIVE_6.tablet,
    },
    print: {
      fontSize: 24,
      lineHeight: 1.05,
    },
  },

  27: {
    mobile: {
      fontSize: 18,
      lineHeight: 20 / 18,
      spacing: RESPONSIVE_4.mobile,
    },
    tablet: {
      fontSize: 27,
      lineHeight: 30 / 27,
      spacing: RESPONSIVE_4.tablet,
    },
    print: {
      fontSize: 18,
      lineHeight: 1.15,
    },
  },

  24: {
    mobile: {
      fontSize: 18,
      lineHeight: 20 / 18,
      spacing: RESPONSIVE_4.mobile,
    },
    tablet: {
      fontSize: 24,
      lineHeight: 30 / 24,
      spacing: RESPONSIVE_4.tablet,
    },
    print: {
      fontSize: 18,
      lineHeight: 1.15,
    },
  },

  19: {
    mobile: {
      fontSize: 16,
      lineHeight: 20 / 16,
      spacing: RESPONSIVE_4.mobile,
    },
    tablet: {
      fontSize: 19,
      lineHeight: 25 / 19,
      spacing: RESPONSIVE_4.tablet,
    },
    print: {
      fontSize: 14,
      lineHeight: 1.15,
    },
  },

  16: {
    mobile: {
      fontSize: 14,
      lineHeight: 16 / 14,
      spacing: RESPONSIVE_4.mobile,
    },
    tablet: {
      fontSize: 16,
      lineHeight: 20 / 16,
      spacing: RESPONSIVE_4.tablet,
    },
    print: {
      fontSize: 14,
      lineHeight: 1.2,
    },
  },

  14: {
    mobile: {
      fontSize: 12,
      lineHeight: 15 / 12,
      spacing: RESPONSIVE_4.mobile,
    },
    tablet: {
      fontSize: 14,
      lineHeight: 20 / 14,
      spacing: RESPONSIVE_4.tablet,
    },
    print: {
      fontSize: 12,
      lineHeight: 1.2,
    },
  },
};

// NB Spacing values set above relate to headings
// body classes use different responsive margins
// captions use govuk-spacing(1) for xl and l sizes only

// heading sizes supported in govuk-frontend
export const HEADING_SIZES = {
  XLARGE: 48,
  XL: 48,
  LARGE: 36,
  L: 36,
  MEDIUM: 24,
  M: 24,
  SMALL: 19,
  S: 19,
};

// caption sizes supported in govuk-frontend
export const CAPTION_SIZES = {
  XLARGE: 27,
  XL: 27,
  LARGE: 24,
  L: 24,
  MEDIUM: 19,
  M: 19,
};

// body text sizes supported in govuk-frontend
export const BODY_SIZES = {
  LARGE: 24,
  L: 24,
  MEDIUM: 19,
  M: 19,
  SMALL: 16,
  S: 16,
  XSMALL: 14,
  XS: 14,
};

// Lookup between numerical header level and associated html element
export const LEVEL_TAG = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6',
};

// Lookup between a header level (1-6) and the associated default font size
export const LEVEL_SIZE = {
  1: 'XLARGE',
  2: 'LARGE',
  3: 'MEDIUM',
  4: 'SMALL',
  5: 'SMALL',
  6: 'SMALL',
};

export const FONT_WEIGHTS = {
  bold: '700',
  regular: '400',
};
