import React from 'react';
import { storiesOf } from '@storybook/react';
import { ORANGE } from 'govuk-colours';

import Input from '.';

const stories = storiesOf('Form/Input', module);

stories.add('Component default', () => (
  <Input type="text" />
));

stories.add('Custom error colour', () => (
  <Input type="text" errorColor={ORANGE} error="example" />
));
