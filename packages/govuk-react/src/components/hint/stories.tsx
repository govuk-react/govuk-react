import type { Meta, StoryObj } from '@storybook/react';

import { Hint } from '.';

const meta = {
  title: 'Form/Hint',
  id: 'hint',
  component: Hint,
  args: { children: 'It’s on your National Insurance card, benefit letter, payslip or P60.' },
} satisfies Meta<typeof Hint>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
