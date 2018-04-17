import React from 'react';
import ReactDOM from 'react-dom';
import Table from '../../';
import Row from './';
import Cell from '../Cell';
import TableBody from '../TableBody';

describe(Row, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Table><TableBody><Row><Cell>Example</Cell></Row></TableBody></Table>, div);
  });
});
