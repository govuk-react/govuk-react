// References:
// https://govuk-elements.herokuapp.com/buttons/
//
// https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/design-patterns/_buttons.scss
// https://github.com/alphagov/govuk-frontend/blob/master/src/components/button/_button.scss
// https://github.com/alphagov/govuk_elements/blob/master/packages/govuk-elements-sass/public/sass/elements/_buttons.scss

import glamorous from 'glamorous'

import { BUTTON_COLOUR, WHITE, YELLOW } from 'govuk-colours'

// const Button
const Button = glamorous.button(
  {
    WebkitAppearance: 'none',
    WebkitFontSmoothing: 'antialiased',
    backgroundColor: BUTTON_COLOUR,
    border: 'none',
    boxShadow: '0 2px 0 #003618',
    color: WHITE,
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: '1em',
    lineHeight: '1.25',
    outlineOffset: '-1px',
    outline: '1px solid transparent',
    padding: '.526315em .789473em .263157em',
    position: 'relative',
    textDecoration: 'none',
    '[disabled]': {
      opacity: '.5',
      pointerEvents: 'none'
    },
    ':focus': {
      outline: `3px solid ${YELLOW}`
    }
  },
  props => (
    {
      fontWeight: props.start ? '700' : Button.fontWeight,
      fontSize: props.start ? '24px' : Button.fontSize,
      lineHeight: props.start ? '1.25' : Button.lineHeight,
      padding: props.start ? '0.36842em 0.84211em 0.21053em' : Button.padding
    }
  ),
  props => (
    {
      backgroundImage: props.iconUrl ? `url( ${props.iconUrl})` : '',
      backgroundRepeat: props.iconUrl ? 'no-repeat' : '',
      backgroundPosition: props.iconUrl ? '100% 50%' : '',
      paddingRight: props.iconUrl ? '2.15789em' : ''
    }
  )
);

Button.defaultProps = {
	children: 'Button'
}

export default Button;
