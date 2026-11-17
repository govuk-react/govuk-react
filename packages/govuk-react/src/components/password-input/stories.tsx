import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import * as PasswordInput from '.';

const meta = {
  title: 'Form/Password input',
  id: 'password-input',
  component: PasswordInput.Field,
  parameters: {
    docs: {
      description: {
        component:
          'Help users accessibly enter passwords. The show and hide button appears when JavaScript runs; without it, the field is a normal password field.',
      },
    },
  },
} satisfies Meta<typeof PasswordInput.Field>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { id: 'password-input', name: 'password', label: 'Password' },
};

export const NewPassword: Story = {
  args: {
    id: 'password-input-new',
    name: 'password',
    label: 'Create a password',
    hint: 'Must be at least 8 characters',
    autoComplete: 'new-password',
  },
};

export const WithErrorMessage: Story = {
  args: {
    id: 'password-input-with-error-message',
    name: 'password',
    label: 'Password',
    errorMessage: 'Enter a password',
  },
};

export const Welsh: Story = {
  args: {
    id: 'password-input-cy',
    name: 'password',
    label: 'Cyfrinair',
    showPasswordText: 'Datguddia',
    hidePasswordText: 'Cuddio',
    showPasswordAriaLabelText: 'Datgelu cyfrinair',
    hidePasswordAriaLabelText: 'Cuddio cyfrinair',
    passwordShownAnnouncementText: 'Mae eich cyfrinair yn weladwy',
    passwordHiddenAnnouncementText: 'Mae eich cyfrinair wedi’i guddio',
  },
};

export const WithParts: Story = {
  args: { id: 'password-input-parts', name: 'password' },
  render: () => (
    <PasswordInput.Root>
      <label className="govuk-label" htmlFor="password-input-parts">
        Password
      </label>
      <PasswordInput.Wrapper>
        <PasswordInput.Input id="password-input-parts" name="password" />
        <PasswordInput.Status />
        <PasswordInput.Toggle aria-controls="password-input-parts" />
      </PasswordInput.Wrapper>
    </PasswordInput.Root>
  ),
};
