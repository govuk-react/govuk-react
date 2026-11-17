import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { useState } from 'react';

import * as Modal from '.';

const meta = {
  title: 'Utility/Modal',
  id: 'modal',
  component: Modal.Composite,
  parameters: {
    docs: {
      description: {
        component:
          'A modal dialog: the page behind is inert until it closes, focus moves into it, and Escape closes it. Where the browser supports invoker commands, it works without JavaScript. Only use a modal when the user must respond before they carry on.',
      },
    },
  },
} satisfies Meta<typeof Modal.Composite>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    triggerText: 'Delete account',
    title: 'Are you sure you want to delete your account?',
    children: <p className="govuk-body">You will not be able to undo this.</p>,
    actions: (
      <button type="submit" className="govuk-button govuk-button--warning" form="delete-account">
        Yes, delete my account
      </button>
    ),
    closeText: 'Cancel',
  },
};

export const WithParts: Story = {
  args: Default.args,
  render: () => (
    <Modal.Root>
      <Modal.Trigger variant="secondary">Show the timeout warning</Modal.Trigger>
      <Modal.Content>
        <Modal.Title>You’re about to be signed out</Modal.Title>
        <p className="govuk-body">For your security, we will sign you out in 2 minutes.</p>
        <div className="govuk-button-group">
          <Modal.Close variant={undefined}>Stay signed in</Modal.Close>
          <a className="govuk-link" href="#sign-out">
            Sign out
          </a>
        </div>
      </Modal.Content>
    </Modal.Root>
  ),
};

function ControlledModal() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <p className="govuk-body">The modal is {open ? 'open' : 'closed'}.</p>
      <Modal.Composite
        open={open}
        onOpenChange={setOpen}
        triggerText="Open the modal"
        title="Controlled modal"
        closeText="Close"
      >
        <p className="govuk-body">Its open state is held in React state.</p>
      </Modal.Composite>
    </>
  );
}

export const Controlled: Story = {
  args: Default.args,
  render: () => <ControlledModal />,
};
