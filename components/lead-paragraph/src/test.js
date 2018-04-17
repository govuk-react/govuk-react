import React from 'react';
import ReactDOM from 'react-dom';
import LeadParagraph from './';

describe(LeadParagraph, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LeadParagraph>Example</LeadParagraph>, div);
  });
});
