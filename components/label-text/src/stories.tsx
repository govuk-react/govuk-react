import type { Story } from '@storybook/react';

import * as React from 'react';
import { Label, HintText, ErrorText, Input } from 'govuk-react';

import { LabelText } from '.';

export default {
  title: 'Form/Label text',
  id: 'label-text',
  component: LabelText,
};

const Template: Story<React.ComponentProps<typeof LabelText>> = (args) => <LabelText {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Example',
};

export const WithWrappingLabel = Template.bind({});
WithWrappingLabel.decorators = [
  (StoryFunc) => (
    <Label>
      {StoryFunc()}
      <HintText>Example hint</HintText>
      <ErrorText>Example error</ErrorText>
      <Input />
    </Label>
  ),
];

WithWrappingLabel.args = {
  children: 'Example',
};
