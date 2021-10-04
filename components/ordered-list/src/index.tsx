/**
 * ### References
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/core/_lists.scss
 */
import type { WithWhiteSpaceProps } from '@govuk-react/lib';

import styled from 'styled-components';
import { MEDIA_QUERIES, SPACING_POINTS } from '@govuk-react/constants';
import { spacing, typography } from '@govuk-react/lib';
import ListItem from '@govuk-react/list-item';

function translateType(type) {
  return { bullet: 'disc', number: 'decimal' }[type] || type;
}

export interface OrderedListProps extends WithWhiteSpaceProps {
  listStyleType?: string;
}

/**
 * Use lists to make blocks of text easier to read, and to break information into manageable chunks.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/ordered-list
 * - https://design-system.service.gov.uk/styles/typography/#lists
 */
export const OrderedList = styled('ol')<OrderedListProps>(
  typography.font({ size: 19 }),
  typography.textColour,
  {
    marginTop: 0,

    '& &': {
      marginTop: SPACING_POINTS[2],
    },
  },
  spacing.withWhiteSpace({ margin: { size: 4, direction: 'bottom' } }),
  ({ listStyleType }) => {
    const type = translateType(listStyleType);

    return [
      { listStyleType: type },
      type === 'none'
        ? {
            paddingLeft: 0,
          }
        : {
            paddingLeft: SPACING_POINTS[4],
          },
      // the inclusion of these means that withWhiteSpace's mb prop doesn't work on ListItem
      ['disc', 'decimal'].includes(type)
        ? {
            [`> ${ListItem}`]: {
              marginBottom: 0,
              [MEDIA_QUERIES.TABLET]: {
                marginBottom: SPACING_POINTS[1],
              },
            },
          }
        : {
            // Style when not disc/decimal
            [`> ${ListItem}`]: {
              marginBottom: SPACING_POINTS[1],
            },
          },
    ];
  }
);

OrderedList.defaultProps = {
  listStyleType: undefined,
};

OrderedList.displayName = 'OrderedList';

// Export un-wrapped styled component
export default OrderedList;
