import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { Tag, type TagProps } from '.';
import * as Table from '../table';

const meta = {
  title: 'Typography/Tag',
  id: 'tag',
  component: Tag,
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: 'Completed' },
};

export const ShowingOneOrTwoStatuses: Story = {
  render: () => (
    <Table.Composite
      head={
        <>
          <Table.ColumnHeader>Name of user</Table.ColumnHeader>
          <Table.ColumnHeader>Status</Table.ColumnHeader>
        </>
      }
    >
      <Table.Row>
        <Table.Cell>Rachel Silver</Table.Cell>
        <Table.Cell>
          <Tag colour="grey">Inactive</Tag>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jesse Smith</Table.Cell>
        <Table.Cell>
          <Tag>Active</Tag>
        </Table.Cell>
      </Table.Row>
    </Table.Composite>
  ),
};

const colours: [TagProps['colour'], string][] = [
  [undefined, 'Active'],
  ['grey', 'Inactive'],
  ['green', 'New'],
  ['teal', 'Ready'],
  ['blue', 'Pending'],
  ['light-blue', 'Sent'],
  ['purple', 'Received'],
  ['magenta', 'Sent'],
  ['red', 'Rejected'],
  ['orange', 'Declined'],
  ['yellow', 'Delayed'],
];

export const AdditionalColours: Story = {
  render: () => (
    <Table.Composite
      head={
        <>
          <Table.ColumnHeader>Colour</Table.ColumnHeader>
          <Table.ColumnHeader>Tag</Table.ColumnHeader>
        </>
      }
    >
      {colours.map(([colour, text]) => (
        <Table.Row key={colour ?? 'default'}>
          <Table.Cell>{colour ?? 'default'}</Table.Cell>
          <Table.Cell>
            <Tag colour={colour}>{text}</Tag>
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Composite>
  ),
};
