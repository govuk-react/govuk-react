import React from 'react';
import { Field } from 'react-final-form';
import { text } from '@storybook/addon-knobs/react';
import { FinalFormWrapper } from '@govuk-react/storybook-components';

import TextField from '.';

const exampleFieldName = 'NI_Number';
const exampleLabelText = 'National Insurance number';
const exampleErrorText = 'Required';
const exampleHintText = 'It’s on your National Insurance card, benefit letter, payslip or P60.';

const TextFieldWithKnobs = () => (
  <TextField
    hint={text('hint', exampleHintText )}
    meta={
      {
        error: text('meta.error', '' ),
      }
    }
  >
    {text('label', exampleLabelText)}
  </TextField>
);
const TextFieldWithHint = () => <TextField hint={exampleHintText}>{ exampleLabelText }</TextField>;
const TextFieldWithError = () => (
  <TextField hint={exampleHintText} meta={{ error: exampleErrorText, touched: true }}>
    {exampleLabelText}
  </TextField>
);

// Simple validator for final form example
const required = value => (value ? undefined : exampleErrorText);

const TextFieldFinalForm = () => (
  <FinalFormWrapper>
    <Field
      name={exampleFieldName}
      hint={exampleHintText}
      component={TextField}
      validate={required}
      mb={4}
    >
      { exampleLabelText }
    </Field>
  </FinalFormWrapper>
);

export default TextField;

export {
  exampleFieldName,
  exampleLabelText,
  exampleErrorText,
  exampleHintText,
  TextFieldWithKnobs,
  TextFieldWithHint,
  TextFieldWithError,
  TextFieldFinalForm,
};

