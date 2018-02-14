import React from "react";
import { storiesOf } from "@storybook/react";

import Layout from "../Layout/index";
import GridRow from "../GridRow/index";
import GridCol from "../GridCol/index";

import SearchBox from ".";

storiesOf("SearchBox", module).add("SearchBox", () => (
  <Layout>
    <GridRow>
      <GridCol>
        <SearchBox placeholder="Search GOV.UK">SearchBox example</SearchBox>
      </GridCol>
    </GridRow>
  </Layout>
));
