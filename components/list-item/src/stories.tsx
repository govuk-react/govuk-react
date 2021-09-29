import React from 'react';

import { text } from '@storybook/addon-knobs';
import Link from '@govuk-react/link';

import { ListItem } from '.';

export default {
  title: 'Typography/List item',
  component: ListItem,
};

export const Default: React.FC = () => <ListItem>{text('Children', 'List item example')}</ListItem>;

export const WithAnchor: React.FC = () => (
  <ListItem>
    <Link href="https://www.google.com/">{text('Children', 'List item example')}</Link>
  </ListItem>
);
