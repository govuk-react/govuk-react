import React from 'react';

import { withKnobs } from '@storybook/addon-knobs';

import { WarningText } from '.';
import WarningTextWithKnobs, { WarningWithLongText } from './fixtures';

export default {
  title: 'Typography/Warning text',
  component: WarningText,
  decorators: [withKnobs],
};

export const Default: React.FC = () => <WarningTextWithKnobs />;
export const LongWarning: React.FC = () => <WarningWithLongText />;
