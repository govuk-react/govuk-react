import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { Button } from '../button';
import { Link } from '../link';
import { ButtonGroup } from '.';

const meta = {
  title: 'Form/Button group',
  id: 'button-group',
  component: ButtonGroup,
} satisfies Meta<typeof ButtonGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Button>Save and continue</Button>
        <Button variant="secondary">Save as draft</Button>
      </>
    ),
  },
};

export const WithLink: Story = {
  args: {
    children: (
      <>
        <Button>Continue</Button>
        <Link href="#">Cancel</Link>
      </>
    ),
  },
};
