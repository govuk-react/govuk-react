import styled from 'styled-components';
import { spacing, typography } from '@govuk-react/lib';

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
export const LeadParagraph = styled('p')(
  typography.textColour,
  typography.font({ size: 24 }),
  { marginTop: 0 },
  spacing.withWhiteSpace({ marginBottom: 6 })
);

LeadParagraph.displayName = 'LeadParagraph';

export default LeadParagraph;
