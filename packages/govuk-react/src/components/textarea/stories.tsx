import type { Meta, StoryObj } from '@storybook/react';

import * as Textarea from '.';

const meta = {
  title: 'Form/Textarea',
  id: 'textarea',
  component: Textarea.Field,
  args: { id: 'more-detail', name: 'more-detail', label: 'Can you provide more detail?' },
} satisfies Meta<typeof Textarea.Field>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const TextareaWithHintText: Story = {
  args: { hint: 'Do not include personal or financial information, like your National Insurance number.' },
};

export const TextareaWithHintTextError: Story = {
  args: {
    hint: 'Do not include personal or financial information, like your National Insurance number.',
    errorMessage: 'Enter more detail',
  },
};
