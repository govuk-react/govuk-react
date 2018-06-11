import React from 'react';
import { Field } from 'react-final-form';
import { text } from '@storybook/addon-knobs/react';
import { FinalFormWrapper } from '@govuk-react/storybook-components';

import TextField from '.';

export default () => (
  <TextField
    hint={text('hint', 'It’s on your National Insurance card, benefit letter, payslip or P60.')}
    meta={
      {
        error: text('meta.error', ''),
      }
    }
  >
    {text('label', 'National Insurance number')}
  </TextField>
);

export const TextFieldWithHint = () => <TextField hint="Hint text">Label text</TextField>;
export const TextFieldWithError = () => <TextField meta={{ error: 'Error text', touched: true }}>Label text</TextField>;

// Simple validator for final form example
const required = value => (value ? undefined : 'Required');

export const TextFieldFinalForm = () => (
  <FinalFormWrapper>
    <Field
      name="likesAnimals"
      hint="You must tell us"
      component={TextField}
      validate={required}
      mb="4"
    >
      Do you like animals?
    </Field>
  </FinalFormWrapper>
);
