import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import * as Details from '.';
import { Body } from '../body';

const meta = {
  title: 'Typography/Details',
  id: 'details',
  component: Details.Composite,
} satisfies Meta<typeof Details.Composite>;

export default meta;

type Story = StoryObj<typeof meta>;

const summary = 'Help with nationality';

const paragraphs = [
  'If you’re not sure about your nationality, try to find out from an official document like a passport or national ID card.',
  'We need to know your nationality so we can work out which elections you’re entitled to vote in. If you can’t provide your nationality, you’ll have to send copies of identity documents through the post.',
];

export const Default: Story = {
  args: { summary, children: paragraphs[0] },
};

export const SetAsOpen: Story = {
  args: { open: true, summary, children: paragraphs[0] },
};

export const WithParagraphContents: Story = {
  args: {
    open: true,
    summary,
    children: (
      <>
        <Body>{paragraphs[0]}</Body>
        <Body>{paragraphs[1]}</Body>
      </>
    ),
  },
};
