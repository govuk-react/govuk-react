import React from 'react';
import ReactDOM from 'react-dom';
import RelatedItems from './';

describe(RelatedItems, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RelatedItems>Example</RelatedItems>, div);
  });
});
