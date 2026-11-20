import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import * as AutoFocus from '.';

const meta = {
  title: 'Primitives/Auto focus',
  id: 'primitives-auto-focus',
  component: AutoFocus.Root,
} satisfies Meta<typeof AutoFocus.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <AutoFocus.Root>
      <AutoFocus.Target role="alert">
        <h2>There is a problem</h2>
        <a href="#full-name">Enter your full name</a>
      </AutoFocus.Target>
    </AutoFocus.Root>
  ),
};
