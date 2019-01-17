import {
  FONT_STACK,
  FONT_STACK_PRINT,
  FONT_STACK_TABULAR,
  FONT_WEIGHTS,
  MEDIA_QUERIES,
  TYPOGRAPHY_SCALE,
} from '@govuk-react/constants';

// TODO add govuk-text-colour

export function govukTypographyCommon(fontFamily = FONT_STACK) {
  return {
    fontFamily,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    [MEDIA_QUERIES.PRINT]: {
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

export function govukTypographyResponsive(size, overrideLineHeight) {
  const scale = TYPOGRAPHY_SCALE[size];

  if (!scale) {
    throw Error(`Unknown font size ${size} - expected a point from the typography scale.`);
  }

  return Object.assign(
    {},
    getSizeStyle(scale.mobile, overrideLineHeight),
    {
      [MEDIA_QUERIES.TABLET]: getSizeStyle(scale.tablet, overrideLineHeight),
      [MEDIA_QUERIES.PRINT]: getSizeStyle(scale.print, overrideLineHeight),
    },
  );
}

export function govukFont({
  size, weight = 'regular', tabular = false, lineHeight,
}) {
  return Object.assign(
    {},
    govukTypographyCommon(tabular ? FONT_STACK_TABULAR : undefined),
    FONT_WEIGHTS[weight] ? { fontWeight: FONT_WEIGHTS[weight] } : undefined,
    size ? govukTypographyResponsive(size, lineHeight) : undefined,
  );
}
