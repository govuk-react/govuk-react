import * as React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import { Select } from '.';

describe('Select', () => {
  const example = 'example';
  const meta = {
    touched: true,
    error: example,
  };
  const wrapper = <Select label={example}>{example}</Select>;

  const wrapperErrorText = (
    <Select hint={example} errorText={example} meta={meta} label={example}>
      {example}
    </Select>
  );

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(wrapper, div);
  });

  it('matches snapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('enzyme.mount');
  });

  it('matches snapshot for errorText', () => {
    expect(mount(wrapperErrorText)).toMatchSnapshot('errorText mount');
  });
});
