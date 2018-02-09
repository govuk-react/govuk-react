import React from "react";
import { storiesOf } from "@storybook/react";

import Breadcrumb from ".";

storiesOf("Breadcrumb", module).add("Component default", () => (
  <Breadcrumb>
    <a href="/section">Section 1</a>
  </Breadcrumb>
));

storiesOf("Breadcrumb", module).add("Three levels deep", () => (
  <Breadcrumb>
    <a href="/section">Section 1</a>
    <a href="/section/sub-section">Sub-section</a>
    <a href="/section/three">Three sections and a long line</a>
  </Breadcrumb>
));
