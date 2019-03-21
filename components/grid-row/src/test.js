import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import GridRow from '.';

describe('GridRow', () => {
  const wrapper = <GridRow>Example</GridRow>;

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(wrapper, div);
  });

  it('matches snapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('enzyme.mount');
  });
});
