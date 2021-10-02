import type { Story } from '@storybook/react';

import * as React from 'react';

import Link from '@govuk-react/link';

import { ListItem } from '.';

export default {
  title: 'Typography/List item',
  id: 'list-item',
  component: ListItem,
};

export const Default: Story = (args) => <ListItem {...args} />;
Default.args = {
  children: 'List item example',
};

export const WithAnchor: Story = (args: { children: string }) => (
  <ListItem>
    <Link href="https://www.google.com/" {...args} />
  </ListItem>
);
WithAnchor.args = {
  children: 'List item example',
};
