import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { BrowserRouter, Link as RouterLink } from 'react-router-dom';

import * as Button from '.';

const meta = {
  title: 'Form/Button',
  id: 'button',
  component: Button.Composite,
  args: { children: 'Save and continue' },
} satisfies Meta<typeof Button.Composite>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Start: Story = {
  args: { start: true, children: 'Start now' },
};

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Find address' },
};

export const Warning: Story = {
  args: { variant: 'warning', children: 'Delete account' },
};

export const Disabled: Story = {
  args: { disabled: true, children: 'Disabled button' },
};

export const LinkButton: Story = {
  args: { href: '#', children: 'Link button' },
};

export const RouterLinkButton: Story = {
  render: () => (
    <BrowserRouter>
      <Button.Root as={RouterLink} to="/">
        Router link button
      </Button.Root>
    </BrowserRouter>
  ),
};
