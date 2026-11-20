import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import * as Disclosure from '.';

const meta = {
  title: 'Primitives/Disclosure',
  id: 'primitives-disclosure',
  component: Disclosure.Root,
} satisfies Meta<typeof Disclosure.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <nav aria-label="Menu">
      <Disclosure.Root>
        <Disclosure.Trigger aria-controls="navigation">Menu</Disclosure.Trigger>
        <Disclosure.Content asChild>
          <ul id="navigation">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#account">Your account</a>
            </li>
            <li>
              <a href="#sign-out">Sign out</a>
            </li>
          </ul>
        </Disclosure.Content>
      </Disclosure.Root>
    </nav>
  ),
};
