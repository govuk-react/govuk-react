import React from "react";
import ReactDOM from "react-dom";

import { MultiChoice } from "./index";

describe("MultiChoice", () => {
  const example = "example";
  const wrapper = <MultiChoice>{example}</MultiChoice>;

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(wrapper, div);
  });
});
