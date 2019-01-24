import styled from 'react-emotion';
import PropTypes from 'prop-types';
import React from 'react';
import { withWhiteSpace } from '@govuk-react/hoc';
import {
  BORDER_WIDTH_FORM_ELEMENT,
  FOCUSABLE,
  MEDIA_QUERIES,
  SPACING_POINTS,
} from '@govuk-react/constants';
import { typography } from '@govuk-react/lib';
import {
  BUTTON_COLOUR,
  WHITE,
} from 'govuk-colours';
import { darken, stripUnit } from 'polished';

const BUTTON_SHADOW_SIZE = BORDER_WIDTH_FORM_ELEMENT;

const StyledButton = styled('button')(
  ({ isStart }) => typography.font({
    size: isStart ? 24 : 19,
    lineHeight: isStart ? '1' : '19px',
  }),
  FOCUSABLE,

  ({
    buttonColour = BUTTON_COLOUR,
    buttonHoverColour = darken(0.05, buttonColour),
    buttonShadowColour = darken(0.15, buttonColour),
    buttonTextColour = WHITE,
  }) => ({
    boxSizing: 'border-box',
    display: 'inline-block',
    position: 'relative',
    width: '100%',
    marginTop: 0,
    padding: `${
      stripUnit(SPACING_POINTS[2])
      - stripUnit(BORDER_WIDTH_FORM_ELEMENT)
      - (stripUnit(BUTTON_SHADOW_SIZE) / 2)
    }px ${SPACING_POINTS[2]}`,
    border: `${BORDER_WIDTH_FORM_ELEMENT} solid transparent`,
    borderRadius: 0,
    color: buttonTextColour,
    backgroundColor: buttonColour,
    boxShadow: `0 ${BUTTON_SHADOW_SIZE} 0 ${buttonShadowColour}`,
    textAlign: 'center',
    verticalAlign: 'top',
    cursor: 'pointer',
    WebkitAppearance: 'none',

    [MEDIA_QUERIES.TABLET]: {
      width: 'auto',
    },

    '&:link, &:visited, &:active, &:hover': {
      color: buttonTextColour,
      textDecoration: 'none',
    },

    '&::-moz-focus-inner': {
      padding: 0,
      border: 0,
    },

    '&:hover, &:focus': {
      backgroundColor: buttonHoverColour,
    },

    ':active': {
      top: BUTTON_SHADOW_SIZE,
      boxShadow: 'none',
    },

    // NB this is from govuk-frontend
    // Use a pseudo element to expand the click target area to include the
    // button's shadow as well, in case users try to click it.
    '::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: `-${BORDER_WIDTH_FORM_ELEMENT}`,
      right: `-${BORDER_WIDTH_FORM_ELEMENT}`,
      bottom: `-${stripUnit(BORDER_WIDTH_FORM_ELEMENT) + stripUnit(BUTTON_SHADOW_SIZE)}px`,
      left: `-${BORDER_WIDTH_FORM_ELEMENT}`,
      background: 'transparent',
    },

    '&:active::before': {
      top: `-${stripUnit(BORDER_WIDTH_FORM_ELEMENT) + stripUnit(BUTTON_SHADOW_SIZE)}px`,
    },

    ':disabled': {
      opacity: 0.5,
      background: buttonColour,
      ':hover': {
        backgroundColor: buttonColour,
        cursor: 'default',
      },
      ':focus': {
        outline: 'none',
      },
      ':active': {
        top: 0,
        boxShadow: `0 ${BUTTON_SHADOW_SIZE} 0 ${buttonShadowColour}`,
      },
    },

    ' svg': {
      maxWidth: '15px',
      marginLeft: SPACING_POINTS[4],
    },
  }),

  // NB we drift from govuk-frontend here in how we display icons
  ({ icon }) => {
    if (icon) {
      return {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      };
    }

    return undefined;
  },
);

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * <Button>My button text</Button>
 * ```
 *
 * With Icon
 * ```jsx
 * import { ButtonArrow } from '@govuk-react/icons';
 *
 * <Button icon={<ButtonArrow />}>My button text</Button>
 * ```
 *
 * ### References:
 * - https://design-system.service.gov.uk/components/button/
 * - https://github.com/alphagov/govuk-frontend/blob/master/src/components/button/_button.scss
 *
 * ### TODO:
 * - Remove cascade styling for nested elements, specifically `svg`
 * - Consider ensuring text colour automatically switches between black/white based on WCAG guidance
 *   - see https://www.w3.org/TR/WCAG20-TECHS/G18.html
 *   - can use Polished's `readableColor` call, but translate their black to govuk's black
 */
const Button = ({
  start,
  children,
  icon,
  ...props
}) => (
  <StyledButton isStart={start} icon={icon} {...props}>
    {children}
    {icon}
  </StyledButton>
);

Button.propTypes = {
  /**
   * Button text
   */
  children: PropTypes.node,
  /**
   * Button icon
   */
  icon: PropTypes.node,
  /**
   * Renders a large button if set to true
   */
  start: PropTypes.bool,
  /**
   * Renders a disabled button and removes pointer events if set to true
   */
  disabled: PropTypes.bool,
  /**
   * Override for default button colour
   */
  buttonColour: PropTypes.string,
  /**
   * Override for default button hover colour,
   * which defaults to `buttonColour` darkened by 5%
   */
  buttonHoverColour: PropTypes.string,
  /**
   * Override for default button shadow colour,
   * which defaults to `buttonColour` darkened by 15%
   */
  buttonShadowColour: PropTypes.string,
  /**
   * Override for default button text colour,
   * which defaults to govuk white
   */
  buttonTextColour: PropTypes.string,
};

Button.defaultProps = {
  children: 'Button',
  icon: undefined,
  disabled: false,
  start: false,
  buttonColour: undefined,
  buttonHoverColour: undefined,
  buttonShadowColour: undefined,
  buttonTextColour: undefined,
};

export default withWhiteSpace({ marginBottom: 6, adjustment: BUTTON_SHADOW_SIZE })(Button);
