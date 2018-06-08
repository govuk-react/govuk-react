import React from 'react';
import { storiesOf } from '@storybook/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import WarningText from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Typography/WarningText', module);
stories.addDecorator(WithDocsCustom(ReadMe));

stories.add('Component default', () => (
  <WarningText>WarningText example</WarningText>
));
