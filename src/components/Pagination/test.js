import React from 'react';
import ReactDOM from 'react-dom';
import Pagination from './';

describe(Pagination, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Pagination>Example</Pagination>, div);
  });
});
