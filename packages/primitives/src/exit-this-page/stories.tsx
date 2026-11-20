import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import * as ExitThisPage from '.';

const meta = {
  title: 'Primitives/Exit this page',
  id: 'primitives-exit-this-page',
  component: ExitThisPage.Root,
} satisfies Meta<typeof ExitThisPage.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ExitThisPage.Root hideContentClass="hide-content" overlayClass="overlay">
      <ExitThisPage.Trigger href="https://www.bbc.co.uk/weather">
        Exit this page
        <ExitThisPage.Indicator />
      </ExitThisPage.Trigger>
      <ExitThisPage.Status className="visually-hidden" />
    </ExitThisPage.Root>
  ),
};
