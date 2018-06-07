import React from 'react';
import { storiesOf } from '@storybook/react';

import ErrorSummary from '.';

storiesOf('ErrorSummary', module).add('ErrorSummary', () => (
  <ErrorSummary>ErrorSummary example</ErrorSummary>
));
