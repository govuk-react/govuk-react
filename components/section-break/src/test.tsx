import * as React from 'react';
import { mount } from 'enzyme';

import { SectionBreak } from '.';

describe('SectionBreak', () => {
  it('renders without crashing', () => {
    mount(<SectionBreak />);
  });

  it('matches snapshot', () => {
    expect(mount(<SectionBreak visible level="LARGE" />)).toMatchSnapshot('section break');
  });
});
