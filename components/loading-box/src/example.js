import React from 'react';
import InputField from '@govuk-react/input-field';
import LoadingBox from '.';

export default () => (
  <LoadingBox
    loading
    backgroundColor="#fff"
    timeIn={0}
    timeOut={0}
    backgroundColorOpacity={0.75}
    spinnerColor="#000"
  >
    <InputField
      name="group1"
      hint="It’s on your National Insurance card"
    >
      National Insurance number
    </InputField>
  </LoadingBox>
);
