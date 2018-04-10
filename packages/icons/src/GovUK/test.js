import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import GovUK from './';

const wrapper = <GovUK>Example</GovUK>;

describe(GovUK, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(wrapper, div);
  });

  it('matches wrapper snapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('wrapper mount');
  });
});
