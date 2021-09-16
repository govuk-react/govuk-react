// This lib is effectively a port of govuk-frontend's typography sass helpers
// Tracking:
// https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/helpers/_typography.scss

import {
  FONT_STACK,
  FONT_STACK_PRINT,
  FONT_STACK_TABULAR,
  FONT_WEIGHTS,
  MEDIA_QUERIES,
  MEDIA_QUERY_PRINT,
  TYPOGRAPHY_SCALE,
} from '@govuk-react/constants';
import { BLACK } from 'govuk-colours';

export const textColour = {
  color: BLACK,
  [MEDIA_QUERIES.PRINT]: {
    color: '#000',
  },
};

export const textColor = textColour;

export function common(fontFamily = FONT_STACK): {
  fontFamily: string;
  WebkitFontSmoothing: string;
  MozOsxFontSmoothing: string;
  [MEDIA_QUERY_PRINT]: {
    fontFamily: string;
  };
} {
  return {
    fontFamily,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    [MEDIA_QUERY_PRINT]: {
      fontFamily: FONT_STACK_PRINT,
    },
  };
}

function getSizeStyle(scale, lineHeight = scale.lineHeight) {
  return {
    fontSize: `${scale.fontSize}px`,
    lineHeight,
  };
}

export function responsive(
  size: number | string,
  overrideLineHeight?: number | string
): {
  fontSize: string;
  lineHeight: string | number;
} {
  const scale = TYPOGRAPHY_SCALE[size];

  if (!scale) {
    throw Error(`Unknown font size ${size} - expected a point from the typography scale.`);
  }

  return {
    ...getSizeStyle(scale.mobile, overrideLineHeight),
    [MEDIA_QUERIES.TABLET]: getSizeStyle(scale.tablet, overrideLineHeight),
    [MEDIA_QUERIES.PRINT]: getSizeStyle(scale.print, overrideLineHeight),
  };
}

interface FontOptions {
  size?: number | string;
  weight?: string;
  tabular?: boolean;
  lineHeight?: number | string;
}

export function font({ size, weight = 'regular', tabular = false, lineHeight }: FontOptions = {}): {
  fontSize: string;
  lineHeight: string | number;
  fontWeight: number;
  fontFamily: string;
  WebkitFontSmoothing: string;
  MozOsxFontSmoothing: string;
  [MEDIA_QUERY_PRINT]: {
    fontFamily: string;
  };
} {
  return {
    ...common(tabular ? FONT_STACK_TABULAR : undefined),
    ...(FONT_WEIGHTS[weight] ? { fontWeight: FONT_WEIGHTS[weight] } : undefined),
    ...(size ? responsive(size, lineHeight) : undefined),
  };
}
