import React from 'react';
import { storiesOf } from '@storybook/react';
import HintText from '.';

const stories = storiesOf('Typography/HintText', module);

stories.add('Component default', () => (
  <HintText hintText="example">Example</HintText>
));
