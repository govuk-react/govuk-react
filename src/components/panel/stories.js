import React from "react";
import { storiesOf } from "@storybook/react";
import Panel from ".";

storiesOf("Panel", module).add("Component default", () => (
  <Panel
    panelTitle="Success"
    panelBody={["Your reference number", <br />, <strong>HDJ2123F</strong>]}
  />
));
