// https://govuk-static.herokuapp.com/component-guide/government_navigation

import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

const GUnorderedList = glamorous.ul(
  {
    boxSizing: 'border-box',
    width: '100%',
  },
  ({ listStyleType }) => ({
    listStyleType: listStyleType || undefined,
    marginLeft: listStyleType === 'none' ? 0 : undefined,
    paddingLeft: listStyleType === 'none' ? 0 : undefined,
  }),
);

// listStyleType: normal HTML property values are used here
// e.g., listStyleType="circle", listStyleType="upper-alpha", listStyleType="none"
const UnorderedList = ({ children, listStyleType }) => (
  <GUnorderedList listStyleType={listStyleType}>{children}</GUnorderedList>
);

UnorderedList.defaultProps = {
  listStyleType: undefined,
};

UnorderedList.propTypes = {
  children: PropTypes.node.isRequired,
  listStyleType: PropTypes.string,
};

export default UnorderedList;
