import type { Story } from '@storybook/react';

import * as React from 'react';

import { ErrorSummary } from '.';

export default {
  title: 'Form/Error summary',
  id: 'error-summary',
  component: ErrorSummary,
};

const errors = [
  {
    targetName: 'national-insurance-number',
    text: 'National Insurance number error',
  },
  {
    targetName: 'description',
    text: 'Description of what you saw error',
  },
];

export const Default: Story<React.ComponentProps<typeof ErrorSummary>> = (args) => <ErrorSummary {...args} />;

Default.args = {
  heading: 'Message to alert the user to a problem goes here',
  description: 'Optional description of the errors and how to correct them',
  errors,
};
