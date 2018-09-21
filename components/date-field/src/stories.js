import React from 'react';
import { storiesOf } from '@storybook/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import DateField from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Form/Date field', module);
const examples = storiesOf('Form/Date field/Examples', module);

stories.addDecorator(WithDocsCustom(ReadMe));

stories.add('Component default', () => (
  <DateField inputNames={{ day: 'dayInputName' }}>What is your date of birth?</DateField>
));

examples.add('Date with hint text', () => (
  <DateField hintText="For example, 31 03 1980">
    What is your date of birth?
  </DateField>
));

examples.add('Date with default values', () => (
  <DateField defaultValues={{ day: '01', month: '02', year: '2018' }}>
    What is your date of birth ?
  </DateField>
));

examples.add('Date with hint text & error', () => (
  <DateField
    hintText="For example, 31 03 1980"
    errorText="Error message goes here"
  >
    What is your date of birth?
  </DateField>
));
