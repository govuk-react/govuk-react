import React from 'react';
import ReactDOM from 'react-dom';
import Table from '../../';
import Caption from './';

describe(Caption, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Table><Caption>Example</Caption></Table>, div);
  });
});
