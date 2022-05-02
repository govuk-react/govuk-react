import type { Story } from '@storybook/react';
import { Table } from 'govuk-react';

import * as React from 'react';

import { Tag } from '.';

export default {
  title: 'Typography/Tag',
  id: 'tag',
  component: Tag,
};

export const Default: Story = (args) => <Tag {...args} />;
Default.args = {
  children: 'beta',
};

export const Inactive: Story = (args) => <Tag {...args} />;
Inactive.args = {
  children: 'inactive',
  inactive: true,
};
Inactive.parameters = {
  docs: {
    storyDescription: 'deprecated',
  },
};

export const Custom: Story = (args) => <Tag {...args} />;
Custom.args = {
  children: 'taxi',
  backgroundColor: '#0b0c0c',
  color: '#ffdd00',
};

export const ShowingOneOrTwoStatuses: Story = (args) => (
  <Table>
    <Table.Row>
      <Table.CellHeader>Name of user</Table.CellHeader>
      <Table.CellHeader>Status</Table.CellHeader>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Rachel Silver</Table.Cell>
      <Table.Cell>
        <Tag tint="GREY">inactive</Tag>
      </Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Jesse Smith</Table.Cell>
      <Table.Cell>
        <Tag>active</Tag>
      </Table.Cell>
    </Table.Row>
  </Table>
);
ShowingOneOrTwoStatuses.args = {};

export const AdditionalColours: Story = (args) => (
  <Table>
    <Table.Row>
      <Table.CellHeader>Tint</Table.CellHeader>
      <Table.CellHeader>Tag</Table.CellHeader>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Solid (default)</Table.Cell>
      <Table.Cell>
        <Tag tint="SOLID">active</Tag>
      </Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Grey</Table.Cell>
      <Table.Cell>
        <Tag tint="GREY">inactive</Tag>
      </Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Green</Table.Cell>
      <Table.Cell>
        <Tag tint="GREEN">new</Tag>
      </Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Turquoise</Table.Cell>
      <Table.Cell>
        <Tag tint="TURQUOISE">ready</Tag>
      </Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Blue</Table.Cell>
      <Table.Cell>
        <Tag tint="BLUE">pending</Tag>
      </Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Purple</Table.Cell>
      <Table.Cell>
        <Tag tint="PURPLE">receieved</Tag>
      </Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Pink</Table.Cell>
      <Table.Cell>
        <Tag tint="PINK">sent</Tag>
      </Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Red</Table.Cell>
      <Table.Cell>
        <Tag tint="RED">rejected</Tag>
      </Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Orange</Table.Cell>
      <Table.Cell>
        <Tag tint="ORANGE">declined</Tag>
      </Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Yellow</Table.Cell>
      <Table.Cell>
        <Tag tint="YELLOW">delayed</Tag>
      </Table.Cell>
    </Table.Row>
  </Table>
);
AdditionalColours.args = {};
