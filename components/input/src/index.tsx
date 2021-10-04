/**
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/
 */

import type { WithWhiteSpaceProps } from '@govuk-react/lib';

import * as React from 'react';
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
 * Use the text input component when you need to let users enter text that’s no longer than a single line, such as their name or phone number.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/input
 * - https://design-system.service.gov.uk/components/text-input/
 *
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
