import React from 'react';
import ReactDOM from 'react-dom';
import InsetText from './';

describe(InsetText, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<InsetText>Example</InsetText>, div);
  });
});
