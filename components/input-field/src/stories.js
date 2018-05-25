import React from 'react';
import { storiesOf } from '@storybook/react';
import InputField from '.';

const meta = {
  touched: true,
  error: 'Example',
};

const stories = storiesOf('Form/InputField', module);

stories.add('Component default', () => (
  <InputField name="group0">National Insurance number</InputField>
));

stories.add('Input with HintText', () => (
  <InputField
    name="group1"
    hint={[
      'It’s on your National Insurance card, benefit letter, payslip or P60.',
      <br />,
      'For example, ‘QQ 12 34 56 C’.',
    ]}
  >
    National Insurance number
  </InputField>
));

stories.add('Input with HintText & error', () => (
  <InputField
    name="group1"
    hint={[
      'It’s on your National Insurance card, benefit letter, payslip or P60.',
      <br />,
      'For example, ‘QQ 12 34 56 C’.',
    ]}
    meta={meta}
  >
    National Insurance number
  </InputField>
));
