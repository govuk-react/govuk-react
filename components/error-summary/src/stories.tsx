import type { Story } from '@storybook/react';

import * as React from 'react';
import InputField from '@govuk-react/input-field';
import TextArea from '@govuk-react/text-area';

import { ErrorSummary } from '.';

export default {
  title: 'Form/Error summary',
  component: ErrorSummary,
};

const errors = [
  {
    targetName: 'national-insurance-number',
    text: 'National Insurance number error',
  },
  {
    targetName: 'description',
    text: 'Description of what you saw error',
  },
];

const onHandleErrorClick = (targetName) => {
  document.getElementsByName(targetName)[0].scrollIntoView();
};

export const Default: Story = ({ heading, description }: { heading: string; description: string }) => (
  <div>
    <ErrorSummary heading={heading} description={description} onHandleErrorClick={onHandleErrorClick} errors={errors} />
    <InputField
      input={{ name: 'national-insurance-number' }}
      hint="It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
    >
      National Insurance number
    </InputField>
    <br />
    <TextArea input={{ name: 'description' }}>Description of what you saw</TextArea>
  </div>
);

Default.args = {
  heading: 'Message to alert the user to a problem goes here',
  description: 'Optional description of the errors and how to correct them',
};
