import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import BackLink from ".";

const buttonEvent = () => {
  action("onClick");
};

storiesOf("BackLink", module).add("Component default", () => (
  <BackLink goBack={buttonEvent}>Back</BackLink>
));
