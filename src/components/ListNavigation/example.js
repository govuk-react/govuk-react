import React from "react";
import ListNavigation from "./index";
import ListItem from "../ListItem/index";
import asAnchor from "../../hoc/asAnchor/index";

const AnchorTag = asAnchor("a");

export default () => (
  <ListNavigation>
    <ListItem>
      <AnchorTag href="https://example.com">Example</AnchorTag>
    </ListItem>
  </ListNavigation>
);
