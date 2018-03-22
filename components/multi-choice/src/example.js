import React from 'react';
import Radio from '@govuk-react/radio';
import MultiChoice from '.';

export default () => (
  <MultiChoice label="example">
    <Radio name="group1" inline>
      Yes
    </Radio>
    <Radio name="group1" inline>
      No
    </Radio>
  </MultiChoice>
);
