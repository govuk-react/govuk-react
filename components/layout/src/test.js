import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import Layout from '.';

describe('Layout', () => {
  let props;
  const example = 'example';
  const wrapper = <Layout>{example}</Layout>;

  beforeEach(() => {
    props = {
      children: example,
    };
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Layout>Example</Layout>, div);
  });

  it('passes `props.children` to the rendered `wrapper` as `children`', () => {
    expect(wrapper.props.children).toBe(props.children);
  });

  it('matches wrapper snapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('wrapper mount');
  });
});
