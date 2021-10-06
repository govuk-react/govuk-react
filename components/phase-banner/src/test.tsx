import * as React from 'react';
import { mount } from 'enzyme';

import { PhaseBanner } from '.';

describe('PhaseBanner', () => {
  it('matches wrapper snapshot', () => {
    expect(mount(<PhaseBanner level="beta">example</PhaseBanner>)).toMatchSnapshot('wrapper mount');
  });
});
