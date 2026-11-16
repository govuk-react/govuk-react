import type { StoryFn } from '@storybook/react';

import * as React from 'react';
import Label from '../label';
import LabelText from '../label-text';
import Input from '../input';
import ErrorText from '../error-text';

import { HintText } from '.';

export default {
  title: 'Form/Hint text',
  id: 'hint-text',
  component: HintText,
};

export const Default: StoryFn = (args) => <HintText {...args}>Example</HintText>;

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
