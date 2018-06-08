import React from 'react';
import ReactDOM from 'react-dom';
import WarningText from './';

describe(WarningText, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WarningText>Example</WarningText>, div);
  });
});
