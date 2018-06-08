import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import TextField, {
  TextFieldWithHint,
  TextFieldWithError,
} from './fixtures';

describe('TextField', () => {
  const example = 'example';
  const wrapper = <TextField>{example}</TextField>;
  const meta = {
    touched: true,
    error: example,
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <TextField hint={example} meta={meta}>
        {example}
      </TextField>,
      div,
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
