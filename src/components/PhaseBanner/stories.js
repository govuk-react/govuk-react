import React from "react";
import { storiesOf } from "@storybook/react";

import PhaseBanner from ".";
import StyledLink from "../StyledLink";

storiesOf("PhaseBanner", module).add("Alpha phase tag", () => (
  <PhaseBanner level="alpha">
    This part of GOV.UK is being rebuilt &#8211;{" "}
    <StyledLink hyperLink="https://cat.com">
      find out what that means
    </StyledLink>
  </PhaseBanner>
));

storiesOf("PhaseBanner", module).add("Beta phase tag", () => (
  <PhaseBanner level="beta">
    This part of GOV.UK is being rebuilt &#8211;{" "}
    <StyledLink hyperLink="https://cat.com">
      find out what that means
    </StyledLink>
  </PhaseBanner>
));
