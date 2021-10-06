import * as React from 'react';
import { mount } from 'enzyme';

import { Tag } from '.';

describe('Tag', () => {
  it('can render an inactive tag', () => {
    mount(<Tag inactive>beta</Tag>);
  });

  it('matches wrapper snapshot', () => {
    expect(mount(<Tag>beta</Tag>)).toMatchSnapshot('wrapper mount');
  });
});
