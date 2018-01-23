import React from "react";
import ReactDOM from "react-dom";
import Label from "./";

describe("Label", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Label>Example</Label>, div);
  });
});
