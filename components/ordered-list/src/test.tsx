import * as React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Link from '@govuk-react/link';
import ListItem from '@govuk-react/list-item';

import { OrderedList } from '.';

const wrapper = (
  <OrderedList>
    <ListItem>
      <Link href="http://example.com">Example 1</Link>
    </ListItem>
    <ListItem>
      <Link href="http://example.com">Example 2</Link>
    </ListItem>
    <ListItem>
      <Link href="http://example.com">Example 3</Link>
    </ListItem>
  </OrderedList>
);

describe('OrderedList', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<OrderedList>Example</OrderedList>, div);
    ReactDOM.render(<OrderedList listStyleType="number">Example</OrderedList>, div);
    ReactDOM.render(<OrderedList listStyleType="none">Example</OrderedList>, div);
  });

  it('matches wrapper snapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('wrapper mount');
  });
});
