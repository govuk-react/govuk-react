import type { Story } from '@storybook/react';

import * as React from 'react';
import { action } from '@storybook/addon-actions';

import LabelText from '@govuk-react/label-text';

import { Select, SelectInput } from '.';

export default {
  title: 'Form/Select',
  id: 'select',
  component: Select,
};

const Template: Story<React.ComponentProps<typeof Select>> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  input: { name: 'group1', onChange: action('onChange') },
  label: 'This is a label',
  children: [
    <option value="0">GOV.UK elements option 1</option>,
    <option value="1">GOV.UK elements option 2</option>,
    <option value="2">GOV.UK elements option 3</option>,
  ],
};

export const SelectWithHintText = Template.bind({});
SelectWithHintText.args = {
  input: { name: 'group1', onChange: action('onChange') },
  label: 'This is a label',
  hint: 'This is and example of hintText/description of what we need from you.',
  children: [
    <option value="0">GOV.UK elements option 1</option>,
    <option value="1">GOV.UK elements option 2</option>,
    <option value="2">GOV.UK elements option 3</option>,
  ],
};

export const SelectWithHintTextError = Template.bind({});
SelectWithHintTextError.args = {
  input: { name: 'group1', onChange: action('onChange') },
  label: 'This is a label',
  hint: 'This is and example of hintText/description of what we need from you.',
  meta: {
    touched: true,
    error: 'Example',
  },
  children: [
    <option value="0">GOV.UK elements option 1</option>,
    <option value="1">GOV.UK elements option 2</option>,
    <option value="2">GOV.UK elements option 3</option>,
  ],
};

export const StandaloneInputWithInlineLabel: Story = (args) => (
  <label>
    <LabelText>
      Sort by:&nbsp;
      <SelectInput {...args}>
        <option value="0">People</option>
        <option value="1">Animals</option>
        <option value="2">Vegetables</option>
      </SelectInput>
    </LabelText>
  </label>
);
