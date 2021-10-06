/**
 * ### References
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/hint/_hint.scss
 */

import styled from 'styled-components';
import { SECONDARY_TEXT_COLOUR } from 'govuk-colours';
import { SPACING_POINTS } from '@govuk-react/constants';
import { spacing, typography } from '@govuk-react/lib';

/**
 * Use hint text alongside a form input for help that’s relevant to the majority of users, like how their information will be used, or where to find it.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/hint-text
 * - https://design-system.service.gov.uk/components/text-input/#hint-text
 */
export const HintText = styled('span')(
  typography.font({ size: 19 }),
  {
    display: 'block',
    // NB non-responsive marginBottom here
    marginBottom: SPACING_POINTS[3],
    color: `${SECONDARY_TEXT_COLOUR}`,
  },
  spacing.withWhiteSpace()
);
HintText.displayName = 'HintText';

export default HintText;
