/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/table/_table.scss
 */
import * as React from 'react';
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
 * Use the table component to make information easier to compare and scan for users.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/table
 * - https://design-system.service.gov.uk/components/table/
 */
export const Table: TableType = ({ caption, children, body = children, head, ...props }: TableProps) => (
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

Table.displayName = 'Table';

export interface TableType extends React.FC<TableProps> {
  CellHeader: typeof CellHeader;
  Row: typeof Row;
  Cell: typeof Cell;
  Header: typeof TableHeader;
}
export interface TableProps {
  /** Table body rows and cells (for backward compatibility) */
  body?: React.ReactNode;
  /** Table body rows and cells (recommended way) */
  children?: React.ReactNode;
  /** Table header rows and cells */
  head?: React.ReactNode;
  /** Table caption title */
  caption?: string;
}

Table.CellHeader = CellHeader;
Table.Row = Row;
Table.Cell = Cell;
Table.Header = TableHeader;

export default Table;
