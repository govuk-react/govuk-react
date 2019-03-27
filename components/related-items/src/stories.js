import React from 'react';
import { storiesOf } from '@storybook/react';
import { H3 } from '@govuk-react/heading';
import UnorderedList from '@govuk-react/unordered-list';
import Link from '@govuk-react/link';
import ListItem from '@govuk-react/list-item';
import { withDocsCustom } from '@govuk-react/storybook-components';

import RelatedItems from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Navigation/RelatedItems', module);

stories.addDecorator(withDocsCustom(ReadMe));

stories.add('Component default', () => (
  <RelatedItems>
    <H3>Travel abroad</H3>
    <UnorderedList listStyleType="none">
      <ListItem>
        <Link href="https://example.com">Link A</Link>
      </ListItem>
      <ListItem>
        <Link href="https://example.com">Link B</Link>
      </ListItem>
      <ListItem>
        <Link href="https://example.com">
          <strong>more</strong>
        </Link>
      </ListItem>
    </UnorderedList>
    <H3>Travel</H3>
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
