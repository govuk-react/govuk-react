// TODO: this does not currently test the purpose of src/index.js
// It should:
// - ensure all components are exported
// - ensure all exports are components or functions
import React from 'react';
import ReactDOM from 'react-dom';

import { MultiChoice } from './index';

describe('MultiChoice', () => {
  const example = 'example';
  const wrapper = <MultiChoice label={example}>{example}</MultiChoice>;

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(wrapper, div);
  });
});
