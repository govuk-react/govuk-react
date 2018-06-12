import React from 'react';
import { text } from '@storybook/addon-knobs/react';
import InputField from '@govuk-react/input-field';
import TextArea from '@govuk-react/text-area';

import ErrorSummary from '.';

export const heading = 'Message to alert the user to a problem goes here';
export const description = 'Optional description of the errors and how to correct them';
export const errors = [
  {
    targetName: 'national-insurance-number',
    text: 'National Insurance number error',
  },
  {
    targetName: 'description',
    text: 'Description of what you saw error',
  },
];

export default () => (
  <div>
    <ErrorSummary
      heading={text('heading', heading)}
      description={text('description', description)}
      errors={errors}
    />
    <InputField
      name="national-insurance-number"
      hint={[
        'It’s on your National Insurance card, benefit letter, payslip or P60.',
        <br />,
        'For example, ‘QQ 12 34 56 C’.',
      ]}
    >
      National Insurance number
    </InputField>
    <br />
    <TextArea name="description">Description of what you saw</TextArea>
  </div>
);
