// References:
// https://govuk-elements.herokuapp.com/buttons/
//
// https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/design-patterns/_buttons.scss
// https://github.com/alphagov/govuk-frontend/blob/master/src/components/button/_button.scss
// https://github.com/alphagov/govuk_elements/blob/master/packages/govuk-elements-sass/public/sass/elements/_buttons.scss
import styled from 'styled-components'
import {css} from 'styled-components'

import { BUTTON_COLOUR, WHITE } from 'govuk-colours'

const Button = styled.button`
  -webkit-appearance: none;
  -webkit-font-smoothing: antialiased;
  background-color: ${BUTTON_COLOUR};
  border: none;
  box-shadow: 0 2px 0 #003618;
  color: ${WHITE};
  cursor: pointer;
  display: inline-block;
  font-size: 1em;
  line-height: 1.25;
  outline-offset: -1px;
  outline: 1px solid transparent;
  padding: .526315em .789473em .263157em;
  position: relative;
  text-decoration: none;
  ${props => props.start && css`
    font-weight: 700;
    text-transform: none;
    font-size: 24px;
    line-height: 1.25;
    padding: 0.36842em 0.84211em 0.21053em;
  `}
  ${props => props.start && props.iconUrl && css`
    background-image: url(${({iconUrl}) => iconUrl});
    background-repeat: no-repeat;
    background-position: 100% 50%;
    padding-right: 2.15789em;
  `}
  ${props => props.disabled && css`
    opacity: 0.5;
  `}
`;

Button.defaultProps = {
	children: 'Button'
}

export default Button;
