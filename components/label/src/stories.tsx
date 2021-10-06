import type { Story } from '@storybook/react';

import * as React from 'react';

import { LabelText, HintText, ErrorText, Input } from 'govuk-react';
import { Label } from '.';

export default {
  title: 'Form/Label',
  id: 'label',
  component: Label,
};

const Template: Story<React.ComponentProps<typeof Label>> = (args) => <Label {...args} />;

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
