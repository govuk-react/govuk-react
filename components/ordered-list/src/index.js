// https://govuk-static.herokuapp.com/component-guide/government_navigation

import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

const GOrderedListInner = glamorous.ol(
  {
    margin: 0,
    padding: 0,
    paddingLeft: '20px',
    width: '100%',
  },
  ({ listStyleType }) => ({
    listStyleType: listStyleType || undefined,
    marginLeft: listStyleType === 'none' ? 0 : undefined,
    paddingLeft: listStyleType === 'none' ? 0 : undefined,
  }),
);

const OrderedList = ({ children, listStyleType }) => (
  <GOrderedListInner listStyleType={listStyleType}>{children}</GOrderedListInner>
);

OrderedList.defaultProps = {
  listStyleType: undefined,
};

OrderedList.propTypes = {
  children: PropTypes.node.isRequired,
  listStyleType: PropTypes.string,
};

export default OrderedList;
