import React from "react";

import { storiesOf } from "@storybook/react";

import { InputField, HintText } from ".";

storiesOf("InputField", module).add("Component default", () => (
  <InputField name="group0" inputId="id0">
    National Insurance number
  </InputField>
));

storiesOf("InputField", module).add("Input with HintText", () => (
  <InputField name="group1" inputId="id1">
    National Insurance number
    <HintText>
      It&apos;s on your National Insurance card, benefit letter, payslip or P60.<br />
      For example, ‘QQ 12 34 56 C’.
    </HintText>
  </InputField>
));

storiesOf("InputField", module).add("Multiple Inputs", () => (
  <div>
    <InputField name="group1" inputId="id2">
      Your name
    </InputField>
    <InputField name="group1" inputId="id3">
      Your quest
    </InputField>
    <InputField name="group1" inputId="id4">
      National Insurance number
      <HintText>
        It&apos;s on your National Insurance card, benefit letter, payslip or
        P60.<br />
        For example, ‘QQ 12 34 56 C’.
      </HintText>
    </InputField>
  </div>
));
