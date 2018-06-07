import React from 'react';
import ReactDOM from 'react-dom';
import ErrorSummary from './';

describe(ErrorSummary, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ErrorSummary>Example</ErrorSummary>, div);
  });
});
