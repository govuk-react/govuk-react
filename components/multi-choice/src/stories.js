import React from 'react';
import { storiesOf } from '@storybook/react';

import Radio from '../Radio';
import MultiChoice from '.';

storiesOf('MultiChoice', module).add('MultiChoice', () => (
  <MultiChoice label="example">
    <Radio name="group1" inline>
      Yes
    </Radio>
    <Radio name="group1" inline>
      No
    </Radio>
  </MultiChoice>
));
