import type { StoryFn } from '@storybook/react';

import * as React from 'react';

import LabelText from '@govuk-react/label-text';
import HintText from '@govuk-react/hint-text';
import ErrorText from '@govuk-react/error-text';
import Input from '@govuk-react/input';
import { Label } from '.';

export default {
  title: 'Form/Label',
  id: 'label',
  component: Label,
};

const Template: StoryFn<React.ComponentProps<typeof Label>> = (args) => <Label {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Example',
};

export const WithInput = Template.bind({});

WithInput.args = {
  children: [
    <LabelText>Example label</LabelText>,
    <HintText>Example hint</HintText>,
    <ErrorText>Example error</ErrorText>,
    <Input />,
  ],
};
