import React from 'react';
import ReactDOM from 'react-dom';
import Cell from './';

const example = <table><tbody><tr><Cell alignRight>Example</Cell></tr></tbody></table>;

describe('Cell', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<table><tbody><tr><Cell>Example</Cell></tr></tbody></table>, div);
    ReactDOM.render(example, div);
  });
});
