import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';

import { InputField } from './';


describe('InputField', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<InputField>Example</InputField>, div);
  });

  it('should render an input type="text"', () => {
    const output = shallow(
      <InputField></InputField>
    );
    expect(output.find('input[type="text"]')).toBeTruthy();
  });

  it('should render a label', () => {
    const output = shallow(
      <InputField></InputField>
    );
    expect(output.find('label')).toBeTruthy();
  });

});
