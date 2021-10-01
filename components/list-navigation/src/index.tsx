import * as React from 'react';
import UnorderedList from '@govuk-react/unordered-list';
import ListItem from '@govuk-react/list-item';

export interface ListNavigationProps {
  /**
   * List navigation content
   */
  children: React.ReactNode;
  /**
   * CSS value for `list-style-type`
   */
  listStyleType?: string;
}

/**
 *
 * ### Usage
 *
 * Simple
 *
 * ```jsx
 * import { ListNavigation, Link } from 'govuk-react';
 *
 * <ListNavigation>
 *   <Link href="/section-a">Section A</Link>
 *   <Link href="/section-b">Section B</Link>
 * </ListNavigation>
 * ```
 *
 * Using React Router with `Link` component for GDS styled links
 *
 * ```jsx
 * import { Link as RouterLink } from 'react-router-dom';
 * import { ListNavigation, Link } from 'govuk-react';
 *
 * <ListNavigation listStyleType="circle">
 *   <Link as={RouterLink} to="/link-a">Link A</Link>
 *   <Link as={RouterLink} to="/link-b">Link B</Link>
 * </ListNavigation>
 * ```
 *
 * ### References:
 *
 * - https://govuk-static.herokuapp.com/component-guide/government_navigation
 */
export const ListNavigation: React.FC<ListNavigationProps> = ({
  children,
  listStyleType,
  ...props
}: ListNavigationProps) => (
  <UnorderedList listStyleType={listStyleType} {...props}>
    {Array.isArray(children) && children.length ? (
      React.Children.map(children, (child) => <ListItem>{child}</ListItem>)
    ) : (
      <ListItem>{children}</ListItem>
    )}
  </UnorderedList>
);

ListNavigation.defaultProps = {
  listStyleType: undefined,
};

ListNavigation.displayName = 'ListNavigation';

export default ListNavigation;
