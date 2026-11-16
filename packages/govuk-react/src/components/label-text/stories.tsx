import type { StoryFn } from '@storybook/react';

import * as React from 'react';
import Label from '../label';
import HintText from '../hint-text';
import ErrorText from '../error-text';
import Input from '../input';

import { LabelText } from '.';

export default {
  title: 'Form/Label text',
  id: 'label-text',
  component: LabelText,
};

const Template: StoryFn<React.ComponentProps<typeof LabelText>> = (args) => <LabelText {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Example',
};

export const WithLabel = Template.bind({});
WithLabel.decorators = [
  (storyFn) => (
    <Label>
      {storyFn()}
      <HintText>Example hint</HintText>
      <ErrorText>Example error</ErrorText>
      <Input />
    </Label>
  ),
];

WithLabel.args = {
  children: 'Example',
};

WithLabel.parameters = {
  chromatic: { disable: true }, // visual regression for this combination is managed by Label component
};
