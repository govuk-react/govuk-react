import React from "react";
import ReactDOM from "react-dom";
import ErrorText from "./";

describe("ErrorText", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ErrorText>Example</ErrorText>, div);
  });
});
