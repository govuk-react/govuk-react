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
      <Tabs.List asChild>
        <ul>
          <Tabs.Item value="past-day" asChild>
            <li>
              <Tabs.Trigger value="past-day">Past day</Tabs.Trigger>
            </li>
          </Tabs.Item>
          <Tabs.Item value="past-week" asChild>
            <li>
              <Tabs.Trigger value="past-week">Past week</Tabs.Trigger>
            </li>
          </Tabs.Item>
          <Tabs.Item value="past-month" asChild>
            <li>
              <Tabs.Trigger value="past-month">Past month</Tabs.Trigger>
            </li>
          </Tabs.Item>
        </ul>
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
