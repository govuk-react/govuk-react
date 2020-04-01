import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocsCustom } from '@govuk-react/storybook-components';

import {
  TableSimple,
  TableWithCaption,
  TableWithHeadAndNumerics,
  TableWithCustomWidths,
  TableThreeQuartersOneQuarter,
} from './fixtures';
import ReadMe from '../README.md';

const stories = storiesOf('Data/Table', module);
const examples = storiesOf('Data/Table/Examples', module);

stories.addDecorator(withDocsCustom(ReadMe));

stories.add('Component default', () => <TableSimple />);

examples.add('With a caption', () => <TableWithCaption />);

examples.add('With a head row and numeric tabular data', () => <TableWithHeadAndNumerics />);

examples.add('With a three quarter-width column and one quarter', () => <TableThreeQuartersOneQuarter />);

examples.add('With custom column widths', () => <TableWithCustomWidths />);
