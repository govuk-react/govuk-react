import React from "react";
import { storiesOf } from "@storybook/react";

import PhaseBanner from ".";

storiesOf("PhaseBanner", module).add("Alpha phase tag", () => (
  <PhaseBanner level="alpha">
    This part of GOV.UK is being rebuilt &#8211;{" "}
    <a href="https://example.com">find out what that means</a>
  </PhaseBanner>
));

storiesOf("PhaseBanner", module).add("Beta phase tag", () => (
  <PhaseBanner level="beta">
    This part of GOV.UK is being rebuilt &#8211;{" "}
    <a href="https://example.com">find out what that means</a>
  </PhaseBanner>
));
