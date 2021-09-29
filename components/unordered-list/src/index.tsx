import type { WithWhiteSpaceProps } from '@govuk-react/lib';

import React from 'react';
import OrderedList from '@govuk-react/ordered-list';

interface UnorderedListProps extends WithWhiteSpaceProps {
  /** One or more ListItem components */
  children: React.ReactNode;
  /** CSS value for `list-style-type`, or `bullet` or `number` to match govuk-frontend */
  listStyleType?: string;
}

/**
 *
 * ### Usage
 *
 * Simple
 *
 * ```jsx
 * import { UnorderedList, ListItem} from 'govuk-react';
 *
 * <UnorderedList>
 *   <ListItem>Lorem ipsum dolor sit.</ListItem>
 *   <ListItem>Consectetur adipiscing elit.</ListItem>
 *   <ListItem>Curabitur et libero nec.</ListItem>
 * </UnorderedList>
 * ```
 *
 * With Roman
 *
 * ```jsx
 * import { UnorderedList, ListItem} from 'govuk-react';
 *
 * <UnorderedList listStyleType="lower-roman">
 *   <ListItem>Lorem ipsum dolor sit.</ListItem>
 *   <ListItem>Consectetur adipiscing elit.</ListItem>
 *   <ListItem>Curabitur et libero nec.</ListItem>
 * </UnorderedList>
 * ```
 *
 * ### References
 * - https://design-system.service.gov.uk/styles/typography/#lists
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/core/_lists.scss
 */

const UnorderedList = (props: UnorderedListProps) => <OrderedList as="ul" {...props} />;

UnorderedList.defaultProps = {
  listStyleType: undefined,
};

export default UnorderedList;
