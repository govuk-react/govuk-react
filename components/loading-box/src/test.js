import React from 'react';
import ReactDOM from 'react-dom';
import LoadingBox from './';

describe(LoadingBox, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LoadingBox>Example</LoadingBox>, div);
  });
});
