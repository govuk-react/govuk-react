import React from 'react';
import { mount } from 'enzyme';

import SectionBreak from '.';
import Example from './fixtures';

describe('SectionBreak', () => {
  it('renders without crashing', () => {
    mount(<SectionBreak />);
  });

  it('matches snapshot', () => {
    expect(mount(<Example />)).toMatchSnapshot('section break');
  });
});
