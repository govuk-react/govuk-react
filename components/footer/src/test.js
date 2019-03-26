import React from 'react';
import { mount } from 'enzyme';

import { FooterDocumented as Footer } from '.';

describe('Footer', () => {
  it('matches snapshot', () => {
    expect(mount(<Footer>Footer example</Footer>)).toMatchSnapshot('Footer');
  });
});
