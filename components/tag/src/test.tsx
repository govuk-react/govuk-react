import * as React from 'react';
import { mount } from 'enzyme';

import { Tag } from '.';

describe('Tag', () => {
  it('can render an inactive tag', () => {
    mount(<Tag inactive>inactive</Tag>);
  });

  it('can render an tinted tag', () => {
    mount(<Tag tint="GREY">inactive</Tag>);
  });

  it('matches wrapper snapshot', () => {
    expect(mount(<Tag>beta</Tag>)).toMatchSnapshot('wrapper mount');
  });
});
