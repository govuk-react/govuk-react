import React from 'react';
import ReactDOM from 'react-dom';
import { createSerializer } from 'jest-emotion';
import { mount } from 'enzyme';
import * as emotion from 'emotion';

import Pagination from './';

expect.addSnapshotSerializer(createSerializer(emotion));

describe(Pagination, () => {
  const wrapper = <Pagination>Example</Pagination>;

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(wrapper, div);
  });

  it('matches wrapper snapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('wrapper mount');
  });
});
