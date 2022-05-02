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

  it('matches snapshot with custom colour', () => {
    expect(
      mount(
        <Tag backgroundColor="#0b0c0c" color="#d53880">
          beta
        </Tag>
      )
    ).toMatchSnapshot('with custom colour');
  });
});
