import type { Meta, StoryObj } from '@storybook/react';

import { WidthContainer } from '.';

const meta = {
  title: 'Page & Layout/Width container',
  id: 'width-container',
  component: WidthContainer,
  args: { children: 'Content inside the width container' },
} satisfies Meta<typeof WidthContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
