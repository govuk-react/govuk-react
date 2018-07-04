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
    label={text('label', exampleLabelText)}
    hint={text('hint', exampleHintText)}
    meta={
      {
        touched: true,
        error: text('meta.error', ''),
      }
    }
  />
);
const TextFieldWithName = () => (
  <TextField
    label={exampleLabelText}
    input={{ name: exampleFieldName }}
  />
);
const TextFieldWithHint = () => (
  <TextField
    label={exampleLabelText}
    hint={exampleHintText}
  />
);
const TextFieldWithError = () => (
  <TextField
    label={exampleLabelText}
    hint={exampleHintText}
    meta={{ error: exampleErrorText, touched: true }}
  />
);

// Simple validator for final form example
const required = value => (value ? undefined : exampleErrorText);

const TextFieldFinalForm = () => (
  <FinalFormWrapper>
    <Field
      label={exampleLabelText}
      name={exampleFieldName}
      hint={exampleHintText}
      component={TextField}
      validate={required}
      mb={4}
    />
  </FinalFormWrapper>
);

export default TextField;

export {
  exampleFieldName,
  exampleLabelText,
  exampleErrorText,
  exampleHintText,
  TextFieldWithKnobs,
  TextFieldWithName,
  TextFieldWithHint,
  TextFieldWithError,
  TextFieldFinalForm,
};

