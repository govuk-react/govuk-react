import React from 'react';
import { storiesOf } from '@storybook/react';
import Radio from '@govuk-react/radio';

import MultiChoice from '.';

const stories = storiesOf('Form/MultiChoice', module);

stories.add('MultiChoice', () => (
  <MultiChoice label="example">
    <Radio name="group1" inline>
      Yes
    </Radio>
    <Radio name="group1" inline>
      No
    </Radio>
  </MultiChoice>
));
