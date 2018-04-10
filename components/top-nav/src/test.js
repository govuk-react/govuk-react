import React from 'react';
import ReactDOM from 'react-dom';
import TopNav from './';

describe(TopNav, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TopNav>Example</TopNav>, div);
  });
});
