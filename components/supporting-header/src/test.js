import React from 'react';
import { mount } from 'enzyme';

import SupportingHeader, { exampleHeading } from './fixtures';

describe('SupportingHeader', () => {
  let wrapper;

  it('renders without crashing', () => {
    wrapper = mount(<SupportingHeader>{exampleHeading}</SupportingHeader>);
  });

  it('matches wrapper snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
