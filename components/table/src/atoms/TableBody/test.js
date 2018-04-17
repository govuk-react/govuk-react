import React from 'react';
import ReactDOM from 'react-dom';
import TableBody from './';

describe(TableBody, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<table><TableBody><tr><td>Example</td></tr></TableBody></table>, div);
  });
});
