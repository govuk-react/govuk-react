import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { createSerializer } from 'jest-emotion';
import * as emotion from 'emotion';

import ErrorText from './';

expect.addSnapshotSerializer(createSerializer(emotion));

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
