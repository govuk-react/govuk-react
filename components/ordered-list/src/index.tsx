import type { WithWhiteSpaceProps } from '@govuk-react/lib';

import React from 'react';
import styled from 'styled-components';
import { MEDIA_QUERIES, SPACING_POINTS } from '@govuk-react/constants';
import { spacing, typography } from '@govuk-react/lib';
import ListItem from '@govuk-react/list-item';

function translateType(type) {
  return { bullet: 'disc', number: 'decimal' }[type] || type;
}

interface OrderedListProps extends WithWhiteSpaceProps {
  /** One or more ListItem components */
  children: React.ReactNode;
  /** CSS value for `list-style-type`, or `bullet` or `number` to match govuk-frontend */
  listStyleType?: string;
  as?: React.ElementType;
}

const OrderedList: React.FC<OrderedListProps> = styled('ol')(
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
      // TODO consider whether these spacing adjusts should be for all non-`none` styles
      // NB the inclusion of these ensures that withWhiteSpace's mb prop doesn't work on ListItem
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

/**
 *
 * ### Usage
 *
 * Simple
 *
 * ```jsx
 * import { OrderedList, ListItem } from 'govuk-react'
 *
 * <OrderedList>
 *   <ListItem>Lorem ipsum dolor sit.</ListItem>
 *   <ListItem>Consectetur adipiscing elit.</ListItem>
 *   <ListItem>Curabitur et libero nec.</ListItem>
 * </OrderedList>
 * ```
 *
 * With Roman
 *
 * ```jsx
 * import { OrderedList, ListItem } from 'govuk-react'
 *
 * <OrderedList listStyleType="lower-roman">
 *   <ListItem>Lorem ipsum dolor sit.</ListItem>
 *   <ListItem>Consectetur adipiscing elit.</ListItem>
 *   <ListItem>Curabitur et libero nec.</ListItem>
 * </OrderedList>
 * ```
 *
 * ### References
 * - https://design-system.service.gov.uk/styles/typography/#lists
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/core/_lists.scss
 *
 * ### TODO
 * - Consider using the context API https://github.com/reactjs/rfcs/blob/master/text/0002-new-version-of-context.md
 */
// Create a component wrapper for react-docgen only
const DocumentedComponent: React.FC<OrderedListProps> = ({ listStyleType = undefined, ...props }: OrderedListProps) => (
  <OrderedList listStyleType={listStyleType} {...props} />
);
DocumentedComponent.defaultProps = {
  listStyleType: undefined,
  as: undefined,
};

// Named export so react-docgen will generate docs
export { DocumentedComponent };
// Export un-wrapped styled component
export default OrderedList;
