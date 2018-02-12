import React from "react";
import ReactDOM from "react-dom";
import betaBanner from "./";

describe(betaBanner, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<betaBanner>Example</betaBanner>, div);
  });
});
