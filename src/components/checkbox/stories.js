import React from 'react';

import { storiesOf } from '@storybook/react'

import Checkbox from '.'

storiesOf('Checkbox', module).add('Component default', () => <div>
  <Checkbox>Waste from animal carcasses</Checkbox>
  <Checkbox>Waste from mines or quarries</Checkbox>
  <Checkbox checked>Farm or agricultural waste</Checkbox>
  <Checkbox disabled>Disabled checkbox option</Checkbox>
</div>);
