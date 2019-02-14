import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from '@govuk-react/header';
import UnorderedList from '@govuk-react/unordered-list';
import Link from '@govuk-react/link';
import ListItem from '@govuk-react/list-item';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import RelatedItems from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Navigation/RelatedItems', module);

stories.addDecorator(WithDocsCustom(ReadMe));

stories.add('Component default', () => (
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
    <Header level={3}>Travel</Header>
    <UnorderedList listStyleType="none">
      <ListItem>
        <Link href="https://example.com">Link A</Link>
      </ListItem>
      <ListItem>
        <Link href="https://example.com">Link B</Link>
      </ListItem>
    </UnorderedList>
  </RelatedItems>
));
