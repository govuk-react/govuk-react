import React from 'react';

import { storiesOf } from '@storybook/react'

import { Textarea, HintText } from '.'

storiesOf('Textarea', module).add('Component default', () => (
  <Textarea name='group1' inputId='id0'>
    National Insurance number
  </Textarea>
));

storiesOf('Textarea', module).add('Textarea with HintText', () => (
  <Textarea name='group1' inputId='id1'>
  National Insurance number
  <HintText>
    It's on your National Insurance card, benefit letter, payslip or P60.<br />
    For example, ‘QQ 12 34 56 C’.
  </HintText>
</Textarea>
));
