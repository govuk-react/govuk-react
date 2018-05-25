import React from 'react';
import { storiesOf } from '@storybook/react';
import Label from '.';

const stories = storiesOf('Form/Label', module);

stories.add('Component default', () => (
  <Label>Example</Label>
));
