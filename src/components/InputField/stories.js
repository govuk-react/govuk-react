import React from "react";
import { storiesOf } from "@storybook/react";
import InputField from ".";

storiesOf("InputField", module).add("Component default", () => (
  <InputField name="group0">National Insurance number</InputField>
));

storiesOf("InputField", module).add("Input with HintText", () => (
  <InputField
    name="group1"
    hintText={[
      "It’s on your National Insurance card, benefit letter, payslip or P60.",
      <br />,
      "For example, ‘QQ 12 34 56 C’."
    ]}
  >
    National Insurance number
  </InputField>
));

storiesOf("InputField", module).add("Input with HintText & error", () => (
  <InputField
    name="group1"
    hintText={[
      "It’s on your National Insurance card, benefit letter, payslip or P60.",
      <br />,
      "For example, ‘QQ 12 34 56 C’."
    ]}
    errorText="Incorrect format"
  >
    National Insurance number
  </InputField>
));

storiesOf("InputField", module).add("Multiple Inputs", () => (
  <div>
    <InputField name="group1">Your name</InputField>
    <InputField name="group1">Your quest</InputField>
    <InputField name="group1" errorText="Blue. No, yellow!">
      Your favourite colour
    </InputField>
    <InputField
      name="group1"
      hintText={[
        "It’s on your National Insurance card, benefit letter, payslip or P60.",
        <br />,
        "For example, ‘QQ 12 34 56 C’."
      ]}
    >
      National Insurance number
    </InputField>
  </div>
));
