import React from "react";
import ReactDOM from "react-dom";

import FinalFormWrapper from "./FinalFormWrapper";

describe("FinalFormWrapper", () => {
  const example = "example";
  const wrapper = <FinalFormWrapper>{example}</FinalFormWrapper>;

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(wrapper, div);
  });
});
