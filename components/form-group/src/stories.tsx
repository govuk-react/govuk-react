import React from 'react';

import { boolean, withKnobs } from '@storybook/addon-knobs';
import Checkbox from '@govuk-react/checkbox';

import { FormGroup } from '.';

export default {
  title: 'Form/Form group',
  component: FormGroup,
  decorators: [withKnobs],
};

export const Default: React.FC = () => (
  <FormGroup error={boolean('error', false)}>
    <Checkbox name="group-1">Example</Checkbox>
  </FormGroup>
);

export const NestedFormGroups: React.FC = () => (
  <FormGroup error={boolean('outer error', false)}>
    <Checkbox name="group-0">Outer FormGroup</Checkbox>
    <FormGroup error={boolean('inner error 1', false)}>
      <Checkbox name="group-1">First inner FormGroup</Checkbox>
    </FormGroup>
    <FormGroup error={boolean('inner error 2', false)}>
      <Checkbox name="group-2">Second inner FormGroup</Checkbox>
    </FormGroup>
  </FormGroup>
);

export const ErrorPropSet: React.FC = () => (
  <FormGroup error>
    <Checkbox name="group-1">Example</Checkbox>
  </FormGroup>
);

export const NestedFormGroupsWithInnerGroupsErrorPropsSet: React.FC = () => (
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

export const NestedFormGroupsWithAllGroupsErrorPropsSet: React.FC = () => (
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
