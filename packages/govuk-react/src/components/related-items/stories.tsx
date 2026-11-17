import type { StoryFn } from '@storybook/react';

import * as React from 'react';

import { H3 } from '../../legacy/heading';
import UnorderedList from '../../legacy/unordered-list';
import { Link } from '../link';
import ListItem from '../../legacy/list-item';

import { RelatedItems } from '.';

export default {
  title: 'Navigation/Related items',
  id: 'related-items',
  component: RelatedItems,
};

export const Default: StoryFn = (args) => (
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
