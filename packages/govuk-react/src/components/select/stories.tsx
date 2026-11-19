import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { SelectField } from '.';

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
  component: SelectField,
  args: { id: 'sort', name: 'sort', label: 'Sort by', children: options },
} satisfies Meta<typeof SelectField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SelectWithHintText: Story = {
  args: { hint: 'This can be different to where you went before' },
};

export const SelectWithHintTextError: Story = {
  args: { hint: 'This can be different to where you went before', errorMessage: 'Select a location' },
};
