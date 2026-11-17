import type { Meta, StoryObj } from '@storybook/react';

import * as PhaseBanner from '.';

const meta = {
  title: 'Typography/Phase banner',
  id: 'phase-banner',
  component: PhaseBanner.Composite,
} satisfies Meta<typeof PhaseBanner.Composite>;

export default meta;

type Story = StoryObj<typeof meta>;

const text = "This is a new service. We're still working on ways to improve it.";

export const Default: Story = {
  args: { tag: 'Alpha', children: text },
};

export const BetaPhaseTag: Story = {
  args: { tag: 'Beta', children: text },
};
