// https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/

import styled from 'styled-components';
import React from 'react';
import { SECONDARY_TEXT_COLOUR } from 'govuk-colours';
import { SPACING_POINTS } from '@govuk-react/constants';
import { spacing, typography } from '@govuk-react/lib';

const StyledHint = styled('span')(
  typography.font({ size: 19 }),
  {
    display: 'block',
    // NB non-responsive marginBottom here
    marginBottom: SPACING_POINTS[3],
    color: `${SECONDARY_TEXT_COLOUR}`,
  },
  spacing.withWhiteSpace()
);

// NB govuk-frontend has styling adjustments for when hint-text is placed next to some other
// components - we have not tried to replicate that here

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
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/hint/_hint.scss
 */
const HintText: React.FC<HintTextProps> = (props: HintTextProps) => <StyledHint {...props} />;

interface HintTextProps {
  /** Text for the hint */
  children: React.ReactNode;
}

export default HintText;
