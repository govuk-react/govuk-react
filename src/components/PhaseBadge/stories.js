import React from "react";
import { storiesOf } from "@storybook/react";

import PhaseBadge from ".";

storiesOf("PhaseBadge", module).add("PhaseBadge", () => (
  <PhaseBadge>beta</PhaseBadge>
));
