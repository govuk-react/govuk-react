// Tracking:
// https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/helpers/_focusable.scss
// https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/settings/_measurements.scss
import { FOCUS_COLOUR } from 'govuk-colours';

export const FOCUS_WIDTH = '3px';
export const FOCUS_WIDTH_RAW = 3;

export const FOCUSABLE = {
  '&:focus': {
    outline: `${FOCUS_WIDTH} solid ${FOCUS_COLOUR}`,
    outlineOffset: 0,
  },
};

export const FOCUSABLE_FILL = {
  '&:focus': {
    outline: `${FOCUS_WIDTH} solid ${FOCUS_COLOUR}`,
    outlineOffset: 0,
    backgroundColor: FOCUS_COLOUR,
  },
};
