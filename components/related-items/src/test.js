import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Header from '@govuk-react/header';
import UnorderedList from '@govuk-react/unordered-list';
import Link from '@govuk-react/link';
import ListItem from '@govuk-react/list-item';

import RelatedItems from './';

const wrapper = (
  <RelatedItems>
    <Header level={3}>Travel abroad</Header>
    <UnorderedList listStyleType="none">
      <ListItem>
        <Link href="https://example.com">Link A</Link>
      </ListItem>
      <ListItem>
        <Link href="https://example.com">Link B</Link>
      </ListItem>
      <ListItem>
        <Link href="https://example.com"><strong>more</strong></Link>
      </ListItem>
    </UnorderedList>
  </RelatedItems>
);

describe('RelatedItems', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(wrapper, div);
  });

  it('matches wrapper snapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('wrapper mount');
  });
});
