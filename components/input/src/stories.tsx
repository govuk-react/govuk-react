import type { StoryFn } from '@storybook/react';

import * as React from 'react';
import Label from '@govuk-react/label';
import LabelText from '@govuk-react/label-text';
import HintText from '@govuk-react/hint-text';
import ErrorText from '@govuk-react/error-text';

import { Input } from '.';

export default {
  title: 'Form/Input',
  id: 'input',
  component: Input,
};

export const Default: StoryFn = (args) => <Input type="text" {...args} />;

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
