import React from 'react';

import { withKnobs } from '@storybook/addon-knobs';

import WarningText from '.';
import WarningTextWithKnobs, { WarningWithLongText } from './fixtures';

export default {
  title: 'Core/Warning text',
  component: WarningText,
  decorators: [withKnobs],
};

export const Default = () => <WarningTextWithKnobs />;
export const LongWarning = () => <WarningWithLongText />;
