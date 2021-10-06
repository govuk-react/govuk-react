import type { Story } from '@storybook/react';

import * as React from 'react';
import { Label, LabelText, HintText, Input } from 'govuk-react';

import { ErrorText } from '.';

export default {
  title: 'Form/Error text',
  id: 'error-text',
  component: ErrorText,
};

export const Default: Story = (args) => <ErrorText {...args} />;

Default.args = {
  children: 'Example',
};

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
