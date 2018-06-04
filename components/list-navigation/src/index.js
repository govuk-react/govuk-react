import React from 'react';
import PropTypes from 'prop-types';
import UnorderedList from '@govuk-react/unordered-list';
import ListItem from '@govuk-react/list-item';
import { withWhiteSpace } from '@govuk-react/hoc';

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * <ListNavigation>
 *   <a href="/section-a">Section A</a>
 *   <a href="/section-b">Section B</a>
 * </ListNavigation>
 * ```
 *
 * Current recommended approach using the `asAnchor` HOC for GDS styled links
 * ```jsx
 * import { asAnchor } from '@govuk-react/hoc';
 *
 * const AnchorTag = asAnchor('a');
 *
 * <ListNavigation listStyleType="square">
 *   <AnchorTag href="https://example.com/link-a">Link A</AnchorTag>
 *   <AnchorTag href="https://example.com/link-b">Link B</AnchorTag>
 * </ListNavigation>
 * ```
 *
 * Using React Router and `asAnchor` HOC for GDS styled links
 * ```jsx
 * import { Link } from 'react-router-dom';
 * import { asAnchor } from '@govuk-react/hoc';
 *
 * const AnchorLink = asAnchor(Link);
 *
 * <ListNavigation listStyleType="circle">
 *   <AnchorLink to="/link-a">Link A</AnchorLink>
 *   <AnchorLink to="/link-b">Link B</AnchorLink>
 * </ListNavigation>
 * ```
 *
 * ### References:
 * - https://govuk-static.herokuapp.com/component-guide/government_navigation
 *
 * ### TODO:
 * - Consider using the context API https://github.com/reactjs/rfcs/blob/master/text/0002-new-version-of-context.md
 * - Consider nested anchors, should developers have to use the HOC to preserve link styling?
 * - Fix active state overlaping siblings
 */
const ListNavigation = ({ children, listStyleType, ...props }) => (
  <UnorderedList listStyleType={listStyleType} {...props}>
    {children.length && children.map ? (
      children.map((child, i) => (
        <ListItem key={child.key || i}>{child}</ListItem>
      ))
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

export default withWhiteSpace({ marginBottom: 0 })(ListNavigation);
