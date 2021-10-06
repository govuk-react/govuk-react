import * as React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Link from '@govuk-react/link';
import ListItem from '@govuk-react/list-item';

import { UnorderedList } from '.';

const wrapper = (
  <UnorderedList>
    <ListItem>
      <Link href="http://example.com">Example 1</Link>
    </ListItem>
    <ListItem>
      <Link href="http://example.com">Example 2</Link>
    </ListItem>
    <ListItem>
      <Link href="http://example.com">Example 3</Link>
    </ListItem>
  </UnorderedList>
);

describe('UnorderedList', () => {
  it('renders with and without props, without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UnorderedList>Example</UnorderedList>, div);
    ReactDOM.render(<UnorderedList listStyleType="number">Example</UnorderedList>, div);
  });

  it('matches wrapper snapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('wrapper mount');
  });
});
