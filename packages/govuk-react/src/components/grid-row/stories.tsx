import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { GridColumn } from '../grid-column';
import { GridRow } from '.';

const meta = {
  title: 'Page & Layout/Grid row',
  id: 'grid-row',
  component: GridRow,
} satisfies Meta<typeof GridRow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <GridColumn width="two-thirds">Two thirds</GridColumn>
        <GridColumn width="one-third">One third</GridColumn>
      </>
    ),
  },
};
