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
