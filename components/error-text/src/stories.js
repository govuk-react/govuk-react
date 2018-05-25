import React from 'react';
import { storiesOf } from '@storybook/react';
import ErrorText from '.';

const stories = storiesOf('Typography/Error text', module);

stories.add('Component default', () => (
  <ErrorText errorText="example">Example</ErrorText>
));
