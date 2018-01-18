import glamorous from "glamorous";
import { BLACK } from "govuk-colours";
import { BREAKPOINTS } from "../../constants/index";

const mediaQueries = {
  largeScreen: `@media only screen and (min-width: ${BREAKPOINTS.LARGESCREEN})`
};

const LabelText = glamorous.span(
  {
    fontFamily: '"nta", Arial, sans-serif',
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "1.25",
    color: `${BLACK}`,
    paddingBottom: "2px",
    [mediaQueries.largeScreen]: {
      fontSize: "19px",
      lineHeight: "1.31579"
    }
  },
  ({ errorText }) => ({
    fontWeight: errorText ? 700 : LabelText.fontWeight
  })
);

export default LabelText;
