/**
 * ### References
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/core/_lists.scss
 */
import type { WithWhiteSpaceProps } from '@govuk-react/lib';

import * as React from 'react';
import OrderedList from '@govuk-react/ordered-list';

export interface UnorderedListProps extends WithWhiteSpaceProps {
  /** One or more ListItem components */
  children: React.ReactNode;
  /** CSS value for `list-style-type`, or `bullet` or `number` to match govuk-frontend */
  listStyleType?: string;
}

/**
 * Use lists to make blocks of text easier to read, and to break information into manageable chunks.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/ordered-list
 * - https://design-system.service.gov.uk/styles/typography/#lists
 */
export const UnorderedList: React.FC<UnorderedListProps> = (props: UnorderedListProps) => (
  <OrderedList as="ul" {...props} />
);

UnorderedList.defaultProps = {
  listStyleType: undefined,
};

UnorderedList.displayName = 'UnorderedList';

export default UnorderedList;
