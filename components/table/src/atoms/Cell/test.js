import React from 'react';
import ReactDOM from 'react-dom';
import Table from '../../';
import Cell from './';
import Row from '../Row';
import TableBody from '../TableBody';

const example = <Table><TableBody><Row><Cell alignRight>Example</Cell></Row></TableBody></Table>;

describe(Cell, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Table><TableBody><Row><Cell>Example</Cell></Row></TableBody></Table>, div);
    ReactDOM.render(example, div);
  });
});
