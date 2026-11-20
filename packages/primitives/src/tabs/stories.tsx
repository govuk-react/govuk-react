import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import * as Tabs from '.';

const meta = {
  title: 'Primitives/Tabs',
  id: 'primitives-tabs',
  component: Tabs.Root,
} satisfies Meta<typeof Tabs.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs.Root defaultValue="past-day">
      <Tabs.List>
        <Tabs.Trigger value="past-day">Past day</Tabs.Trigger>
        <Tabs.Trigger value="past-week">Past week</Tabs.Trigger>
        <Tabs.Trigger value="past-month">Past month</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="past-day">
        <h2>Past day</h2>
        <p>3 cases opened, 0 cases closed.</p>
      </Tabs.Content>
      <Tabs.Content value="past-week">
        <h2>Past week</h2>
        <p>24 cases opened, 18 cases closed.</p>
      </Tabs.Content>
      <Tabs.Content value="past-month">
        <h2>Past month</h2>
        <p>98 cases opened, 95 cases closed.</p>
      </Tabs.Content>
    </Tabs.Root>
  ),
};

/** Each tab is a label for a hidden radio, so the tabs switch without JavaScript. */
export const RadiosFallback: Story = {
  name: 'Radios fallback',
  render: () => (
    <Tabs.RadiosRoot defaultValue="radios-past-day">
      <Tabs.List>
        <Tabs.RadiosTrigger value="radios-past-day">Past day</Tabs.RadiosTrigger>
        <Tabs.RadiosTrigger value="radios-past-week">Past week</Tabs.RadiosTrigger>
      </Tabs.List>
      <Tabs.RadiosContent value="radios-past-day">
        <h2>Past day</h2>
        <p>3 cases opened, 0 cases closed.</p>
      </Tabs.RadiosContent>
      <Tabs.RadiosContent value="radios-past-week">
        <h2>Past week</h2>
        <p>24 cases opened, 18 cases closed.</p>
      </Tabs.RadiosContent>
    </Tabs.RadiosRoot>
  ),
};
