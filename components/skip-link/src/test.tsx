import * as React from 'react';
import { mount } from 'enzyme';

import { SkipLink } from '.';

describe('SkipLink', () => {
  it('matches snapshot', () => {
    expect(mount(<SkipLink>Example</SkipLink>)).toMatchSnapshot('SkipLink');
  });
});
