import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import Header from '.';
import { H1, H2, H3, H4, H5, H6 } from './presets';

describe('Header', () => {
  const example = 'example';
  const wrapper = <Header>{example}</Header>;

  it('renders a Header and all the H-level tags without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(wrapper, div);
    ReactDOM.render(<H1>{example}</H1>, div);
    ReactDOM.render(<H2>{example}</H2>, div);
    ReactDOM.render(<H3>{example}</H3>, div);
    ReactDOM.render(<H4>{example}</H4>, div);
    ReactDOM.render(<H5>{example}</H5>, div);
    ReactDOM.render(<H6>{example}</H6>, div);
  });

  it('matches wrapper snapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('wrapper mount');
  });
});
