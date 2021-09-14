import React from 'react';
import styled from 'styled-components';
import { spacing, typography } from '@govuk-react/lib';

const StyledParagraph = styled('p')(
  typography.textColour,
  typography.font({ size: 24 }),
  { marginTop: 0 },
  spacing.withWhiteSpace({ marginBottom: 6 })
);

/**
 *
 * ### Usage
 *
 *
 * Simple
 *
 * ```jsx
 * import { LeadParagraph } from 'govuk-react'
 *
 * <LeadParagraph>LeadParagraph example</LeadParagraph>
 * ```
 *
 * ### References
 * - https://design-system.service.gov.uk/styles/typography/#paragraphs
 */
const LeadParagraph: React.FC<LeadParagraphProps> = (props: LeadParagraphProps) => <StyledParagraph {...props} />;

interface LeadParagraphProps {
  /** Text in the Lead paragraph */
  children: React.ReactNode;
}

export default LeadParagraph;
