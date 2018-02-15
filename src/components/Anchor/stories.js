import React from "react";
import { storiesOf } from "@storybook/react";
import { BrowserRouter, Link } from "react-router-dom";
import Anchor from ".";

const exampleURL = "https://example.com";
const exampleChild = "example";

storiesOf("Anchor", module).add("Link", () => (
  <Anchor>
    <a href={exampleURL}>{exampleChild}</a>
  </Anchor>
));
storiesOf("Anchor", module).add("Anchor", () => (
  <Anchor>
    <BrowserRouter>
      <Link to={exampleURL}>{exampleChild}</Link>
    </BrowserRouter>
  </Anchor>
));
