import * as React from 'react';
import type { Story } from '@storybook/react';

import { action } from '@storybook/addon-actions';

import { DateField } from '.';

export default {
  title: 'Form/Date field',
  id: 'date-field',
  component: DateField,
};

const Template: Story<React.ComponentProps<typeof DateField>> = (args) => <DateField {...args} />;
export const Default = Template.bind({});
Default.args = {
  input: {
    onFocus: action('date-focus'),
    onBlur: action('date-blur'),
    onChange: action('date-change'),
  },
  inputNames: { day: 'dayInputName' },
  children: 'What is your date of birth?',
};

export const DateWithHintText = Template.bind({});
DateWithHintText.args = {
  hintText: 'For example, 31 03 1980',
  children: 'What is your date of birth?',
};

export const DateWithDefaultValues = Template.bind({});
DateWithDefaultValues.args = {
  defaultValues: { day: '01', month: '02', year: '2018' },
  children: 'What is your date of birth?',
};

export const DateWithHintTextError = Template.bind({});
DateWithHintTextError.args = {
  hintText: 'For example, 31 03 1980',
  children: 'What is your date of birth?',
  errorText: 'Error message goes here',
};
