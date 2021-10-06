import type { Story } from '@storybook/react';

import * as React from 'react';

import { H3 } from '@govuk-react/heading';
import UnorderedList from '@govuk-react/unordered-list';
import Link from '@govuk-react/link';
import ListItem from '@govuk-react/list-item';

import { RelatedItems } from '.';

export default {
  title: 'Navigation/Related items',
  id: 'related-items',
  component: RelatedItems,
};

export const Default: Story = (args) => (
  <RelatedItems {...args}>
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
);
