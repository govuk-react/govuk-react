import type { Story } from '@storybook/react';

import * as React from 'react';
import { Label, LabelText, Input, ErrorText } from 'govuk-react';

import { HintText } from '.';

export default {
  title: 'Form/Hint text',
  id: 'hint-text',
  component: HintText,
};

export const Default: Story = (args) => <HintText {...args}>Example</HintText>;

export const WithLabel: Story = (args) => (
  <Label>
    <LabelText>Example label</LabelText>
    <HintText>Example hint</HintText>
    <ErrorText>Example error</ErrorText>
    <Input />
  </Label>
);
WithLabel.parameters = {
  chromatic: { disable: true }, // visual regression for this combination is managed by Label component
};
