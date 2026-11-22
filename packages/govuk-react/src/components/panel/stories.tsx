import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import * as Panel from '.';
import { Button } from '../button';
import { Link } from '../link';

const meta = {
  title: 'Page & Layout/Panel',
  id: 'panel',
  component: Panel.Composite,
} satisfies Meta<typeof Panel.Composite>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { title: 'Application complete' },
};

export const PanelWithHeaderAndHtmlBody: Story = {
  args: {
    title: 'Application complete',
    children: (
      <>
        Your reference number
        <br />
        <strong>HDJ2123F</strong>
      </>
    ),
  },
};

export const Interruption: Story = {
  args: {
    variant: 'interruption',
    title: 'Is your age correct?',
    children: (
      <p className="govuk-body">
        You entered your age as <strong>109</strong>.
      </p>
    ),
    actions: (
      <>
        <Button variant="inverse">Yes, this is correct</Button>
        <Link href="#" variant="inverse">
          No, change my age
        </Link>
      </>
    ),
  },
};
