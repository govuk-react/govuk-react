import type { Meta, StoryObj } from '@storybook/react';

import { SectionBreak } from '.';

const meta = {
  title: 'Page & Layout/Section break',
  id: 'section-break',
  component: SectionBreak,
} satisfies Meta<typeof SectionBreak>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { visible: true, size: 'l' },
};
