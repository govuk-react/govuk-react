import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import * as PasswordInput from '.';

const meta = {
  title: 'Primitives/Password input',
  id: 'primitives-password-input',
  component: PasswordInput.Root,
} satisfies Meta<typeof PasswordInput.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <>
      <label htmlFor="password">Password</label>
      <PasswordInput.Root>
        <PasswordInput.Input id="password" name="password" autoComplete="current-password" />
        <PasswordInput.Trigger />
        <PasswordInput.Status className="visually-hidden" />
      </PasswordInput.Root>
    </>
  ),
};
