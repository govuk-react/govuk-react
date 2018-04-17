import React from 'react';
import ReactDOM from 'react-dom';
import Table from './';
import Row from './atoms/Row';
import Cell from './atoms/Cell';

const example = (
  <Row><Cell>Example</Cell></Row>
);

describe(Table, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Table body={example} />, div);
  });
});
