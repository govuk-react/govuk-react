import React from 'react';
import PropTypes from 'prop-types';
import UnorderedList from '@govuk-react/unordered-list';
import ListItem from '@govuk-react/list-item';

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * import Link from '@govuk-react/link';
 *
 * <ListNavigation>
 *   <Link href="/section-a">Section A</Link>
 *   <Link href="/section-b">Section B</Link>
 * </ListNavigation>
 * ```
 *
 * Using React Router with `Link` component for GDS styled links
 * ```jsx
 * import { Link as RouterLink } from 'react-router-dom';
 * import { Link } from '@govuk-react/link';
 *
 * <ListNavigation listStyleType="circle">
 *   <Link as={RouterLink} to="/link-a">Link A</Link>
 *   <Link as={RouterLink} to="/link-b">Link B</Link>
 * </ListNavigation>
 * ```
 *
 * ### References:
 * - https://govuk-static.herokuapp.com/component-guide/government_navigation
 *
 * ### TODO:
 * - Consider using the context API https://github.com/reactjs/rfcs/blob/master/text/0002-new-version-of-context.md
 * - Fix active state overlaping siblings
 */
const ListNavigation = ({ children, listStyleType, ...props }) => (
  <UnorderedList listStyleType={listStyleType} {...props}>
    {children.length && children.map ? (
      children.map((child, i) => <ListItem key={child.key || i}>{child}</ListItem>)
    ) : (
      <ListItem>{children}</ListItem>
    )}
  </UnorderedList>
);

ListNavigation.defaultProps = {
  listStyleType: undefined,
};

ListNavigation.propTypes = {
  /**
   * List navigation content
   */
  children: PropTypes.node.isRequired,
  /**
   * CSS value for `list-style-type`
   */
  listStyleType: PropTypes.string,
};

export default ListNavigation;
