import React from "react";
import ReactDOM from "react-dom";
import MultiChoice from "./";

describe(MultiChoice, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<MultiChoice label="example">Example</MultiChoice>, div);
  });
});
