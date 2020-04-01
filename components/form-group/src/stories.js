import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, withKnobs } from '@storybook/addon-knobs/react';
import { withDocsCustom } from '@govuk-react/storybook-components';
import Checkbox from '@govuk-react/checkbox';

import FormGroup from '.';

import ReadMe from '../README.md';

const stories = storiesOf('Form/FormGroup', module);
stories.addDecorator(withKnobs);

stories.add('Component default', () =>
  withDocsCustom(ReadMe)(() => (
    <FormGroup error={boolean('error', false)}>
      <Checkbox name="group-1">Example</Checkbox>
    </FormGroup>
  ))
);

stories.add('Nested FormGroups', () => (
  <FormGroup error={boolean('outer error', false)}>
    <Checkbox name="group-0">Outer FormGroup</Checkbox>
    <FormGroup error={boolean('inner error 1', false)}>
      <Checkbox name="group-1">First inner FormGroup</Checkbox>
    </FormGroup>
    <FormGroup error={boolean('inner error 2', false)}>
      <Checkbox name="group-2">Second inner FormGroup</Checkbox>
    </FormGroup>
  </FormGroup>
));

stories.add('Error prop set', () => (
  <FormGroup error>
    <Checkbox name="group-1">Example</Checkbox>
  </FormGroup>
));

stories.add('Nested FormGroups with inner groups error props set', () => (
  <FormGroup>
    <Checkbox name="group-0">Outer FormGroup</Checkbox>
    <FormGroup error>
      <Checkbox name="group-1">First inner FormGroup</Checkbox>
    </FormGroup>
    <FormGroup error>
      <Checkbox name="group-2">Second inner FormGroup</Checkbox>
    </FormGroup>
  </FormGroup>
));

stories.add('Nested FormGroups with all groups error props set', () => (
  <FormGroup error>
    <Checkbox name="group-0">Outer FormGroup</Checkbox>
    <FormGroup error>
      <Checkbox name="group-1">First inner FormGroup</Checkbox>
    </FormGroup>
    <FormGroup error>
      <Checkbox name="group-2">Second inner FormGroup</Checkbox>
    </FormGroup>
  </FormGroup>
));
