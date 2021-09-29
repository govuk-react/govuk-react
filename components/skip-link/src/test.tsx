import React from 'react';
import { mount } from 'enzyme';

import { SkipLinkDocumented as SkipLink } from '.';

describe('SkipLink', () => {
  it('matches snapshot', () => {
    expect(mount(<SkipLink>Example</SkipLink>)).toMatchSnapshot('SkipLink');
  });
});
