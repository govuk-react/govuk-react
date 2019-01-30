import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import ListItem from '@govuk-react/list-item';
import asAnchor from '@govuk-react/hoc/lib/asAnchor';

import UnorderedList from './';

const AnchorTag = asAnchor('a');

const wrapper = (
  <UnorderedList>
    <ListItem><AnchorTag href="http://example.com">Example 1</AnchorTag></ListItem>
    <ListItem><AnchorTag href="http://example.com">Example 2</AnchorTag></ListItem>
    <ListItem><AnchorTag href="http://example.com">Example 3</AnchorTag></ListItem>
  </UnorderedList>
);

describe('UnorderedList', () => {
  it('renders with and without props, without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UnorderedList>Example</UnorderedList>, div);
    ReactDOM.render(
      <UnorderedList listStyleType="none">Example</UnorderedList>,
      div,
    );
  });

  it('matches wrapper snapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('wrapper mount');
  });
});
