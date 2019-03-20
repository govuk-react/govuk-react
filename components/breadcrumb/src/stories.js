import React from "react";
import { storiesOf } from "@storybook/react";
import { WithDocsCustom } from "@govuk-react/storybook-components";

import Breadcrumb from ".";
import ReadMe from "../README.md";

const stories = storiesOf("Navigation/Breadcrumb", module);

stories.addDecorator(WithDocsCustom(ReadMe));

stories.add("Component default", () => (
  <Breadcrumb>
    <Breadcrumb.Link href="/section">Section</Breadcrumb.Link>
    <Breadcrumb.Link href="/section/sub-section">Sub-section</Breadcrumb.Link>
    Current page
  </Breadcrumb>
));
