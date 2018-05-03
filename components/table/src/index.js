// https://govuk-elements.herokuapp.com/data/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import {
  FONT_SIZE,
  LINE_HEIGHT,
  MEDIA_QUERIES,
  NTA_LIGHT,
} from '@govuk-react/constants';

import TableHeader from './atoms/TableHeader';
import TableBody from './atoms/TableBody';
import Caption from './atoms/Caption';

const StyledTable = styled('table')({
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

const Table = ({
  caption,
  body,
  head,
  ...props
}) => (
  <StyledTable {...props}>
    <Caption>{caption}</Caption>
    {head && <TableHeader>{head}</TableHeader>}
    <TableBody>{body}</TableBody>
  </StyledTable>
);

Table.defaultProps = {
  caption: undefined,
  head: undefined,
};

Table.propTypes = {
  body: PropTypes.node.isRequired,
  head: PropTypes.node,
  caption: PropTypes.string,
};

export default Table;
