import React from 'react';
import { storiesOf } from '@storybook/react';
import InputField from '@govuk-react/input-field';

import asWhitespace from '.';

const InputFieldWhitespace = asWhitespace(InputField, 5);

storiesOf('asWhitespace', module).add('default', () => (
  <InputFieldWhitespace>AsAnchor anchor example</InputFieldWhitespace>
));
