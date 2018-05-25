import React from 'react';
import { storiesOf } from '@storybook/react';
import LabelText from '@govuk-react/label-text';
import Select, { SelectInput } from '.';

const meta = {
  touched: true,
  error: 'Example',
};

const stories = storiesOf('Form/Select', module);

// TODO add a synthetic onChange event
stories.add('Component default', () => (
  <Select name="group1" label="This is a label">
    <option value="0">GOV.UK elements option 1</option>
    <option value="1">GOV.UK elements option 2</option>
    <option value="2">GOV.UK elements option 3</option>
  </Select>
));

stories.add('Select with hintText', () => (
  <Select
    name="group1"
    label="This is a label"
    hint={[
      'This is and example of hintText/description of what we need from you.',
    ]}
  >
    <option value="0">GOV.UK elements option 1</option>
    <option value="1">GOV.UK elements option 2</option>
    <option value="2">GOV.UK elements option 3</option>
  </Select>
));

stories.add('Select with hintText & error', () => (
  <Select
    name="group1"
    label="This is a label"
    hint={[
      'This is and example of hintText/description of what we need from you.',
    ]}
    meta={meta}
  >
    <option value="0">GOV.UK elements option 1</option>
    <option value="1">GOV.UK elements option 2</option>
    <option value="2">GOV.UK elements option 3</option>
  </Select>
));

stories.add('Standalone input with inline label', () => (
  <label>
    <LabelText>Sort by:&nbsp;
      <SelectInput>
        <option value="0">People</option>
        <option value="1">Animals</option>
        <option value="2">Vegetables</option>
      </SelectInput>
    </LabelText>
  </label>
));
