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
        <Breadcrumbs.ItemComposite href="#">Home</Breadcrumbs.ItemComposite>
        <Breadcrumbs.ItemComposite href="#">Passports, travel and living abroad</Breadcrumbs.ItemComposite>
        <Breadcrumbs.ItemComposite>Travel abroad</Breadcrumbs.ItemComposite>
      </>
    ),
  },
};

export const CollapseOnMobile: Story = {
  args: { ...Default.args, collapseOnMobile: true },
};
