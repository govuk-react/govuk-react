import * as React from 'react';
import { mount } from 'enzyme';

import { ListItem } from '.';

describe('ListItem', () => {
  it('matches wrapper snapshot', () => {
    expect(mount(<ListItem>example</ListItem>)).toMatchSnapshot('list item mount');
  });
});
