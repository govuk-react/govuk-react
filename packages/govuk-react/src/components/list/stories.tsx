import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { List } from '.';

const meta = {
  title: 'Typography/List',
  id: 'list',
  component: List,
} satisfies Meta<typeof List>;

export default meta;

type Story = StoryObj<typeof meta>;

const items = (
  <>
    <li>benefits</li>
    <li>driving licences</li>
    <li>tax</li>
  </>
);

export const Default: Story = {
  args: { children: items },
};

export const Bulleted: Story = {
  args: { variant: 'bullet', children: items },
};

export const Numbered: Story = {
  args: { variant: 'number', children: items },
};

export const Spaced: Story = {
  args: { variant: 'bullet', spaced: true, children: items },
};

export const Nested: Story = {
  args: {
    variant: 'bullet',
    children: (
      <>
        <li>
          first item
          <List variant="bullet">
            <li>nested item</li>
          </List>
        </li>
        <li>second item</li>
      </>
    ),
  },
};
