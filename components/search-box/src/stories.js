import React from "react";
import { storiesOf } from "@storybook/react";
import { WithDocsCustom } from "@govuk-react/storybook-components";

import Layout from "@govuk-react/layout";
import GridRow from "@govuk-react/grid-row";
import GridCol from "@govuk-react/grid-col";

import SearchBox from ".";
import ReadMe from "../README.md";

const stories = storiesOf("Form/SearchBox", module);

stories.addDecorator(WithDocsCustom(ReadMe));

stories.add("Component default", () => (
  <Layout>
    <GridRow>
      <GridCol>
        <SearchBox placeholder="Search GOV.UK">SearchBox example</SearchBox>
      </GridCol>
    </GridRow>
  </Layout>
));
