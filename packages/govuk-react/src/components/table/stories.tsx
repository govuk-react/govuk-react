import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { overrideClasses } from '../..';
import * as Table from '.';

const meta = {
  title: 'Typography/Table',
  id: 'table',
  component: Table.Composite,
} satisfies Meta<typeof Table.Composite>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    caption: 'Dates and amounts',
    captionSize: 'm',
    head: (
      <>
        <Table.ColumnHeader>Date</Table.ColumnHeader>
        <Table.ColumnHeader>Amount</Table.ColumnHeader>
      </>
    ),
    children: (
      <>
        <Table.Row>
          <Table.RowHeader>First 6 weeks</Table.RowHeader>
          <Table.Cell>£109.80 per week</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.RowHeader>Next 33 weeks</Table.RowHeader>
          <Table.Cell>£109.80 per week</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.RowHeader>Total estimated pay</Table.RowHeader>
          <Table.Cell>£4,282.20</Table.Cell>
        </Table.Row>
      </>
    ),
  },
};

export const NumbersInATable: Story = {
  args: {
    caption: 'Months and rates',
    captionSize: 'm',
    head: (
      <>
        <Table.ColumnHeader>Month you apply</Table.ColumnHeader>
        <Table.ColumnHeader numeric>Rate for bicycles</Table.ColumnHeader>
        <Table.ColumnHeader numeric>Rate for vehicles</Table.ColumnHeader>
      </>
    ),
    children: (
      <>
        <Table.Row>
          <Table.RowHeader>January</Table.RowHeader>
          <Table.Cell numeric>£85</Table.Cell>
          <Table.Cell numeric>£95</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.RowHeader>February</Table.RowHeader>
          <Table.Cell numeric>£75</Table.Cell>
          <Table.Cell numeric>£55</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.RowHeader>March</Table.RowHeader>
          <Table.Cell numeric>£165</Table.Cell>
          <Table.Cell numeric>£125</Table.Cell>
        </Table.Row>
      </>
    ),
  },
};

export const CustomColumnWidths: Story = {
  args: {
    caption: 'Month you apply',
    captionSize: 'm',
    head: (
      <>
        <Table.ColumnHeader className={overrideClasses({ width: 'one-half' })}>Date</Table.ColumnHeader>
        <Table.ColumnHeader className={overrideClasses({ width: 'one-quarter' })}>Rate for vehicles</Table.ColumnHeader>
        <Table.ColumnHeader className={overrideClasses({ width: 'one-quarter' })}>Rate for bicycles</Table.ColumnHeader>
      </>
    ),
    children: (
      <Table.Row>
        <Table.RowHeader>First 6 weeks</Table.RowHeader>
        <Table.Cell>£109.80 per week</Table.Cell>
        <Table.Cell>£159.80 per week</Table.Cell>
      </Table.Row>
    ),
  },
};
