import React from 'react';
import ReactDOM from 'react-dom';
import { Textarea } from './';


import { shallow, mount, render } from 'enzyme';

describe('Textarea', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Textarea>Example</Textarea>, div);
  });
});


