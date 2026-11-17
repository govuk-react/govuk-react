import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import * as ErrorSummary from '.';

const meta = {
  title: 'Form/Error summary',
  id: 'error-summary',
  component: ErrorSummary.Composite,
} satisfies Meta<typeof ErrorSummary.Composite>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'There is a problem',
    children: (
      <>
        <ErrorSummary.ListItemComposite href="#">Enter your full name</ErrorSummary.ListItemComposite>
        <ErrorSummary.ListItemComposite href="#">
          The date your passport was issued must be in the past
        </ErrorSummary.ListItemComposite>
      </>
    ),
  },
};
