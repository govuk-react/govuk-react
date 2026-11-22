import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { Button } from '.';

const meta = {
  title: 'Primitives/Button',
  id: 'primitives-button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Button preventDoubleClick>Save and continue</Button>,
};

/** Space activates a link with `role="button"`, as it does a button. */
export const Link: Story = {
  render: () => (
    <Button asChild>
      <a href="#start" role="button">
        Start now
      </a>
    </Button>
  ),
};
