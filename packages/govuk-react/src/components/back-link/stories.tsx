import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { BrowserRouter, Link as RouterLink } from 'react-router-dom';
import { action } from 'storybook/actions';

import { BackLink } from '.';

const meta = {
  title: 'Navigation/Back link',
  id: 'back-link',
  component: BackLink,
  args: { onClick: action('go-back') },
} satisfies Meta<typeof BackLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithHref: Story = {
  args: { children: 'Back', href: '#' },
};

export const WithReactRouter: Story = {
  render: (args) => (
    <BrowserRouter>
      <BackLink asChild {...args}>
        <RouterLink to="/">Back</RouterLink>
      </BackLink>
    </BrowserRouter>
  ),
  parameters: {
    docs: {
      description: { story: 'Use `asChild` to render a router link with the back link styles.' },
    },
  },
};
