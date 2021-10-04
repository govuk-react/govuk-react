import styled from 'styled-components';
import { spacing, typography } from '@govuk-react/lib';

/**
 * A lead paragraph is an introductory paragraph that you can use at the top of a page to summarise the content.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/lead-paragraph
 * - https://design-system.service.gov.uk/styles/typography/#lead-paragraph
 */
export const LeadParagraph = styled('p')(
  typography.textColour,
  typography.font({ size: 24 }),
  { marginTop: 0 },
  spacing.withWhiteSpace({ marginBottom: 6 })
);

LeadParagraph.displayName = 'LeadParagraph';

export default LeadParagraph;
