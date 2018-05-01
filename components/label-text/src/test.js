import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { createSerializer } from 'jest-emotion';
import * as emotion from 'emotion';

import LabelText from './';

expect.addSnapshotSerializer(createSerializer(emotion));

describe('LabelText', () => {
  let props;
  const example = 'example';
  const wrapper = <LabelText error={example}>{example}</LabelText>;
  const noError = <LabelText>{example}</LabelText>;

  beforeEach(() => {
    props = {
      children: example,
    };
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(wrapper, div);
  });

  it('passes `props.children` to the rendered `wrapper` as `children`', () => {
    expect(wrapper.props.children).toBe(props.children);
  });

  it('matches wrapper snapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('wrapper mount');
  });

  it('matches noError snapshot', () => {
    expect(mount(noError)).toMatchSnapshot('no error mount');
  });
});
