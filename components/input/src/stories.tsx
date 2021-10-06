import type { Story } from '@storybook/react';

import * as React from 'react';
import { Label, LabelText, HintText, ErrorText } from 'govuk-react';

import { Input } from '.';

export default {
  title: 'Form/Input',
  id: 'input',
  component: Input,
};

export const Default: Story = (args) => <Input type="text" {...args} />;

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
