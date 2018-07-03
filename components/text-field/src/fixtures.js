import React from 'react';
import { Field } from 'react-final-form';
import { text } from '@storybook/addon-knobs/react';
import { FinalFormWrapper } from '@govuk-react/storybook-components';

import TextField from '.';

const exampleLabelText = 'Label text';
const exampleErrorText = 'Error text';
const exampleHintText = 'Hint text';

const TextFieldWithKnobs = () => (
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
const TextFieldWithHint = () => <TextField hint={exampleHintText}>{ exampleLabelText }</TextField>;
const TextFieldWithError = () => (
  <TextField meta={{ error: exampleErrorText, touched: true }}>
    { exampleLabelText }
  </TextField>
);

// Simple validator for final form example
const required = value => (value ? undefined : 'Required');

const TextFieldFinalForm = () => (
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

export default TextField;

export {
  exampleLabelText,
  exampleErrorText,
  exampleHintText,
  TextFieldWithKnobs,
  TextFieldWithHint,
  TextFieldWithError,
  TextFieldFinalForm,
};

