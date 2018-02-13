import React from "react";
import { storiesOf } from "@storybook/react";

import PhaseBanner from ".";
import Anchor from "../Anchor";

storiesOf("PhaseBanner", module).add("Alpha phase tag", () => (
  <PhaseBanner level="alpha">
    This part of GOV.UK is being rebuilt &#8211;{" "}
    <Anchor hyperLink="https://example.com">find out what that means</Anchor>
  </PhaseBanner>
));

storiesOf("PhaseBanner", module).add("Beta phase tag", () => (
  <PhaseBanner level="beta">
    This part of GOV.UK is being rebuilt &#8211;{" "}
    <Anchor hyperLink="https://example.com">find out what that means</Anchor>
  </PhaseBanner>
));
