import type { Meta, StoryObj } from '@storybook/react';

import { TextareaField } from '.';

const meta = {
  title: 'Form/Textarea',
  id: 'textarea',
  component: TextareaField,
  args: { id: 'more-detail', name: 'more-detail', label: 'Can you provide more detail?' },
} satisfies Meta<typeof TextareaField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const TextareaWithHintText: Story = {
  args: {
    hint: 'Do not include personal or financial information, like your National Insurance number or credit card details',
  },
};

export const TextareaWithHintTextError: Story = {
  args: {
    hint: 'Do not include personal or financial information, like your National Insurance number or credit card details',
    errorMessage: 'Enter more detail',
  },
};
