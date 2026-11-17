import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import * as WarningText from '.';

const meta = {
  title: 'Typography/Warning text',
  id: 'warning-text',
  component: WarningText.Composite,
} satisfies Meta<typeof WarningText.Composite>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: 'Example text' },
};

export const LongWarning: Story = {
  args: {
    children:
      'A very long warning message. This includes a lot of text to give a good representation of a more average length warning. That way you can see more than one line wrapping.',
  },
};

export const Parts: Story = {
  render: () => (
    <WarningText.Root>
      <WarningText.Icon />{' '}
      <WarningText.TextComposite iconFallbackText="Warning">You can be fined up to £5,000</WarningText.TextComposite>
    </WarningText.Root>
  ),
};
