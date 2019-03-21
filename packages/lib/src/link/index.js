// Tracking:
// https://github.com/alphagov/govuk-frontend/blob/master/src/helpers/_links.scss
import { FOCUSABLE_FILL, MEDIA_QUERIES } from '@govuk-react/constants';
import {
  BLACK, // in lieu of a FOCUS_TEXT_COLOUR...
  LINK_COLOUR,
  LINK_ACTIVE_COLOUR,
  LINK_HOVER_COLOUR,
  LINK_VISITED_COLOUR,
  SECONDARY_TEXT_COLOUR,
} from 'govuk-colours';

import { common as commonType, textColour } from '../typography';

const FOCUS_TEXT_COLOUR = BLACK;

export function common(fontFamily) {
  return [commonType(fontFamily), FOCUSABLE_FILL];
}

export const styleDefault = {
  ':link': {
    color: LINK_COLOUR,
  },
  ':visited': {
    color: LINK_VISITED_COLOUR,
  },
  ':hover': {
    color: LINK_HOVER_COLOUR,
  },
  ':active': {
    color: LINK_ACTIVE_COLOUR,
  },
  ':focus': {
    color: FOCUS_TEXT_COLOUR,
  },
};

export const styleMuted = {
  '&:link, &:visited, &:hover, &:active': {
    color: SECONDARY_TEXT_COLOUR,
  },
  '&:focus': {
    color: FOCUS_TEXT_COLOUR,
  },
};

export const styleText = {
  '&:link, &:visited, &:hover, &:active, &:focus': textColour,
};

export const styleNoVisitedState = {
  ':link': {
    color: LINK_COLOUR,
  },
  ':visited': {
    color: LINK_COLOUR,
  },
  ':hover': {
    color: LINK_HOVER_COLOUR,
  },
  ':active': {
    color: LINK_ACTIVE_COLOUR,
  },
  ':focus': {
    color: FOCUS_TEXT_COLOUR,
  },
};

export const printFriendly = {
  [MEDIA_QUERIES.PRINT]: {
    '&[href^="/"], &[href^="http://"], &[href^="https://"]': {
      '&::after': {
        content: '" (" attr(href) ")"',
        fontSize: '90%',
        wordWrap: 'break-word',
      },
    },
  },
};
