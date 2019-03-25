// https://github.com/alphagov/govuk-frontend/blob/master/src/components/table/_table.scss

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { spacing, typography } from '@govuk-react/lib';

import TableHeader from './atoms/TableHeader';
import TableBody from './atoms/TableBody';
import Caption from './atoms/Caption';

import CellHeader from './atoms/CellHeader';
import Cell from './atoms/Cell';
import Row from './atoms/Row';

const StyledTable = styled('table')(
  typography.font({ size: 19 }),
  typography.textColour,
  {
    width: '100%',
    borderSpacing: 0,
    borderCollapse: 'collapse',
  },
  spacing.withWhiteSpace({ marginBottom: 6 })
);

/**
 *
 * ### Usage
 *
 * The Table component provides a construction kit of elements to create a table
 *
 * Component default
 * ```jsx
 * <Table caption="Dates and amounts">
 *  <Table.Row>
 *    <Table.CellHeader>First 6 weeks</Table.CellHeader>
 *    <Table.Cell>£109.80 per week</Table.Cell>
 *  </Table.Row>
 *  <Table.Row>
 *    <Table.CellHeader>Next 33 weeks</Table.CellHeader>
 *    <Table.Cell>£109.80 per week</Table.Cell>
 *  </Table.Row>
 *  <Table.Row>
 *    <Table.CellHeader>Total estimated pay</Table.CellHeader>
 *    <Table.Cell>£4,282.20</Table.Cell>
 *  </Table.Row>
 *  <Table.Row>
 *    <Table.CellHeader>Tell the mother&rsquo;s employer</Table.CellHeader>
 *    <Table.Cell>28 days before they want to start maternity pay</Table.Cell>
 *  </Table.Row>
 * </Table>
 * ```
 *
 * Numeric tabular data
 * ```jsx
 * const example2Head = (
 *   <Table.Row>
 *     <Table.CellHeader>Month you apply</Table.CellHeader>
 *     <Table.CellHeader numeric>Rate for vehicles</Table.CellHeader>
 *     <Table.CellHeader numeric>Rate for bicycles</Table.CellHeader>
 *   </Table.Row>
 * );
 *
 * <Table
 *  caption="Attention, I am the caption of this ship!"
 *  head={example2Head}
 * >
 *   <Table.Row>
 *     <Table.CellHeader>January</Table.CellHeader>
 *     <Table.Cell numeric>£165.00</Table.Cell>
 *     <Table.Cell numeric>£85.00</Table.Cell>
 *   </Table.Row>
 *   <Table.Row>
 *     <Table.CellHeader>February</Table.CellHeader>
 *     <Table.Cell numeric>£165.00</Table.Cell>
 *     <Table.Cell numeric>£85.00</Table.Cell>
 *   </Table.Row>
 *   <Table.Row>
 *     <Table.CellHeader>March</Table.CellHeader>
 *     <Table.Cell numeric>£151.00</Table.Cell>
 *     <Table.Cell numeric>£77.00</Table.Cell>
 *   </Table.Row>
 *   <Table.Row>
 *     <Table.CellHeader>April</Table.CellHeader>
 *     <Table.Cell numeric>£136.00</Table.Cell>
 *     <Table.Cell numeric>£70.00</Table.Cell>
 *   </Table.Row>
 * </Table>
 * ```
 *
 * Setting custom column widths
 * ```jsx
 * <Table
 *   caption="Custom header"
 *   head={
 *     <Table.Row>
 *       <Table.CellHeader setWidth="one-half>Wide header</Table.CellHeader>
 *       <Table.CellHeader setWidth="30%">Regular</Table.CellHeader>
 *       <Table.CellHeader>Normal</Table.CellHeader>
 *     </Table.Row>
 *   }
 * >
 *   <Table.Row>
 *     <Table.Cell>Header makes this column one-half wide</Table.Cell>
 *     <Table.Cell>And this one 30%</Table.Cell>
 *     <Table.Cell>Another</Table.Cell>
 *   </Table.Row>
 * </Table>
 * ```
 *
 * ### References:
 * - https://github.com/alphagov/govuk-frontend/blob/master/src/components/table/_table.scss
 *
 */
const Table = ({ caption, children, body = children, head, ...props }) => (
  <StyledTable {...props}>
    {caption && <Caption>{caption}</Caption>}
    {head && <TableHeader>{head}</TableHeader>}
    <TableBody>{body}</TableBody>
  </StyledTable>
);

Table.defaultProps = {
  body: undefined,
  caption: undefined,
  children: undefined,
  head: undefined,
};

Table.propTypes = {
  /** Table body rows and cells (for backward compatibility) */
  body: PropTypes.node,
  /** Table body rows and cells (recommended way) */
  children: PropTypes.node,
  /** Table header rows and cells */
  head: PropTypes.node,
  /** Table caption title */
  caption: PropTypes.string,
};

Table.CellHeader = CellHeader;
Table.Row = Row;
Table.Cell = Cell;
Table.Header = CellHeader;

export default Table;
