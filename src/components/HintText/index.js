// https://github.com/alphagov/govuk-frontend/tree/master/src/components/

import glamorous from "glamorous";
import * as COLOUR from "govuk-colours";
import { FONT_SIZE, MEDIA_QUERIES, NTA_LIGHT } from "../../constants/index";

const HintText = glamorous.span({
  fontFamily: NTA_LIGHT,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  fontWeight: 400,
  textTransform: "none",
  fontSize: FONT_SIZE.SIZE_16,
  lineHeight: "20px",
  color: `${COLOUR.GREY_1}`,
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: FONT_SIZE.SIZE_19,
    lineHeight: "25px"
  }
});

export default HintText;
