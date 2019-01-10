// https://govuk-elements.herokuapp.com/data/

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {
  FONT_SIZE,
  LINE_HEIGHT,
  MEDIA_QUERIES,
  NTA_LIGHT,
} from '@govuk-react/constants';

import TableHeader from './atoms/TableHeader';
import TableBody from './atoms/TableBody';
import Caption from './atoms/Caption';

import CellHeader from './atoms/CellHeader';
import Cell from './atoms/Cell';
import Row from './atoms/Row';

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

/**
 *
 * ### Usage
 *
 * Component default
 * ```jsx
 * const example1Body = (
 *  <React.Fragment>
 *    <Table.Row>
 *      <Table.CellHeader>First 6 weeks</Table.CellHeader>
 *      <Table.Cell>£109.80 per week</Table.Cell>
 *    </Table.Row>
 *    <Table.Row>
 *      <Table.Cell>Next 33 weeks</Table.Cell>
 *      <Table.Cell>£109.80 per week</Table.Cell>
 *    </Table.Row>
 *    <Table.Row>
 *      <Table.Cell>Total estimated pay</Table.Cell>
 *      <Table.Cell>£4,282.20</Table.Cell>
 *    </Table.Row>
 *    <Table.Row>
 *      <Table.Cell>Tell the mother&rsquo;s employer</Table.Cell>
 *      <Table.Cell>28 days before they want to start maternity pay</Table.Cell>
 *    </Table.Row>
 *  </React.Fragment>
 * );
 *
 * <Table caption="Dates and amounts" body={example1Body} />
 * ```
 *
 * Numeric tabular data
 * ```jsx
 * const example2Head = (
 *   <Table.Row>
 *     <Table.CellHeader>Month you apply</Table.CellHeader>
 *     <Table.CellHeader alignRight>Rate for vehicles</Table.CellHeader>
 *     <Table.CellHeader alignRight>Rate for bicycles</Table.CellHeader>
 *   </Table.Row>
 * );
 *
 * const example2Body = (
 *   <React.Fragment>
 *     <Table.Row>
 *       <Table.CellHeader>January</Table.CellHeader>
 *       <Table.Cell alignRight>£165.00</Table.Cell>
 *       <Table.Cell alignRight>£85.00</Table.Cell>
 *     </Table.Row>
 *     <Table.Row>
 *       <Table.CellHeader>February</Table.CellHeader>
 *       <Table.Cell alignRight>£165.00</Table.Cell>
 *       <Table.Cell alignRight>£85.00</Table.Cell>
 *     </Table.Row>
 *     <Table.Row>
 *       <Table.CellHeader>March</Table.CellHeader>
 *       <Table.Cell alignRight>£151.00</Table.Cell>
 *       <Table.Cell alignRight>£77.00</Table.Cell>
 *     </Table.Row>
 *     <Table.Row>
 *       <Table.CellHeader>April</Table.CellHeader>
 *       <Table.Cell alignRight>£136.00</Table.Cell>
 *       <Table.Cell alignRight>£70.00</Table.Cell>
 *     </Table.Row>
 *   </React.Fragment>
 * );
 *
 * <Table
 *  caption="Attention, I am the caption of this ship!"
 *  head={example2Head}
 *  body={example2Body}
 * />
 * ```
 *
 * ### References:
 * - https://govuk-elements.herokuapp.com/alpha-beta-banners/
 *
 */
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
  /** Table body rows and cells */
  body: PropTypes.node.isRequired,
  /** Table header rows and cells */
  head: PropTypes.node,
  /** Table caption title */
  caption: PropTypes.string,
};

Table.CellHeader = CellHeader;
Table.Row = Row;
Table.Cell = Cell;

export default Table;
