import type { WithWhiteSpaceProps } from '@govuk-react/lib';

import React from 'react';
import styled from 'styled-components';

import { BLACK, ERROR_COLOUR } from 'govuk-colours';
import {
  BORDER_WIDTH_FORM_ELEMENT,
  BORDER_WIDTH_FORM_ELEMENT_ERROR,
  FOCUSABLE,
  SPACING_POINTS,
} from '@govuk-react/constants';
import { spacing, typography } from '@govuk-react/lib';

/**
 *
 * ### Usage
 *
 * Simple
 *
 * ```jsx
 * import { Label, LabelText, HintText, ErrorText, Input } from 'govuk-react'
 *
 * <Label>
 *   <LabelText>Example label</LabelText>
 *   <HintText>Example hint</HintText>
 *   <ErrorText>Example error</ErrorText>
 *   <Input value={value} onClick={onClick} />
 * </Label>
 * ```
 *
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/
 */
export const Input = styled('input')<InputProps>(
  typography.font({ size: 19 }),
  FOCUSABLE,
  {
    boxSizing: 'border-box',
    width: '100%',
    height: '40px',
    marginTop: 0,

    padding: SPACING_POINTS[1],
    // TODO replace BLACK here with INPUT_BORDER_COLOUR when supported in govuk-colours
    border: `${BORDER_WIDTH_FORM_ELEMENT} solid ${BLACK}`,
    borderRadius: 0,

    appearance: 'none',

    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
      margin: 0,
      WebkitAppearance: 'none',
    },

    '&[type="number"]': {
      MozAppearance: 'textfield',
    },
  },
  ({ error, errorColor }) => ({
    border: error ? `${BORDER_WIDTH_FORM_ELEMENT_ERROR} solid ${errorColor || ERROR_COLOUR}` : undefined,
  }),
  spacing.withWhiteSpace({ marginBottom: 0 })
);

Input.defaultProps = {
  type: 'text',
  error: false,
  errorColor: undefined,
};

Input.displayName = 'Input';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, WithWhiteSpaceProps {
  error?: boolean;
  errorColor?: string;
}

export default Input;
