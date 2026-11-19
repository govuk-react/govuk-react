import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { BrowserRouter, Link as RouterLink } from 'react-router-dom';

import { Button, StartButton } from '.';

const meta = {
  title: 'Form/Button',
  id: 'button',
  component: Button,
  args: { children: 'Save and continue' },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Start: Story = {
  render: () => <StartButton href="#">Start now</StartButton>,
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

export const PreventDoubleClick: Story = {
  name: 'Stop a form being submitted twice',
  args: { preventDoubleClick: true, children: 'Confirm and send' },
};

export const LinkButton: Story = {
  args: { href: '#', children: 'Link button' },
};

export const RouterLinkButton: Story = {
  render: () => (
    <BrowserRouter>
      <Button as={RouterLink} to="/">
        Router link button
      </Button>
    </BrowserRouter>
  ),
};
