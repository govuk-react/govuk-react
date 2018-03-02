import React from 'react';
import { storiesOf } from '@storybook/react';
import HintText from '.';

storiesOf('HintText', module).add('Component default', () => (
  <HintText hintText="example">Example</HintText>
));
