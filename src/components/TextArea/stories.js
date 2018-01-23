import React from "react";
import { storiesOf } from "@storybook/react";

import TextArea from ".";

storiesOf("Textarea", module).add("Textarea", () => (
  <TextArea name="group1">Description of what you saw</TextArea>
));

storiesOf("Textarea", module).add("Textarea with HintText", () => (
  <TextArea name="group1" hintText={["Enter as many words as you like"]}>
    Description of what you saw
  </TextArea>
));

storiesOf("Textarea", module).add("Textarea with HintText & error", () => (
  <TextArea
    name="group1"
    hintText={["Enter as many words as you like"]}
    errorText="Please enter a description"
  >
    Description of what you saw
  </TextArea>
));
