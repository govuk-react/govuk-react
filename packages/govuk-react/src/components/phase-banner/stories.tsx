import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import * as PhaseBanner from '.';
import Link from '../link';

const meta = {
  title: 'Typography/Phase banner',
  id: 'phase-banner',
  component: PhaseBanner.Composite,
} satisfies Meta<typeof PhaseBanner.Composite>;

export default meta;

type Story = StoryObj<typeof meta>;

const text = (
  <>
    This part of GOV.UK is being rebuilt – <Link href="https://example.com">find out what that means</Link>
  </>
);

export const Default: Story = {
  args: { tag: 'Alpha', children: text },
};

export const BetaPhaseTag: Story = {
  args: { tag: 'Beta', children: text },
};
