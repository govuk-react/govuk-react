import * as React from 'react';

import LabelText from '@govuk-react/label-text';
import { Select, SelectInput } from '.';

const meta = {
  touched: true,
  error: 'Example',
};

export default {
  title: 'Form/Select',
  id: 'select',
  component: Select,
};

// TODO: add a synthetic onChange event
export const Default: React.FC = () => (
  <Select input={{ name: 'group1' }} label="This is a label">
    <option value="0">GOV.UK elements option 1</option>
    <option value="1">GOV.UK elements option 2</option>
    <option value="2">GOV.UK elements option 3</option>
  </Select>
);

export const SelectWithHintText: React.FC = () => (
  <Select
    input={{ name: 'group1' }}
    label="This is a label"
    hint={['This is and example of hintText/description of what we need from you.']}
  >
    <option value="0">GOV.UK elements option 1</option>
    <option value="1">GOV.UK elements option 2</option>
    <option value="2">GOV.UK elements option 3</option>
  </Select>
);

export const SelectWithHintTextError: React.FC = () => (
  <Select
    input={{ name: 'group1' }}
    label="This is a label"
    hint={['This is and example of hintText/description of what we need from you.']}
    meta={meta}
  >
    <option value="0">GOV.UK elements option 1</option>
    <option value="1">GOV.UK elements option 2</option>
    <option value="2">GOV.UK elements option 3</option>
  </Select>
);

export const StandaloneInputWithInlineLabel: React.FC = () => (
  <label>
    <LabelText>
      Sort by:&nbsp;
      <SelectInput>
        <option value="0">People</option>
        <option value="1">Animals</option>
        <option value="2">Vegetables</option>
      </SelectInput>
    </LabelText>
  </label>
);
