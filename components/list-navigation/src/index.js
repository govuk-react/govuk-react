// https://govuk-static.herokuapp.com/component-guide/government_navigation

import React from 'react';
import PropTypes from 'prop-types';

import UnorderedList from '@govuk-react/unordered-list';
import ListItem from '@govuk-react/list-item';

// TODO use Context API https://github.com/reactjs/rfcs/blob/master/text/0002-new-version-of-context.md
const ListNavigation = ({ children, listStyleType }) => (
  <UnorderedList listStyleType={listStyleType}>
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
  children: PropTypes.node.isRequired,
  listStyleType: PropTypes.string,
};

export default ListNavigation;
