import React from "react";
import ReactDOM from "react-dom";
import Select from "./";

describe("Select", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Select label="Example">Example</Select>, div);
  });
});
