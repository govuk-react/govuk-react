import * as React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import { InputField } from '.';

describe('InputField', () => {
  const example = 'example';
  const wrapper = <InputField>{example}</InputField>;
  const meta = {
    touched: true,
    error: example,
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <InputField hint={example} meta={meta}>
        {example}
      </InputField>,
      div
    );
  });

  it('should render an input type="text"', () => {
    const output = shallow(wrapper);
    expect(output.find('input[type="text"]')).toBeTruthy();
  });

  it('should render a label', () => {
    const output = shallow(wrapper);
    expect(output.find('label')).toBeTruthy();
  });

  it('matches wrapper snapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('wrapper mount');
  });
});
