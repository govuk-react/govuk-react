// https://github.com/alphagov/govuk-frontend/tree/master/src/components/

import glamorous from "glamorous";

import * as COLOUR from "govuk-colours";
import { MEDIA_QUERIES, SITE_WIDTH, SPACING } from "../../constants/index";

const Label = glamorous.label(
  {
    marginBottom: SPACING.SCALE_3,
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    [MEDIA_QUERIES.LARGESCREEN]: {
      maxWidth: SITE_WIDTH,
      marginBottom: SPACING.SCALE_5
    }
  },
  ({ errorText }) => ({
    borderLeft: errorText ? `4px solid ${COLOUR.ERROR_COLOUR}` : "",
    marginRight: errorText ? SPACING.SCALE_3 : 0,
    paddingLeft: errorText ? SPACING.SCALE_2 : 0
  })
);

export default Label;
