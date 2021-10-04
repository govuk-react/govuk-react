/**
 * ### References
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/core/_lists.scss
 */
import styled from 'styled-components';
import { SPACING_POINTS } from '@govuk-react/constants';
import { spacing, typography } from '@govuk-react/lib';

/**
 * Use lists to make blocks of text easier to read, and to break information into manageable chunks.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/list-item
 * - https://design-system.service.gov.uk/styles/typography/#lists
 */
export const ListItem = styled('li')(
  typography.font({ size: 19 }),
  { marginBottom: SPACING_POINTS[1] },
  spacing.withWhiteSpace()
);

ListItem.displayName = 'ListItem';

export default ListItem;
