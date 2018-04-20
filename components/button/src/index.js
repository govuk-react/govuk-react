// References:
// https://govuk-elements.herokuapp.com/buttons/
//
// https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/design-patterns/_buttons.scss
// https://github.com/alphagov/govuk-frontend/blob/master/src/components/button/_button.scss
// https://github.com/alphagov/govuk_elements/blob/master/packages/govuk-elements-sass/public/sass/elements/_buttons.scss

import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import React from 'react';
import { withWhiteSpace } from '@govuk-react/hoc';
import { NTA_LIGHT, SPACING } from '@govuk-react/constants';
import {
  BUTTON_COLOUR,
  BUTTON_COLOUR_DARKEN_15,
  WHITE,
  YELLOW,
} from 'govuk-colours';

// TODO should be using constants for some of the below values
const GButton = glamorous.button(
  {
    backgroundColor: BUTTON_COLOUR,
    border: 'none',
    boxShadow: `0 2px 0 ${BUTTON_COLOUR_DARKEN_15}`,
    color: WHITE,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: NTA_LIGHT,
    fontWeight: 400,
    fontSize: '1em',
    lineHeight: '1.25',
    outlineOffset: '-1px',
    outline: '1px solid transparent',
    padding: '.526315em .789473em .263157em',
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
    ' svg': {
      maxWidth: '15px',
      marginLeft: SPACING.SCALE_4,
    },
  },
  ({ start, icon }) => ({
    fontWeight: start ? '700' : undefined,
    fontSize: start ? '24px' : undefined,
    lineHeight: start ? '1.25' : undefined,
    padding: start ? '.36842em .84211em .21053em' : undefined,
    paddingRight: icon ? '.54211em' : '.84211em',
  }),
);

// TODO: start and iconUrl props
const Button = ({
  children,
  icon,
  className,
  ...props
}) => (
  <GButton icon={icon} className={className} {...props}>
    {children}
    {icon}
  </GButton>
);

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.node,
};

Button.defaultProps = {
  className: undefined,
  children: 'Button',
  icon: undefined,
};

export default withWhiteSpace({ marginBottom: 4 })(Button);
