import React from "react";
import ReactDOM from "react-dom";
import { Textarea } from "./";

describe("Textarea", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Textarea>Example</Textarea>, div);
  });
});
