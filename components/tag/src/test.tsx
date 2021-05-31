import React from 'react';
import { mount } from 'enzyme';

import Tag, { TagInactive } from './fixtures';

describe('Tag', () => {
  it('can render an inactive tag', () => {
    mount(<TagInactive>alpha</TagInactive>);
  });

  it('matches wrapper snapshot', () => {
    expect(mount(<Tag>beta</Tag>)).toMatchSnapshot('wrapper mount');
  });
});
