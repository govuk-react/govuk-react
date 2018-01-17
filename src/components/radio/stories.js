import React from 'react';
import { storiesOf } from '@storybook/react'
import Radio from '.'


storiesOf('Radio', module).add('Radio stacked', () => (
  <div>
    <Radio name='group1'>Waste from animal carcasses</Radio>
    <Radio name='group1'>Waste from mines or quarries</Radio>
    <Radio name='group1'>Farm or agricultural waste</Radio>
  </div>
));

storiesOf('Radio', module).add('Radio inline', () => (
  <div>
    <Radio name='group1' inline>Yes</Radio>
    <Radio name='group1' inline>No</Radio>
  </div>
));


storiesOf('Radio', module).add('Radio disabled', () => (
  <div>
    <Radio name='group1' disabled="disabled">Disabled checkbox option</Radio>
  </div>
));

storiesOf('Radio', module).add('Radio preselected', () => (
  <div>
    <Radio name='group1' defaultChecked>Farm or agricultural waste</Radio>
  </div>
));

storiesOf('Radio', module).add('Radio preselected & disabled', () => (
  <div>
    <Radio name='group1' disabled="disabled" defaultChecked>Farm or agricultural waste</Radio>
  </div>
));
