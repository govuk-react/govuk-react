import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import MultiChoice from './';

describe(MultiChoice, () => {
  const example = 'example';
  const meta = {
    touched: true,
    error: example,
  };
  const wrapper = (
    <MultiChoice meta={meta} hint={example} label={example}>
      {example}
    </MultiChoice>);

  const withError = (
    <MultiChoice label={example} error={example}>
      {example}
    </MultiChoice>);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      wrapper,
      div,
    );
  });

  it('matches wrapper snapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('wrapper mount');
  });

  it('matches withError snapshot', () => {
    expect(mount(withError)).toMatchSnapshot('with error mount');
  });
});
