import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import PhaseBanner from './';

const example = 'example';
const wrapper = <PhaseBanner level="beta">{example}</PhaseBanner>;

describe(PhaseBanner, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(wrapper, div);
  });

  it('matches wrapper snapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('wrapper mount');
  });
});
