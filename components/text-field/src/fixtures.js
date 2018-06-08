import React from 'react';
import { text } from '@storybook/addon-knobs/react';

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
export const TextFieldWithError = () => <TextField meta={{ error: 'Error text' }}>Label text</TextField>;
