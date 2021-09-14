import React from 'react';

import { withKnobs } from '@storybook/addon-knobs';

import ErrorSummary from './fixtures';
import ErrorSummaryComponent from '.';

export default {
  title: 'Form/Error summary',
  decorators: [withKnobs],
  component: ErrorSummaryComponent,
};

export const Default: React.FC = () => <ErrorSummary />;
