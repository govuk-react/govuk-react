import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox-Dynamic from './';

describe(Checkbox-Dynamic, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Checkbox-Dynamic>Example</Checkbox-Dynamic>, div);
  });
});
