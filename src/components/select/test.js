import React from "react";
import ReactDOM from "react-dom";
import Select from "./";

describe("Select", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Select>Example</Select>, div);
  });
});
