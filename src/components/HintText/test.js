import React from "react";
import ReactDOM from "react-dom";
import HintText from "./";

describe("HintText", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<HintText>Example</HintText>, div);
  });
});
