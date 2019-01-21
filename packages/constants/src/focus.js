// Tracking:
// https://github.com/alphagov/govuk-frontend/blob/master/src/helpers/_focusable.scss
// https://github.com/alphagov/govuk-frontend/blob/master/src/settings/_measurements.scss
import { FOCUS_COLOUR } from 'govuk-colours';

export const FOCUS_WIDTH = '3px';

export const FOCUSABLE = {
  '&:focus': {
    outline: `${FOCUS_WIDTH} solid ${FOCUS_COLOUR}`,
    outlineOffset: 0,
  },
};
