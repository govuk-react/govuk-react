import React from 'react';
import { storiesOf } from '@storybook/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import {
  TableSimple,
  TableWithCaption,
  TableWithCustomHeader,
  TableWithHeadAndNumerics,
} from './fixtures';
import ReadMe from '../README.md';

const stories = storiesOf('Data/Table', module);
const examples = storiesOf('Data/Table/Examples', module);

stories.addDecorator(WithDocsCustom(ReadMe));

stories.add('Component default', () => (
  <TableSimple />
));

examples.add('With a caption', () => (
  <TableWithCaption />
));

examples.add('With a custom header element', () => (
  <TableWithCustomHeader />
));

examples.add('With a head row and numeric tabular data', () => (
  <TableWithHeadAndNumerics />
));
