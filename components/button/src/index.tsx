/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/button/_button.scss
 */

import type { StyledComponentProps } from 'styled-components';

import type { WithWhiteSpaceProps } from '@govuk-react/lib';

import styled from 'styled-components';
import * as React from 'react';
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

const StyledButton = styled('button').withConfig<StyledButtonOwnProps>({
  shouldForwardProp: (prop) =>
    !['isStart', 'buttonColour', 'buttonHoverColour', 'buttonShadowColour', 'buttonTextColour', 'icon'].includes(
      String(prop)
    ),
})<StyledButtonOwnProps>(
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

interface StyledButtonOwnProps extends WithWhiteSpaceProps {
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
  /**
   * Button icon
   */
  icon?: React.ReactNode;
  /**
   * Renders a large button if set to true
   */
  isStart?: boolean;
}

interface ButtonOwnProps extends WithWhiteSpaceProps {
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
}

/**
 * Use the button component to help users carry out an action like starting an application or saving their information.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/button
 * - https://design-system.service.gov.uk/components/button/
 */
export const Button: ButtonType = React.forwardRef(
  ({ start, children, icon, ...props }: ButtonOwnProps, ref: ButtonRefType) => (
    <StyledButton ref={ref} isStart={start} icon={icon} {...props}>
      {icon ? <ButtonContents>{children}</ButtonContents> : children}
      {icon}
    </StyledButton>
  )
);

type ButtonRefType = React.Ref<HTMLButtonElement>;

export interface ButtonType extends React.ForwardRefExoticComponent<ButtonOwnProps> {
  (props: ButtonPropsWithoutAs, ref?: ButtonRefType): React.ReactElement<ButtonPropsWithoutAs>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <AsC extends string | React.ComponentType<any> = 'button', FAsC extends string | React.ComponentType<any> = AsC>(
    props: ButtonPropsWithAs<AsC, FAsC>,
    ref?: React.Ref<AsC>
  ): React.ReactElement<ButtonPropsWithAs<AsC, FAsC>>;
}

type ButtonPropsWithoutAs = StyledComponentProps<'button', never, ButtonOwnProps, never> & {
  as?: never | undefined;
  forwardedAs?: never | undefined;
};

type ButtonPropsWithAs<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  AsC extends string | React.ComponentType<any>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  FAsC extends string | React.ComponentType<any> = AsC
> = StyledComponentProps<AsC, never, ButtonOwnProps, never, FAsC> & {
  as?: AsC | undefined;
  forwardedAs?: FAsC | undefined;
};

Button.defaultProps = {
  icon: undefined,
  start: false,
  buttonColour: undefined,
  buttonHoverColour: undefined,
  buttonShadowColour: undefined,
  buttonTextColour: undefined,
};

Button.displayName = 'Button';

export default Button;
