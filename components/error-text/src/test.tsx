import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import ErrorText from '.';

describe('ErrorText', () => {
  const example = 'example';
  const wrapper = <ErrorText>{example}</ErrorText>;

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(wrapper, div);
  });

  it('matches wrapper snapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('wrapper mount');
  });
});
