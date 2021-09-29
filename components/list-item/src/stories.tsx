import React from 'react';

import { withKnobs, text } from '@storybook/addon-knobs';
import Link from '@govuk-react/link';

import { DocumentedComponent as ListItem } from '.';

export default {
  title: 'Typography/List item',
  component: ListItem,
  decorators: [withKnobs],
};

export const Default = () => <ListItem>{text('Children', 'List item example')}</ListItem>;

export const WithAnchor = () => (
  <ListItem>
    <Link href="https://www.google.com/">{text('Children', 'List item example')}</Link>
  </ListItem>
);
