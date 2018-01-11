import React from 'react';

import { storiesOf } from '@storybook/react'

import Select from '.'

storiesOf('Select', module).add('Component default', () => (
  <Select name='group1' inputId='id0' label='This is a label'>
    <option value="0">GOV.UK elements option 1</option>
    <option value="1">GOV.UK elements option 2</option>
    <option value="2">GOV.UK elements option 3</option>
  </Select>
));
