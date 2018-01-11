import React from 'react';

import { storiesOf } from '@storybook/react'

import Radio from '.'

storiesOf('Radio', module).add('Radio stacked', () => (
  <div>
    <Radio name='group1' radioId='id0'>Waste from animal carcasses</Radio>
    <Radio name='group1' radioId='id1'>Waste from mines or quarries</Radio>
    <Radio name='group1' radioId='id2'>Farm or agricultural waste</Radio>
  </div>
));

storiesOf('Radio', module).add('Radio inline', () => (
  <div>
    <Radio name='group1' radioId='id3' inline>Yes</Radio>
    <Radio name='group1' radioId='id4' inline>No</Radio>
  </div>
));


storiesOf('Radio', module).add('Radio disabled', () => (
  <div>
    <Radio disabled="disabled" radioId='id5'>Disabled checkbox option</Radio>
  </div>
));

storiesOf('Radio', module).add('Radio preselected', () => (
  <div>
    <Radio defaultChecked radioId='id6'>Farm or agricultural waste</Radio>
  </div>
));

storiesOf('Radio', module).add('Radio preselected & disabled', () => (
  <div>
    <Radio disabled="disabled" defaultChecked radioId='id7'>Farm or agricultural waste</Radio>
  </div>
));
