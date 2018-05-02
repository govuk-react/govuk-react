export * from './spacing';
export * from './typography';

export const BORDER_WIDTH_MOBILE = '4px';
export const BORDER_WIDTH_TABLET = '5px';
export const BORDER_WIDTH_FORM_ELEMENT = '2px';
export const BORDER_WIDTH_ERROR = '4px';
export const BORDER_WIDTH = '5px';
export const BORDER_WIDTH_WIDE = '10px';
export const FOCUS_WIDTH = '3px';
export const SITE_WIDTH = '960px';
export const FULL_WIDTH = '100%';
export const BREAKPOINTS = {
  SMALLSCREEN: '320px',
  LARGESCREEN: '641px',
};

export const MEDIA_QUERIES = {
  LARGESCREEN: `@media only screen and (min-width: ${BREAKPOINTS.LARGESCREEN})`,
  PRINT: '@media print',
};

export const GUTTER_PX = 30;
export const GUTTER = `${GUTTER_PX}px`;
export const GUTTER_HALF = `${GUTTER_PX / 2}px`;
export const GUTTER_ONE_THIRD = `${GUTTER_PX / 3}px`;
export const SPACING = {
  SCALE_1: '5px',
  SCALE_2: '10px',
  SCALE_3: '15px',
  SCALE_4: '20px',
  SCALE_5: '30px',
  SCALE_6: '60px',
};

export const NTA_LIGHT = '"nta", "GDS Transport Website", Arial, sans-serif';
export const NTA_LIGHT_TABULAR = `ntatabularnumbers", ${NTA_LIGHT}`;
export const FONT_STACK = `${NTA_LIGHT} !default`;
export const FONT_STACK_TABULAR = `${NTA_LIGHT_TABULAR} !default`;
export const FONT_STACK_PRINT = 'sans-serif !default';
export const FONT_SIZE = {
  SIZE_14: '14px',
  SIZE_16: '16px',
  SIZE_18: '18px',
  SIZE_19: '19px',
  SIZE_20: '20px',
  SIZE_24: '24px',
  SIZE_27: '27px',
};

export const LINE_HEIGHT = {
  SIZE_14: '1.1428571429',
  SIZE_16: '1.25',
  SIZE_19: '1.3',
  SIZE_18: '1.3',
  SIZE_24: '1.35',
};
