import React from 'react';
import { storiesOf } from '@storybook/react';
import DateInput from '.';

const stories = storiesOf('Form/Date input', module);

stories.add('Component default', () => (
  <DateInput>What is your date of birth?</DateInput>
));

stories.add('Date with hint text', () => (
  <DateInput hintText="For example, 31 03 1980">
    What is your date of birth?
  </DateInput>
));

stories.add('Date with hint text & error', () => (
  <DateInput
    hintText="For example, 31 03 1980"
    errorText="Error message goes here"
  >
    What is your date of birth?
  </DateInput>
));
