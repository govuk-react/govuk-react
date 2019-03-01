import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '@govuk-react/heading';
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
    <Heading level={3}>Travel abroad</Heading>
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
    <Heading level={3}>Travel</Heading>
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
