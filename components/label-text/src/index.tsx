import styled from 'styled-components';
import React from 'react';
import { spacing, typography } from '@govuk-react/lib';

// TODO should `LabelText` and `Label` be consolidated?
// TODO add support for differing font sizes, as per govuk-frontend - see:
// https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/label/_label.scss

const StyledLabelText = styled('span')(
  typography.font({ size: 19 }),
  typography.textColour,
  {
    display: 'block',
    clear: 'none',
    paddingBottom: '2px',
  },
  spacing.withWhiteSpace({ marginBottom: 0 })
);

/**
 *
 * ### Usage
 *
 * Styled text to use as a label for a form input.
 *
 * This is not a label element by default as it is assumed it will be wrap with Label.
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
 *
 */
const LabelText: React.FC<LabelTextProps> = (props: LabelTextProps) => <StyledLabelText {...props} />;

interface LabelTextProps {
  /** Text for the label */
  children: React.ReactNode;
}

export default LabelText;
