import type { StoryFn } from '@storybook/react';

import * as React from 'react';
import Label from '@govuk-react/label';
import LabelText from '@govuk-react/label-text';
import HintText from '@govuk-react/hint-text';
import Input from '@govuk-react/input';

import { ErrorText } from '.';

export default {
  title: 'Form/Error text',
  id: 'error-text',
  component: ErrorText,
};

export const Default: StoryFn = (args) => <ErrorText {...args} />;

Default.args = {
  children: 'Example',
};

export const WithLabel: StoryFn = (args) => (
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
