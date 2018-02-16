import React from "react";
import { storiesOf } from "@storybook/react";
import { BrowserRouter, Link } from "react-router-dom";
import AnchorWrapper from ".";

const exampleURL = "https://example.com";
const exampleChild = "example";

storiesOf("AnchorWrapper", module).add(
  "AnchorWrapper styling an anchor",
  () => (
    <AnchorWrapper>
      <a href={exampleURL}>{exampleChild}</a>
    </AnchorWrapper>
  )
);
storiesOf("AnchorWrapper", module).add(
  "AnchorWrapper styling a React Router Link",
  () => (
    <AnchorWrapper>
      <BrowserRouter>
        <Link to={exampleURL}>{exampleChild}</Link>
      </BrowserRouter>
    </AnchorWrapper>
  )
);
