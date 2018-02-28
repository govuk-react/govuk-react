import React from "react";
import MultiChoice from ".";
import Radio from "../Radio";

export default () => (
  <MultiChoice label="example">
    <Radio name="group1" inline>
      Yes
    </Radio>
    <Radio name="group1" inline>
      No
    </Radio>
  </MultiChoice>
);
