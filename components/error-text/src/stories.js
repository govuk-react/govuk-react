import React from 'react';
import { storiesOf } from '@storybook/react';
import ErrorText from '.';

storiesOf('ErrorText', module).add('Component default', () => (
  <ErrorText errorText="example">Example</ErrorText>
));
