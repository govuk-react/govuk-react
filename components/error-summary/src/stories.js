import React from 'react';
import { storiesOf } from '@storybook/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import ErrorSummary from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Form/ErrorSummary', module);

stories.addDecorator(WithDocsCustom(ReadMe));

stories.add('Component default', () => (
  <ErrorSummary>ErrorSummary example</ErrorSummary>
));
