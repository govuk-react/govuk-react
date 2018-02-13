import React from "react";
import { storiesOf } from "@storybook/react";

import ListNavigation from ".";

storiesOf("ListNavigation", module).add("ListNavigation", () => (
  <ListNavigation>
    <a href="https://example.com">lorem dolor set cetra</a>
    <a href="https://example.com">Meta logi arche decip con</a>
    <a href="https://example.com">Ignis prevo don coldo</a>
  </ListNavigation>
));
