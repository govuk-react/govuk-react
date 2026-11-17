import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import * as Breadcrumbs from '.';

const meta = {
  title: 'Navigation/Breadcrumbs',
  id: 'breadcrumbs',
  component: Breadcrumbs.Composite,
} satisfies Meta<typeof Breadcrumbs.Composite>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Breadcrumbs.ItemComposite href="/section">Section</Breadcrumbs.ItemComposite>
        <Breadcrumbs.ItemComposite href="/section/sub-section">Sub-section</Breadcrumbs.ItemComposite>
        <Breadcrumbs.ItemComposite>Current page</Breadcrumbs.ItemComposite>
      </>
    ),
  },
};

export const CollapseOnMobile: Story = {
  args: { ...Default.args, collapseOnMobile: true },
};
