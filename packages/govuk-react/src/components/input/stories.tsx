import type { Meta, StoryObj } from '@storybook/react';

import { InputField } from '.';

const meta = {
  title: 'Form/Input',
  id: 'input',
  component: InputField,
  args: { id: 'event-name', name: 'event-name', label: 'What is the name of the event?' },
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InputWithHintText: Story = {
  args: { hint: 'The name you’ll use on promotional material' },
};

export const InputWithHintTextError: Story = {
  args: { hint: 'The name you’ll use on promotional material', errorMessage: 'Enter an event name' },
};

export const WithPrefixAndSuffix: Story = {
  args: {
    id: 'cost-per-item',
    name: 'costPerItem',
    label: 'What is the cost per item, in pounds?',
    prefix: '£',
    suffix: 'per item',
    width: 5,
    spellCheck: false,
  },
};

export const WithTypeAndAutoComplete: Story = {
  args: { id: 'email', name: 'email', label: 'Email address', type: 'email', autoComplete: 'email', spellCheck: false },
};

export const AsPageHeading: Story = {
  args: { labelSize: 'l', labelIsPageHeading: true },
};
