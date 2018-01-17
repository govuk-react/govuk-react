import React from "react";
import { storiesOf } from "@storybook/react";

import { Textarea } from ".";

storiesOf("Textarea", module).add("Textarea", () => (
  <Textarea name="group1">Description of what you saw</Textarea>
));

storiesOf("Textarea", module).add("Textarea with HintText", () => (
  <Textarea name="group1" hintText={["Enter as many words as you like"]}>
    Description of what you saw
  </Textarea>
));

storiesOf("Textarea", module).add("Textarea with HintText & error", () => (
  <Textarea
    name="group1"
    hintText={["Enter as many words as you like"]}
    errorText="Please enter a description"
  >
    Description of what you saw
  </Textarea>
));
