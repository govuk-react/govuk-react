import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import * as Panel from '.';

const meta = {
  title: 'Page & Layout/Panel',
  id: 'panel',
  component: Panel.Composite,
} satisfies Meta<typeof Panel.Composite>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { title: 'Application complete' },
};

export const PanelWithHeaderAndHtmlBody: Story = {
  args: {
    title: 'Application complete',
    children: (
      <>
        Your reference number
        <br />
        <strong>HDJ2123F</strong>
      </>
    ),
  },
};
