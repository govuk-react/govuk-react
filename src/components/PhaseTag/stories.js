import React from "react";
import { storiesOf } from "@storybook/react";

import PhaseTag from ".";
import Anchor from "../Anchor";

storiesOf("PhaseTag", module).add("Alpha phase tag", () => (
  <PhaseTag level="alpha">
    This part of GOV.UK is being rebuilt &#8211;{" "}
    <Anchor hyperLink="https://example.com">find out what that means</Anchor>
  </PhaseTag>
));

storiesOf("PhaseTag", module).add("Beta phase tag", () => (
  <PhaseTag level="beta">
    This part of GOV.UK is being rebuilt &#8211;{" "}
    <Anchor hyperLink="https://example.com">find out what that means</Anchor>
  </PhaseTag>
));
