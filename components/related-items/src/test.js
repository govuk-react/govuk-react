import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Header from '@govuk-react/header';
import UnorderedList from '@govuk-react/unordered-list';
import ListItem from '@govuk-react/list-item';
import asAnchor from '@govuk-react/hoc/lib/asAnchor';

import RelatedItems from './';

const AnchorTag = asAnchor('a');

const wrapper = (
  <RelatedItems>
    <Header level={3}>Travel abroad</Header>
    <UnorderedList listStyleType="none">
      <ListItem>
        <AnchorTag href="https://example.com">Link A</AnchorTag>
      </ListItem>
      <ListItem>
        <AnchorTag href="https://example.com">Link B</AnchorTag>
      </ListItem>
      <ListItem>
        <AnchorTag href="https://example.com"><strong>more</strong></AnchorTag>
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
