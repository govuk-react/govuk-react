import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { createSerializer } from 'jest-emotion';
import * as emotion from 'emotion';

import LeadParagraph from './';

expect.addSnapshotSerializer(createSerializer(emotion));

describe(LeadParagraph, () => {
  const example = 'example';
  const wrapper = <LeadParagraph>{example}</LeadParagraph>;

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LeadParagraph>Example</LeadParagraph>, div);
  });

  it('matches wrapper snapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('wrapper mount');
  });
});
