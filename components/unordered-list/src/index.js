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

const GUnorderedList = glamorous.ul(
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
