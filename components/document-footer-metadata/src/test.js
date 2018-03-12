import React from 'react';
import ReactDOM from 'react-dom';
import DocumentFooterMetadata from './';

describe(DocumentFooterMetadata, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DocumentFooterMetadata>Example</DocumentFooterMetadata>, div);
  });
});
