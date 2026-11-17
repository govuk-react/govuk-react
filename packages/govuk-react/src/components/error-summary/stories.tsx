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
    description: 'Optional description of the errors and how to correct them',
    children: (
      <>
        <ErrorSummary.ListItemComposite href="#national-insurance-number">
          Enter a National Insurance number
        </ErrorSummary.ListItemComposite>
        <ErrorSummary.ListItemComposite href="#description">
          Enter a description of what you saw
        </ErrorSummary.ListItemComposite>
      </>
    ),
  },
};
