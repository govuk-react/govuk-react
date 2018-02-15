import React from "react";
import { storiesOf } from "@storybook/react";
// import { Link } from "react-router";
import Anchor from ".";

const ReactLink = <div>stuff</div>;

storiesOf("Anchor", module).add("Anchor default", () => (
  <Anchor hyperLink="https://example.com" label="label" target="_blank">
    Anchor example
  </Anchor>
));

storiesOf("Anchor", module).add("Link example", () => (
  <Anchor hyperLink="https://example.com" component={ReactLink}>
    link example
  </Anchor>
));
