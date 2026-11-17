import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { useState } from 'react';
import { Heading } from '../heading';
import * as Table from '../table';

import * as Tabs from '.';

const meta = {
  title: 'Navigation/Tabs',
  id: 'tabs',
  component: Tabs.Composite,
  parameters: {
    docs: {
      description: {
        component:
          'Tabs can be a helpful way of letting users quickly switch between related information. From tablet width up they are tabs; below it, and without JavaScript, they are a list of links to every panel.',
      },
    },
  },
} satisfies Meta<typeof Tabs.Composite>;

export default meta;

type Story = StoryObj<typeof meta>;

const cases = (rows: [string, string, string][]) => (
  <Table.Composite
    head={
      <>
        <Table.ColumnHeader>Case manager</Table.ColumnHeader>
        <Table.ColumnHeader>Cases opened</Table.ColumnHeader>
        <Table.ColumnHeader>Cases closed</Table.ColumnHeader>
      </>
    }
  >
    {rows.map(([manager, opened, closed]) => (
      <Table.Row key={manager}>
        <Table.Cell>{manager}</Table.Cell>
        <Table.Cell>{opened}</Table.Cell>
        <Table.Cell>{closed}</Table.Cell>
      </Table.Row>
    ))}
  </Table.Composite>
);

const items = [
  {
    id: 'past-day',
    label: 'Past day',
    panel: (
      <>
        <Heading size="l">Past day</Heading>
        {cases([
          ['David Francis', '3', '0'],
          ['Paul Farmer', '1', '0'],
          ['Rita Patel', '2', '0'],
        ])}
      </>
    ),
  },
  {
    id: 'past-week',
    label: 'Past week',
    panel: (
      <>
        <Heading size="l">Past week</Heading>
        {cases([
          ['David Francis', '24', '18'],
          ['Paul Farmer', '16', '20'],
          ['Rita Patel', '24', '27'],
        ])}
      </>
    ),
  },
  {
    id: 'past-month',
    label: 'Past month',
    panel: (
      <>
        <Heading size="l">Past month</Heading>
        {cases([
          ['David Francis', '98', '95'],
          ['Paul Farmer', '122', '131'],
          ['Rita Patel', '126', '142'],
        ])}
      </>
    ),
  },
  {
    id: 'past-year',
    label: 'Past year',
    panel: (
      <>
        <Heading size="l">Past year</Heading>
        {cases([
          ['David Francis', '1380', '1472'],
          ['Paul Farmer', '1129', '1083'],
          ['Rita Patel', '1539', '1265'],
        ])}
      </>
    ),
  },
];

export const Default: Story = {
  args: { items },
};

export const Radios: Story = {
  args: { items },
  render: () => <Tabs.RadiosComposite items={items} name="cases-radios" />,
  parameters: {
    docs: {
      description: {
        story:
          '`RadiosComposite`, and `RadiosRoot` with `RadioTab` and `RadioPanel`, switch tabs without JavaScript too, through a hidden radio in each panel. Without JavaScript the tabs can’t be reached by keyboard.',
      },
    },
  },
};

export const WithParts: Story = {
  args: { items: [] },
  render: () => (
    <Tabs.Root defaultValue="parts-past-week">
      <Tabs.Title />
      <Tabs.List>
        {items.map((item) => (
          <Tabs.ListItem key={item.id} value={`parts-${item.id}`}>
            <Tabs.Tab value={`parts-${item.id}`}>{item.label}</Tabs.Tab>
          </Tabs.ListItem>
        ))}
      </Tabs.List>
      {items.map((item) => (
        <Tabs.Panel key={item.id} value={`parts-${item.id}`}>
          {item.panel}
        </Tabs.Panel>
      ))}
    </Tabs.Root>
  ),
};

function ControlledTabs() {
  const [value, setValue] = useState('controlled-past-day');
  return (
    <>
      <p className="govuk-body">Selected: {value}</p>
      <Tabs.Composite
        value={value}
        onValueChange={setValue}
        items={items.map((item) => ({ ...item, id: `controlled-${item.id}` }))}
      />
    </>
  );
}

export const Controlled: Story = {
  args: { items: [] },
  render: () => <ControlledTabs />,
};
