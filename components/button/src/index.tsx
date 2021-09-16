import type { WithWhiteSpaceProps } from '@govuk-react/lib';

import styled from 'styled-components';
import React from 'react';
import { BORDER_WIDTH_FORM_ELEMENT, FOCUSABLE, MEDIA_QUERIES, SPACING_POINTS } from '@govuk-react/constants';
import { spacing, typography } from '@govuk-react/lib';
import { BUTTON_COLOUR, BUTTON_COLOUR_DARKEN_15, WHITE } from 'govuk-colours';
import { darken, stripUnit } from 'polished';

const BUTTON_SHADOW_SIZE = BORDER_WIDTH_FORM_ELEMENT;
const RAW_SPACING_2 = SPACING_POINTS[2];
const RAW_BORDER_WIDTH = Number(stripUnit(BORDER_WIDTH_FORM_ELEMENT));
const RAW_SHADOW = Number(stripUnit(BUTTON_SHADOW_SIZE));
const HALF_SHADOW = RAW_SHADOW / 2;
const BASE_PAD = RAW_SPACING_2 - RAW_BORDER_WIDTH;

const StyledButton = styled('button').withConfig<ButtonOwnProps & { isStart: boolean }>({
  shouldForwardProp: (prop) =>
    !['isStart', 'buttonColour', 'buttonHoverColour', 'buttonShadowColour', 'buttonTextColour', 'icon'].includes(
      String(prop)
    ),
})<ButtonOwnProps>(
  ({ isStart }) =>
    typography.font({
      size: isStart ? '24' : '19',
      lineHeight: isStart ? '1' : '19px',
      weight: isStart ? 'bold' : undefined,
    }),
  FOCUSABLE,

  ({
    buttonColour = BUTTON_COLOUR,
    buttonHoverColour = darken(0.05, buttonColour),
    buttonShadowColour = buttonColour === BUTTON_COLOUR ? BUTTON_COLOUR_DARKEN_15 : darken(0.15, buttonColour),
    buttonTextColour = WHITE,
    isStart,
  }) => ({
    boxSizing: 'border-box',
    display: 'inline-block',
    position: 'relative',
    width: '100%',
    marginTop: 0,
    padding: isStart // differs from govuk-frontend owing to how icons displayed
      ? `${BASE_PAD}px ${SPACING_POINTS[3]}px`
      : `${BASE_PAD - HALF_SHADOW}px ${SPACING_POINTS[2]}px`,
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
      bottom: `-${RAW_BORDER_WIDTH + RAW_SHADOW}px`,
      left: `-${BORDER_WIDTH_FORM_ELEMENT}`,
      background: 'transparent',
    },

    '&:active::before': {
      top: `-${RAW_BORDER_WIDTH + RAW_SHADOW}px`,
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
      [MEDIA_QUERIES.TABLET]: {
        marginLeft: SPACING_POINTS[2],
      },
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

  spacing.withWhiteSpace({
    margin: { direction: 'bottom', size: 6, adjustment: RAW_SHADOW },
  })
);

const ButtonContents = styled('span')({
  flexGrow: 1,
});

interface ButtonOwnProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, WithWhiteSpaceProps {
  /**
   * Button text
   */
  children: React.ReactNode;
  /**
   * Button icon
   */
  icon?: React.ReactNode;
  /**
   * Renders a large button if set to true
   */
  start?: boolean;
  /**
   * Renders a disabled button and removes pointer events if set to true
   */
  disabled?: boolean;
  /**
   * Override for default button colour
   */
  buttonColour?: string;
  /**
   * Override for default button hover colour,
   * which defaults to `buttonColour` darkened by 5%
   */
  buttonHoverColour?: string;
  /**
   * Override for default button shadow colour,
   * which defaults to `buttonColour` darkened by 15%
   */
  buttonShadowColour?: string;
  /**
   * Override for default button text colour,
   * which defaults to govuk white
   */
  buttonTextColour?: string;
  as?: React.ElementType;
}

// TODO: #953 These are props that are likely to be passed when using the `as` prop
interface ButtonProps extends ButtonOwnProps {
  to?: string;
}

/**
 *
 * ### Usage
 *
 * Simple
 *
 * ```jsx
 * import { Button } from 'govuk-react'
 *
 * <Button>My button text</Button>
 * ```
 *
 * With Icon
 *
 * ```jsx
 * import { ButtonArrow } from 'govuk-react'
 *
 * <Button icon={<ButtonArrow />}>My button text</Button>
 * ```
 *
 * ### References:
 *
 * - https://design-system.service.gov.uk/components/button/
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/button/_button.scss
 *
 * ### TODO:
 * - Remove cascade styling for nested elements, specifically `svg`
 * - Consider ensuring text colour automatically switches between black/white based on WCAG guidance
 *   - see https://www.w3.org/TR/WCAG20-TECHS/G18.html
 *   - can use Polished's `readableColor` call, but translate their black to govuk's black
 */
export const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>> =
  React.forwardRef(({ start, children, icon, ...props }: ButtonProps, ref) => (
    <StyledButton ref={ref} isStart={start} icon={icon} {...props}>
      {icon ? <ButtonContents>{children}</ButtonContents> : children}
      {icon}
    </StyledButton>
  ));

Button.defaultProps = {
  icon: undefined,
  disabled: false,
  start: false,
  buttonColour: undefined,
  buttonHoverColour: undefined,
  buttonShadowColour: undefined,
  buttonTextColour: undefined,
  as: undefined,
  // TODO: #953
  to: undefined,
};

export default Button;
