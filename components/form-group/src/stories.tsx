import type { Story } from '@storybook/react';

import * as React from 'react';

import Checkbox from '@govuk-react/checkbox';

import { FormGroup } from '.';

export default {
  title: 'Form/Form group',
  id: 'form-group',
  component: FormGroup,
};

export const Default: Story = ({ error }: { error: boolean }) => (
  <FormGroup error={error}>
    <Checkbox name="group-1">Example</Checkbox>
  </FormGroup>
);
Default.args = {
  error: false,
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
Default.args = {
  outerError: false,
  innerError1: false,
  innerError2: false,
};

export const ErrorPropSet: Story = () => (
  <FormGroup error>
    <Checkbox name="group-1">Example</Checkbox>
  </FormGroup>
);

export const NestedFormGroupsWithInnerGroupsErrorPropsSet: Story = () => (
  <FormGroup>
    <Checkbox name="group-0">Outer FormGroup</Checkbox>
    <FormGroup error>
      <Checkbox name="group-1">First inner FormGroup</Checkbox>
    </FormGroup>
    <FormGroup error>
      <Checkbox name="group-2">Second inner FormGroup</Checkbox>
    </FormGroup>
  </FormGroup>
);

export const NestedFormGroupsWithAllGroupsErrorPropsSet: Story = () => (
  <FormGroup error>
    <Checkbox name="group-0">Outer FormGroup</Checkbox>
    <FormGroup error>
      <Checkbox name="group-1">First inner FormGroup</Checkbox>
    </FormGroup>
    <FormGroup error>
      <Checkbox name="group-2">Second inner FormGroup</Checkbox>
    </FormGroup>
  </FormGroup>
);
