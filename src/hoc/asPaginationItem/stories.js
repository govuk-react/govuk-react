import React from "react";
import { storiesOf } from "@storybook/react";
import { BrowserRouter, Link } from "react-router-dom";

import asPaginationItem from ".";

const PaginationTag = asPaginationItem("a");
const PaginationLink = asPaginationItem(Link);

storiesOf("asAnchor", module).add("asAnchor passing in anchor", () => (
  <PaginationTag href="https://cats.org">AsAnchor anchor example</PaginationTag>
));

storiesOf("asAnchor", module).add(
  "asAnchor passing in anchor target=blank",
  () => (
    <PaginationTag href="https://cats.org" target="_blank">
      AsAnchor anchor example
    </PaginationTag>
  )
);

storiesOf("asAnchor", module).add(
  "asAnchor passing in React Router Link",
  () => (
    <BrowserRouter>
      <PaginationLink to="https://dogs.org">AsAnchor Link example</PaginationLink>
    </BrowserRouter>
  )
);
