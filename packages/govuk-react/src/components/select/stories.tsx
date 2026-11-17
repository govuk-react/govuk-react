import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import * as Select from '.';

const options = (
  <>
    <option value="published">Recently published</option>
    <option value="updated">Recently updated</option>
    <option value="views">Most views</option>
    <option value="comments">Most comments</option>
  </>
);

const meta = {
  title: 'Form/Select',
  id: 'select',
  component: Select.Field,
  args: { id: 'sort', name: 'sort', label: 'Sort by', children: options },
} satisfies Meta<typeof Select.Field>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SelectWithHintText: Story = {
  args: { hint: 'Choose how to order the results' },
};

export const SelectWithHintTextError: Story = {
  args: { hint: 'Choose how to order the results', errorMessage: 'Select how to sort the results' },
};
