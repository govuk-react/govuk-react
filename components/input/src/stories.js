import React from 'react';
import { storiesOf } from '@storybook/react';
import { ORANGE } from 'govuk-colours';

import Input from '.';

storiesOf('Input', module).add('Component default', () => (
  <Input type="text" />
));

storiesOf('Input', module).add('Custom error colour', () => (
  <Input type="text" errorColour={ORANGE} error="example" />
));
