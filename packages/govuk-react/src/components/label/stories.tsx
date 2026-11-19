import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { Input } from '../input';
import { LabelComposite } from '.';

const meta = {
  title: 'Form/Label',
  id: 'label',
  component: LabelComposite,
  args: { htmlFor: 'example', children: 'National Insurance number' },
} satisfies Meta<typeof LabelComposite>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithInput: Story = {
  render: (args) => (
    <>
      <LabelComposite {...args} />
      <Input id="example" name="example" />
    </>
  ),
};

export const AsPageHeading: Story = {
  args: { size: 'l', isPageHeading: true },
};
