import type { Story } from '@storybook/react';

import * as React from 'react';

import { InputField } from '.';

export default {
  title: 'Form/Input field',
  id: 'input-field',
  component: InputField,
};

const Template: Story<React.ComponentProps<typeof InputField>> = (args) => <InputField {...args} />;

export const Default = Template.bind({});
Default.args = {
  input: { name: 'group0' },
  children: 'National Insurance number',
};

export const InputWithHintText = Template.bind({});
InputWithHintText.args = {
  input: { name: 'group1' },
  hint: (
    <>
      It’s on your National Insurance card, benefit letter, payslip or P60.
      <br />
      For example, ‘QQ 12 34 56 C’.
    </>
  ),
  children: 'National Insurance number',
};

export const InputWithHintTextError = Template.bind({});
InputWithHintTextError.args = {
  input: { name: 'group1' },
  hint: (
    <>
      It’s on your National Insurance card, benefit letter, payslip or P60.
      <br />
      For example, ‘QQ 12 34 56 C’.
    </>
  ),
  meta: {
    touched: true,
    error: 'Example',
  },
  children: 'National Insurance number',
};

export const InputWithTypeAndAutoComplete = Template.bind({});
InputWithTypeAndAutoComplete.parameters = {
  docs: {
    description: {
      story:
        'Use the relevant autocomplete parameter to ensure your service is compliant with [WCAG 2.1 Level AA success criterion 1.3.5]((https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html).',
    },
  },
};
InputWithTypeAndAutoComplete.args = {
  input: { name: 'group1', autoComplete: 'email', type: 'email' },
  hint: 'We’ll only use this to send you a receipt',
  children: 'Email address',
};
