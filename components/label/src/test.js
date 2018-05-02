import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { createSerializer } from 'jest-emotion';
import * as emotion from 'emotion';

import Label from './';

expect.addSnapshotSerializer(createSerializer(emotion));

describe('Label', () => {
  const example = 'example';
  const wrapper = <Label>{example}</Label>;
  const withError = <Label error={example}>{example}</Label>;

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(wrapper, div);
  });

  it('matches wrapper snapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('wrapper mount');
  });

  it('matches withError snapshot', () => {
    expect(mount(withError)).toMatchSnapshot('with error mount');
  });
});
