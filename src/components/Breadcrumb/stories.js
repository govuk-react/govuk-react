import React from "react";
import { storiesOf } from "@storybook/react";
import { BrowserRouter, Link } from "react-router-dom";

import Breadcrumb from ".";
import asAnchor from "../../hoc/asAnchor/index";

const AnchorTag = asAnchor("a");
const AnchorLink = asAnchor(Link);

storiesOf("Breadcrumb", module).add("Component default", () => (
  <Breadcrumb>
    <AnchorTag href="/section">Section 1</AnchorTag>
  </Breadcrumb>
));

storiesOf("Breadcrumb", module).add("Three levels deep", () => (
  <Breadcrumb>
    <AnchorTag href="/section">Section 1</AnchorTag>
    <AnchorTag href="/section/sub-section">Sub-section</AnchorTag>
    <AnchorTag href="/section/three">Three sections and a long line</AnchorTag>
  </Breadcrumb>
));

storiesOf("Breadcrumb", module).add(
  "Three levels deep using React Router Link",
  () => (
    <Breadcrumb>
      <BrowserRouter>
        <AnchorLink to="/section">Section 1</AnchorLink>
      </BrowserRouter>
      <BrowserRouter>
        <AnchorLink to="/section/sub-section">Sub-section</AnchorLink>
      </BrowserRouter>
      <BrowserRouter>
        <AnchorLink to="/section/three">
          Three sections and a long line
        </AnchorLink>
      </BrowserRouter>
    </Breadcrumb>
  )
);
