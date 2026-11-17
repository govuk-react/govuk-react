import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { GridColumn } from '../grid-column';
import { GridRow } from '../grid-row';
import { MainWrapper } from '.';

const meta = {
  title: 'Page & Layout/Main wrapper',
  id: 'main-wrapper',
  component: MainWrapper,
  args: {
    children: (
      <GridRow>
        <GridColumn width="two-thirds">
          Aliquip et Lorem aliquip voluptate. In laborum dolor fugiat mollit exercitation occaecat deserunt sunt quis.
        </GridColumn>
      </GridRow>
    ),
  },
} satisfies Meta<typeof MainWrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Large: Story = {
  args: { size: 'l' },
};
