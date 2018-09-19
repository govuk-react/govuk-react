import React from 'react';
import { storiesOf } from '@storybook/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import DateInput from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Form/Date input', module);
const examples = storiesOf('Form/Date input/Examples', module);

stories.addDecorator(WithDocsCustom(ReadMe));

stories.add('Component default', () => (
  <DateInput>What is your date of birth?</DateInput>
));

examples.add('Date with hint text', () => (
  <DateInput hintText="For example, 31 03 1980">
    What is your date of birth?
  </DateInput>
));

examples.add('Date with default values', () => (
  <DateInput defaultValues={{ day: '01', month: '02', year: '2018' }}>
    What is your date of birth ?
  </DateInput>
));

examples.add('Date with hint text & error', () => (
  <DateInput
    hintText="For example, 31 03 1980"
    errorText="Error message goes here"
  >
    What is your date of birth?
  </DateInput>
));
