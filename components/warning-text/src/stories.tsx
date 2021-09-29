import React from 'react';

import { WarningText } from '.';
import WarningTextWithKnobs, { WarningWithLongText } from './fixtures';

export default {
  title: 'Typography/Warning text',
  component: WarningText,
};

export const Default: React.FC = () => <WarningTextWithKnobs />;
export const LongWarning: React.FC = () => <WarningWithLongText />;
