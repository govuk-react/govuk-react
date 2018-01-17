import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from './';

import { shallow, mount, render } from 'enzyme';

describe('Checkbox', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Checkbox>Example</Checkbox>, div);
  });

  it('should render an input type="checkbox"', () => {
    const output = shallow(
      <Checkbox></Checkbox>
    );
    expect(output.find('input[type="checkbox"]')).toBeTruthy();
  });

  it('should render a label', () => {
    const output = shallow(
      <Checkbox></Checkbox>
    );
    expect(output.find('label')).toBeTruthy();
  });
});