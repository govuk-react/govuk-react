import React from 'react';
import ReactDOM from 'react-dom';
import Table from '../../';
import CellHeader from './';
import Row from '../Row';
import TableBody from '../TableBody';

const example = <Table><TableBody><Row><CellHeader>example</CellHeader></Row></TableBody></Table>;
const exampleAlignRight = (
  <Table>
    <TableBody>
      <Row>
        <CellHeader alignRight>example</CellHeader>
      </Row>
    </TableBody>
  </Table>
);
const exampleBold = (
  <Table>
    <TableBody>
      <Row>
        <CellHeader bold>example</CellHeader>
      </Row>
    </TableBody>
  </Table>
);

describe(CellHeader, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(example, div);
    ReactDOM.render(exampleAlignRight, div);
    ReactDOM.render(exampleBold, div);
  });
});
