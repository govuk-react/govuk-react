import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import * as Button from '.';

const meta = {
  title: 'Primitives/Button',
  id: 'primitives-button',
  component: Button.Root,
} satisfies Meta<typeof Button.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Button.Root preventDoubleClick>Save and continue</Button.Root>,
};

/** Space activates a link with `role="button"`, as it does a button. */
export const Link: Story = {
  render: () => (
    <Button.Root asChild>
      <a href="#start" role="button">
        Start now
      </a>
    </Button.Root>
  ),
};
