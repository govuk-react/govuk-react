import React from 'react';
import ReactDOM from 'react-dom';
import Table from '../../';
import TableBody from './';
import Row from '../Row';
import Cell from '../Cell';

describe(TableBody, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Table><TableBody><Row><Cell>Example</Cell></Row></TableBody></Table>, div);
  });
});
