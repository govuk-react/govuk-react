import { BLACK, GREY_1, YELLOW, ERROR_COLOUR } from "govuk-colours";

export const BORDER_WIDTH_MOBILE = "4px";
export const BORDER_WIDTH_TABLET = "5px";
export const BORDER_WIDTH_FORM_ELEMENT = "2px";
export const BORDER_WIDTH_ERROR = "4px";
export const BORDER_WIDTH = "5px";
export const BORDER_WIDTH_WIDE = "10px";
export const FOCUS_WIDTH = "3px";
export const SITE_WIDTH = "960px";
export const FULL_WIDTH = "100%";
export const BREAKPOINTS = {
  SMALLSCREEN: "320px",
  LARGESCREEN: "641px"
};

export const MEDIA_QUERIES = {
  LARGESCREEN: `@media only screen and (min-width: ${BREAKPOINTS.LARGESCREEN})`
};

export const GUTTER_PX = 30;
export const GUTTER = `${GUTTER_PX}px`;
export const GUTTER_HALF = `${GUTTER_PX / 2}px`;
export const GUTTER_ONE_THIRD = `${GUTTER_PX / 3}px`;
export const SPACING = {
  SCALE_1: "5px",
  SCALE_2: "10px",
  SCALE_3: "15px",
  SCALE_4: "20px",
  SCALE_5: "30px",
  SCALE_6: "60px"
};
export const NTA_LIGHT = `"nta", Arial, sans-serif`;
export const NTA_LIGHT_TABULAR = `ntatabularnumbers", ${NTA_LIGHT}`;
export const FONT_STACK = `${NTA_LIGHT} !default`;
export const FONT_STACK_TABULAR = `${NTA_LIGHT_TABULAR} !default`;
export const FONT_STACK_PRINT = "sans-serif !default";
export const FONT_SIZE = {
  SIZE_14: "14px",
  SIZE_16: "16px",
  SIZE_19: "19px"
};

export const STYLE_DEFAULT = {
  LABEL: {
    marginBottom: SPACING.SCALE_3,
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    [MEDIA_QUERIES.LARGESCREEN]: {
      maxWidth: SITE_WIDTH,
      marginBottom: SPACING.SCALE_5
    },
    ERROR(errorText) {
      return {
        borderLeft: errorText
          ? `${BORDER_WIDTH_ERROR} solid ${ERROR_COLOUR}`
          : "",
        marginRight: errorText ? `${SPACING.SCALE_3}` : "0",
        paddingLeft: errorText ? `${SPACING.SCALE_2}` : "0"
      };
    }
  },
  LABEL_TEXT: {
    fontFamily: NTA_LIGHT,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    fontWeight: 400,
    fontSize: FONT_SIZE.SIZE_16,
    lineHeight: "1.25",
    color: `${BLACK}`,
    display: "block",
    paddingBottom: "2px",
    [MEDIA_QUERIES.LARGESCREEN]: {
      fontSize: FONT_SIZE.SIZE_19,
      lineHeight: "1.31579"
    },
    ERROR(errorText) {
      return {
        fontWeight: errorText ? 700 : STYLE_DEFAULT.LABEL_TEXT.fontWeight
      };
    }
  },
  HINT_TEXT: {
    fontFamily: NTA_LIGHT,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    fontWeight: 400,
    textTransform: "none",
    fontSize: FONT_SIZE.SIZE_16,
    lineHeight: "1.25",
    color: `${GREY_1}`,
    [MEDIA_QUERIES.LARGESCREEN]: {
      fontSize: FONT_SIZE.SIZE_19,
      lineHeight: "1.31579"
    }
  },
  ERROR_TEXT: {
    fontFamily: NTA_LIGHT,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    fontWeight: 700,
    textTransform: "none",
    fontSize: FONT_SIZE.SIZE_16,
    lineHeight: "1.25",
    color: `${ERROR_COLOUR}`,
    paddingTop: "4px",
    paddingBottom: "2px",
    [MEDIA_QUERIES.LARGESCREEN]: {
      fontSize: FONT_SIZE.SIZE_19,
      lineHeight: "1.31579"
    }
  },
  INPUT: {
    boxSizing: "border-box",
    fontFamily: NTA_LIGHT,
    fontWeight: 400,
    textTransform: "none",
    fontSize: "small",
    lineHeight: "inherit",
    width: "100%",
    padding: "5px 4px 4px",
    border: `0`,
    [MEDIA_QUERIES.LARGESCREEN]: {
      width: "50%"
    },
    "[disabled]": {
      cursor: "auto"
    },
    ":focus": {
      outline: `3px solid ${YELLOW}`,
      outlineOffset: 0
    }
  }
};
