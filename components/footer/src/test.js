import React from 'react';
import { mount } from 'enzyme';

import Footer from '.';

describe('Footer', () => {
  it('matches snapshot', () => {
    expect(mount(<Footer />)).toMatchSnapshot('Footer');
  });
});
