import React from 'react';

import InputField from '.';

const meta = {
  touched: true,
  error: 'Example',
};

export default {
  title: 'Form/Input field',
  component: InputField,
};

export const Default: React.FC = () => <InputField input={{ name: 'group0' }}>National Insurance number</InputField>;
export const InputWithHintText: React.FC = () => (
  <InputField
    input={{ name: 'group1' }}
    hint={
      <>
        It’s on your National Insurance card, benefit letter, payslip or P60.
        <br />
        For example, ‘QQ 12 34 56 C’.
      </>
    }
  >
    National Insurance number
  </InputField>
);
export const InputWithHintTextError: React.FC = () => (
  <InputField
    input={{ name: 'group1' }}
    hint={
      <>
        It’s on your National Insurance card, benefit letter, payslip or P60.
        <br />
        For example, ‘QQ 12 34 56 C’.
      </>
    }
    meta={meta}
  >
    National Insurance number
  </InputField>
);
