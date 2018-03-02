// References:
// https://govuk-elements.herokuapp.com/buttons/
//
// https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/design-patterns/_buttons.scss
// https://github.com/alphagov/govuk-frontend/blob/master/src/components/button/_button.scss
// https://github.com/alphagov/govuk_elements/blob/master/packages/govuk-elements-sass/public/sass/elements/_buttons.scss

import glamorous from 'glamorous';
import React from 'react';

import {
  BUTTON_COLOUR,
  BUTTON_COLOUR_DARKEN_15,
  WHITE,
  YELLOW,
} from 'govuk-colours';

const GButton = glamorous.button(
  {
    backgroundColor: BUTTON_COLOUR,
    border: 'none',
    boxShadow: `0 2px 0 ${BUTTON_COLOUR_DARKEN_15}`,
    color: WHITE,
    cursor: 'pointer',
    display: 'inline-block',
    fontFamily: '"nta", Arial, sans-serif',
    fontWeight: 400,
    fontSize: '1em',
    lineHeight: '1.25',
    outlineOffset: '-1px',
    outline: '1px solid transparent',
    padding: '.526315em .789473em .263157em',
    position: 'relative',
    textDecoration: 'none',
    WebkitAppearance: 'none',
    WebkitFontSmoothing: 'antialiased',
    '[disabled]': {
      opacity: '.5',
      pointerEvents: 'none',
    },
    ':focus': {
      outline: `3px solid ${YELLOW}`,
    },
  },
  ({ start }) => ({
    fontWeight: start ? '700' : undefined,
    fontSize: start ? '24px' : undefined,
    lineHeight: start ? '1.25' : undefined,
    padding: start ? '0.36842em 0.84211em 0.21053em' : undefined,
  }),
  ({ iconUrl }) => ({
    backgroundImage: iconUrl ? `url( ${iconUrl})` : undefined,
    backgroundRepeat: iconUrl ? 'no-repeat' : undefined,
    backgroundPosition: iconUrl ? '100% 50%' : undefined,
    paddingRight: iconUrl ? '2.15789em' : undefined,
  }),
);

// TODO: start and iconUrl props
const Button = props => <GButton {...props} />;

Button.defaultProps = {
  children: 'Button',
};

export default Button;
