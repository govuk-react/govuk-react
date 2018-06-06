import React from 'react';
import ReactDOM from 'react-dom';
import HiddenText from './';

describe(HiddenText, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HiddenText>Example</HiddenText>, div);
  });
});
