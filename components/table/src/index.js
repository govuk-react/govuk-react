// https://govuk-elements.herokuapp.com/data/

import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import {
  FONT_SIZE,
  LINE_HEIGHT,
  MEDIA_QUERIES,
  NTA_LIGHT,
} from '@govuk-react/constants';

import Caption from './atoms/Caption';

const TableInner = glamorous.table({
  border: 0,
  borderCollapse: 'collapse',
  boxSizing: 'border-box',
  borderSpacing: 0,
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
});

const Table = ({ caption, children, ...props }) => (
  <TableInner {...props}>
    <Caption>{caption}</Caption>
    {children}
  </TableInner>
);

Table.defaultProps = {
  caption: undefined,
};

Table.propTypes = {
  children: PropTypes.node.isRequired,
  caption: PropTypes.string,
};

export default Table;
