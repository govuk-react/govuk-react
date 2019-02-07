import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import ListItem from '@govuk-react/list-item';
import asAnchor from '@govuk-react/hoc/lib/asAnchor';

import { DocumentedComponent as OrderedList } from '.';

const AnchorTag = asAnchor('a');

const wrapper = (
  <OrderedList>
    <ListItem><AnchorTag href="http://example.com">Example 1</AnchorTag></ListItem>
    <ListItem><AnchorTag href="http://example.com">Example 2</AnchorTag></ListItem>
    <ListItem><AnchorTag href="http://example.com">Example 3</AnchorTag></ListItem>
  </OrderedList>
);

describe('OrderedList', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<OrderedList>Example</OrderedList>, div);
    ReactDOM.render(
      <OrderedList listStyleType="number">Example</OrderedList>,
      div,
    );
    ReactDOM.render(
      <OrderedList listStyleType="none">Example</OrderedList>,
      div,
    );
  });

  it('matches wrapper snapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('wrapper mount');
  });
});
