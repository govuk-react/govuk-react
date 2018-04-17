import React from 'react';
import ReactDOM from 'react-dom';
import Caption from './';

describe(Caption, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<table><Caption>Example</Caption></table>, div);
  });
});
