import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { Body } from '../body';
import { VisuallyHidden } from '.';

const meta = {
  title: 'Utility/Visually hidden',
  id: 'visually-hidden',
  component: VisuallyHidden,
} satisfies Meta<typeof VisuallyHidden>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: 'Some hidden content' },
  render: (args) => (
    <>
      <Body>Following this paragraph is some content that is only available to screen readers.</Body>
      <VisuallyHidden {...args} />
    </>
  ),
};
