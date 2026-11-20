import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import * as Modal from '.';

const meta = {
  title: 'Primitives/Modal',
  id: 'primitives-modal',
  component: Modal.Root,
} satisfies Meta<typeof Modal.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Modal.Root>
      <Modal.Trigger>Delete account</Modal.Trigger>
      <Modal.Content>
        <Modal.Title>Are you sure you want to delete your account?</Modal.Title>
        <Modal.Description>You cannot undo this.</Modal.Description>
        <Modal.Close>Cancel</Modal.Close>
      </Modal.Content>
    </Modal.Root>
  ),
};

/** Open from the start, for visual regression. Left out of the docs page, where it would cover everything else. */
export const Open: Story = {
  tags: ['!autodocs'],
  render: () => (
    <Modal.Root open>
      <Modal.Trigger>Delete account</Modal.Trigger>
      <Modal.Content>
        <Modal.Title>Are you sure you want to delete your account?</Modal.Title>
        <Modal.Description>You cannot undo this.</Modal.Description>
        <Modal.Close>Cancel</Modal.Close>
      </Modal.Content>
    </Modal.Root>
  ),
};
