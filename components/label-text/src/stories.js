import React from 'react';
import { storiesOf } from '@storybook/react';
import LabelText from '.';

const stories = storiesOf('Form/LabelText', module);

stories.add('Component default', () => (
  <LabelText>Example</LabelText>
));
