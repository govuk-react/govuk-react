import React from 'react';
import ReactDOM from 'react-dom';
import Table from './';

describe(Table, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Table>Example</Table>, div);
  });
});
