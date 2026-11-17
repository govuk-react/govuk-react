import type { Meta, StoryObj } from '@storybook/react';

import { ErrorMessageComposite } from '.';

const meta = {
  title: 'Form/Error message',
  id: 'error-message',
  component: ErrorMessageComposite,
  args: { children: 'Enter a National Insurance number in the correct format' },
} satisfies Meta<typeof ErrorMessageComposite>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
