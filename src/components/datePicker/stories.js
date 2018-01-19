import React from "react";
import { storiesOf } from "@storybook/react";
import DatePicker from ".";

storiesOf("DatePicker", module).add("Component default", () => (
  <DatePicker>What is your date of birth?</DatePicker>
));

storiesOf("DatePicker", module).add("Date with hint text", () => (
  <DatePicker hintText="For example, 31 3 1980">
    What is your date of birth?
  </DatePicker>
));

storiesOf("DatePicker", module).add("Date with hint text & error", () => (
  <DatePicker
    hintText="For example, 31 3 1980"
    errorText="Error message goes here"
  >
    What is your date of birth?
  </DatePicker>
));
