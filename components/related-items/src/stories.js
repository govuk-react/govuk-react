import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from '@govuk-react/header';
import UnorderedList from '@govuk-react/unordered-list';
import ListItem from '@govuk-react/list-item';
import { asAnchor } from '@govuk-react/hoc';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import RelatedItems from '.';
import ReadMe from '../README.md';

const AnchorTag = asAnchor('a');

const stories = storiesOf('Navigation/RelatedItems', module);

stories.addDecorator(WithDocsCustom(ReadMe));

stories.add('Component default', () => (
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
    <Header level={3}>Travel</Header>
    <UnorderedList listStyleType="none">
      <ListItem>
        <AnchorTag href="https://example.com">Link A</AnchorTag>
      </ListItem>
      <ListItem>
        <AnchorTag href="https://example.com">Link B</AnchorTag>
      </ListItem>
    </UnorderedList>
  </RelatedItems>
));
