// https://govuk-static.herokuapp.com/component-guide/government_navigation

import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import {
  FONT_SIZE,
  LINE_HEIGHT,
  MEDIA_QUERIES,
  NTA_LIGHT,
} from '@govuk-react/constants';

const GOrderedListInner = glamorous.ol(
  {
    margin: 0,
    padding: 0,
    paddingLeft: '20px',
    fontFamily: NTA_LIGHT,
    fontWeight: 400,
    textTransform: 'none',
    fontSize: FONT_SIZE.SIZE_14,
    lineHeight: LINE_HEIGHT.SIZE_14,
    width: '100%',
    [MEDIA_QUERIES.LARGESCREEN]: {
      fontSize: FONT_SIZE.SIZE_16,
      lineHeight: LINE_HEIGHT.SIZE_16,
    },
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
