import React from 'react';
import { mount } from 'enzyme';

import Example, { LinkWithAllOptionsOn } from './fixtures';

describe('Link', () => {
  it('basic view matches snapshot', () => {
    expect(mount(<Example />)).toMatchSnapshot('plain link');
  });

  it('all options view matches snapshot', () => {
    expect(mount(<LinkWithAllOptionsOn />)).toMatchSnapshot('link with all options');
  });
});
