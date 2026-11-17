import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { GridRow } from '../grid-row';
import { GridColumn } from '.';

const meta = {
  title: 'Page & Layout/Grid column',
  id: 'grid-column',
  component: GridColumn,
  args: { width: 'full', children: 'Full width' },
  decorators: [(Story) => <GridRow>{Story()}</GridRow>],
} satisfies Meta<typeof GridColumn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ColumnHalves: Story = {
  render: () => (
    <>
      <GridColumn width="one-half">One half</GridColumn>
      <GridColumn width="one-half">One half</GridColumn>
    </>
  ),
};

export const ColumnThirds: Story = {
  render: () => (
    <>
      <GridColumn width="one-third">One third</GridColumn>
      <GridColumn width="one-third">One third</GridColumn>
      <GridColumn width="one-third">One third</GridColumn>
    </>
  ),
};

export const ColumnFourQuarters: Story = {
  render: () => (
    <>
      <GridColumn width="one-quarter">One quarter</GridColumn>
      <GridColumn width="one-quarter">One quarter</GridColumn>
      <GridColumn width="one-quarter">One quarter</GridColumn>
      <GridColumn width="one-quarter">One quarter</GridColumn>
    </>
  ),
};

export const ColumnWidthsDifferingBetweenTabletAndDesktop: Story = {
  render: () => (
    <>
      <GridColumn width="one-quarter-from-desktop">One quarter from desktop</GridColumn>
      <GridColumn width="three-quarters-from-desktop">Three quarters from desktop</GridColumn>
    </>
  ),
};
