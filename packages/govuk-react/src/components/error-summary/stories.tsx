import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import * as ErrorSummary from '.';
import * as Input from '../input';

const meta = {
  title: 'Form/Error summary',
  id: 'error-summary',
  component: ErrorSummary.Composite,
} satisfies Meta<typeof ErrorSummary.Composite>;

export default meta;

type Story = StoryObj<typeof meta>;

// On the docs page, where every story renders at once, none takes focus.
export const Default: Story = {
  render: (args, { viewMode }) => <ErrorSummary.Composite {...args} disableAutoFocus={viewMode === 'docs'} />,
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

/** The summary takes focus when it appears, and its link moves focus to the field, with its label in view. */
export const WithField: Story = {
  args: { title: 'There is a problem' },
  render: (_, { viewMode }) => (
    <>
      <ErrorSummary.Composite title="There is a problem" disableAutoFocus={viewMode === 'docs'}>
        <ErrorSummary.ListItemComposite href="#full-name">Enter your full name</ErrorSummary.ListItemComposite>
      </ErrorSummary.Composite>
      <Input.Field id="full-name" name="fullName" label="Full name" errorMessage="Enter your full name" />
    </>
  ),
};
