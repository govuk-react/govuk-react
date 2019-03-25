import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import HintText from '.';

describe('HintText', () => {
  const example = 'example';
  const wrapper = <HintText>{example}</HintText>;

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(wrapper, div);
  });

  it('matches wrapper snapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('wrapper mount');
  });
});
