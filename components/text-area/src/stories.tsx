import type { Story } from '@storybook/react';

import * as React from 'react';

import { TextArea } from '.';

export default {
  title: 'Form/Textarea',
  id: 'text-area',
  component: TextArea,
};

const Template: Story<React.ComponentProps<typeof TextArea>> = (args) => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  input: { name: 'group1' },
  children: 'Description of what you saw',
};

export const TextareaWithHintText = Template.bind({});
TextareaWithHintText.args = {
  input: { name: 'group1' },
  hint: 'Enter as many words as you like',
  children: 'Description of what you saw',
};

export const TextareaWithHintTextError = Template.bind({});
TextareaWithHintTextError.args = {
  input: { name: 'group1' },
  hint: 'Enter as many words as you like',
  children: 'Description of what you saw',
  meta: {
    touched: true,
    error: 'Example',
  },
};
