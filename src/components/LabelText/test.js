import React from "react";
import ReactDOM from "react-dom";
import LabelText from "./";

describe("LabelText", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<LabelText>Example</LabelText>, div);
  });
});
