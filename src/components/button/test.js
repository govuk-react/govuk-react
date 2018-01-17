import React from 'react';
import ReactDOM from 'react-dom';
import Button from './';

import { shallow, mount, render } from 'enzyme';

describe('button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button>Example</Button>, div);
  });

  it('should render a button', () => {
    const output = shallow(
      <Button>Example</Button>
    );
    expect(output.find('button')).toBeTruthy();
  });

  it('should render a disabled button', () => {
    const output = shallow(
      <Button disabled="disabled">Example</Button>
    );
    expect(output.find('button[disabled="disabled"]')).toBeTruthy();
  });

});