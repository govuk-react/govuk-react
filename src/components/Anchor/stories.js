import React from "react";
import { storiesOf } from "@storybook/react";

import Anchor from ".";

storiesOf("Anchor", module).add("Anchor default", () => (
  <Anchor hyperLink="https://example.com">Anchor example</Anchor>
));
