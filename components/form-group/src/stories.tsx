import type { Story } from '@storybook/react';

import * as React from 'react';

import Checkbox from '@govuk-react/checkbox';

import { FormGroup } from '.';

export default {
  title: 'Form/Form group',
  id: 'form-group',
  component: FormGroup,
};

const Template: Story<React.ComponentProps<typeof FormGroup>> = (args) => <FormGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  error: false,
  children: <Checkbox name="group-1">Example</Checkbox>,
};

export const NestedFormGroups: Story = ({
  outerError,
  innerError1,
  innerError2,
}: {
  outerError: boolean;
  innerError1: boolean;
  innerError2: boolean;
}) => (
  <FormGroup error={outerError}>
    <Checkbox name="group-0">Outer FormGroup</Checkbox>
    <FormGroup error={innerError1}>
      <Checkbox name="group-1">First inner FormGroup</Checkbox>
    </FormGroup>
    <FormGroup error={innerError2}>
      <Checkbox name="group-2">Second inner FormGroup</Checkbox>
    </FormGroup>
  </FormGroup>
);
NestedFormGroups.args = {
  outerError: false,
  innerError1: false,
  innerError2: false,
};

export const ErrorPropSet = Template.bind({});
ErrorPropSet.args = {
  error: true,
  children: <Checkbox name="group-1">Example</Checkbox>,
};

export const NestedFormGroupsWithInnerGroupsErrorPropsSet = Template.bind({});
NestedFormGroupsWithInnerGroupsErrorPropsSet.args = {
  error: false,
  children: [
    <Checkbox name="group-0">Outer FormGroup</Checkbox>,
    <FormGroup error>
      <Checkbox name="group-1">First inner FormGroup</Checkbox>
    </FormGroup>,
    <FormGroup error>
      <Checkbox name="group-2">Second inner FormGroup</Checkbox>
    </FormGroup>,
  ],
};

export const NestedFormGroupsWithAllGroupsErrorPropsSet = Template.bind({});
NestedFormGroupsWithAllGroupsErrorPropsSet.args = {
  error: true,
  children: [
    <Checkbox name="group-0">Outer FormGroup</Checkbox>,
    <FormGroup error>
      <Checkbox name="group-1">First inner FormGroup</Checkbox>
    </FormGroup>,
    <FormGroup error>
      <Checkbox name="group-2">Second inner FormGroup</Checkbox>
    </FormGroup>,
  ],
};
