import React from "react";
import { storiesOf } from "@storybook/react";
import { BrowserRouter, Link } from "react-router-dom";

import StyledLink from ".";

const exampleURL = "https://example.com";
const thing = (
  <div>
    <BrowserRouter>
      <Link to={exampleURL}>example link</Link>
    </BrowserRouter>
  </div>
);

storiesOf("StyledLink", module).add("StyledLink", () => (
  <StyledLink hyperLink={exampleURL} target="_blank">
    StyledLink example
  </StyledLink>
));

storiesOf("StyledLink", module).add("StyledLink with Link", () => (
  <StyledLink component={thing} />
));
