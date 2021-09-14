import styled from 'styled-components';
import React from 'react';
import { ERROR_COLOUR } from 'govuk-colours';
import { SPACING_POINTS } from '@govuk-react/constants';
import { spacing, typography } from '@govuk-react/lib';

const StyledError = styled('span')(
  typography.font({ size: 19, weight: 'bold' }),
  {
    display: 'block',
    // NB non-responsive spacing
    marginBottom: SPACING_POINTS[3],
    clear: 'both',
    color: ERROR_COLOUR,
  },
  spacing.withWhiteSpace()
);

/**
 *
 * ### Usage
 *
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
 * ### References
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/error-message/_error-message.scss
 */
const ErrorText: React.FC<ErrorTextProps> = (props: ErrorTextProps) => <StyledError {...props} />;

interface ErrorTextProps {
  /** Text to describe the error */
  children: React.ReactNode;
}
export default ErrorText;
