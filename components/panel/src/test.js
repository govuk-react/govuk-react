import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { createSerializer } from 'jest-emotion';
import * as emotion from 'emotion';

import Panel from './';

expect.addSnapshotSerializer(createSerializer(emotion));

describe('Panel', () => {
  let props;
  const titleExample = 'Example';
  const bodyExample = 'body';
  const wrapper = <Panel panelTitle={titleExample} panelBody={bodyExample} />;

  beforeEach(() => {
    props = {
      titleExample,
      bodyExample,
    };
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(wrapper, div);
  });

  it('passes `props.children` to the rendered `wrapper` as `children`', () => {
    expect(wrapper.props.panelTitle).toBe(props.titleExample);
    expect(wrapper.props.panelBody).toBe(props.bodyExample);
  });

  it('matches wrapper snapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('wrapper mount');
  });
});
