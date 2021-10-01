import * as React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import ArrowRight from '.';

const wrapper = <ArrowRight>Example</ArrowRight>;

describe('ArrowRight', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(wrapper, div);
  });

  it('matches wrapper snapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('wrapper mount');
  });
});
