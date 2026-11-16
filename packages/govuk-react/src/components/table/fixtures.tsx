import * as React from 'react';

import { Table } from '.';

const TableSimple: React.FC = () => (
  <Table>
    <Table.Row>
      <Table.CellHeader>First 6 weeks</Table.CellHeader>
      <Table.Cell>£109.80 per week</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.CellHeader>Next 33 weeks</Table.CellHeader>
      <Table.Cell>£109.80 per week</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.CellHeader>Total estimated pay</Table.CellHeader>
      <Table.Cell>£4,282.20</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.CellHeader>Tell the mother&rsquo;s employer</Table.CellHeader>
      <Table.Cell>28 days before they want to start maternity pay</Table.Cell>
    </Table.Row>
  </Table>
);

const TableWithCaption: React.FC = () => (
  <Table
    caption="Dates and amounts"
    body={
      <>
        <Table.Row>
          <Table.CellHeader>First 6 weeks</Table.CellHeader>
          <Table.Cell>£109.80 per week</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>Next 33 weeks</Table.CellHeader>
          <Table.Cell>£109.80 per week</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>Total estimated pay</Table.CellHeader>
          <Table.Cell>£4,282.20</Table.Cell>
        </Table.Row>
      </>
    }
  />
);

const exampleHead = (
  <Table.Row>
    <Table.CellHeader>Month you apply</Table.CellHeader>
    <Table.CellHeader numeric>Rate for vehicles</Table.CellHeader>
    <Table.CellHeader numeric>Rate for bicycles</Table.CellHeader>
  </Table.Row>
);

const TableWithHeadAndNumerics: React.FC = () => (
  <Table caption="Attention, I am the caption of this ship!" head={exampleHead}>
    <Table.Row>
      <Table.CellHeader>January</Table.CellHeader>
      <Table.Cell numeric>£165.00</Table.Cell>
      <Table.Cell numeric>£85.00</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.CellHeader>February</Table.CellHeader>
      <Table.Cell numeric>£165.00</Table.Cell>
      <Table.Cell numeric>£85.00</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.CellHeader>March</Table.CellHeader>
      <Table.Cell numeric>£151.00</Table.Cell>
      <Table.Cell numeric>£77.00</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.CellHeader>April</Table.CellHeader>
      <Table.Cell numeric>£136.00</Table.Cell>
      <Table.Cell numeric>£70.00</Table.Cell>
    </Table.Row>
  </Table>
);

const TableThreeQuartersOneQuarter: React.FC = () => (
  <Table
    caption="Three quarters, one quarter"
    head={
      <Table.Row>
        <Table.CellHeader setWidth="three-quarters">three-quarters</Table.CellHeader>
        <Table.CellHeader setWidth="one-quarter">one-quarter</Table.CellHeader>
      </Table.Row>
    }
  >
    <Table.Row>
      <Table.Cell>Column uses setWidth=&quot;three-quarters&quot; in header</Table.Cell>
      <Table.Cell>setWidth=&quot;one-quarter&quot;</Table.Cell>
    </Table.Row>
  </Table>
);

const TableWithCustomWidths: React.FC = () => (
  <Table
    caption="Custom widths"
    head={
      <Table.Row>
        <Table.CellHeader setWidth="one-half">one-half</Table.CellHeader>
        <Table.CellHeader setWidth="22%">22%</Table.CellHeader>
        <Table.CellHeader>Normal</Table.CellHeader>
      </Table.Row>
    }
  >
    <Table.Row>
      <Table.Cell>Column uses setWidth=&quot;one-half&quot; in header</Table.Cell>
      <Table.Cell>setWidth=&quot;22%&quot;</Table.Cell>
      <Table.Cell>Not specified</Table.Cell>
    </Table.Row>
  </Table>
);

export { TableSimple, TableWithCaption, TableWithHeadAndNumerics, TableWithCustomWidths, TableThreeQuartersOneQuarter };

export default Table;
