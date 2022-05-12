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
  inputs: {
    day: { autoComplete: 'bday-day' },
    month: { autoComplete: 'bday-month' },
    year: { autoComplete: 'bday-year' },
  },
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

export const DateWithPerFieldProps = Template.bind({});
DateWithPerFieldProps.parameters = {
  docs: {
    description: {
      story:
        'Use the relevant autocomplete parameters to ensure your service is compliant with [WCAG 2.1 Level AA success criterion 1.3.5]((https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html).',
    },
  },
};
DateWithPerFieldProps.args = {
  children: 'What is your date of birth?',
  inputs: {
    day: { autoComplete: 'bday-day', id: 'birthday-day' },
    month: { autoComplete: 'bday-month', id: 'birthday-month' },
    year: { autoComplete: 'bday-year', id: 'birthday-year' },
  },
};
