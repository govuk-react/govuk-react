import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { createSerializer } from 'jest-emotion';
import * as emotion from 'emotion';

import GridRow from './';

expect.addSnapshotSerializer(createSerializer(emotion));

describe(GridRow, () => {
  const wrapper = <GridRow />;

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GridRow>Example</GridRow>, div);
  });

  it('matches snapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('enzyme.mount');
  });
});
