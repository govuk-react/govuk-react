import React from "react";
import ReactDOM from "react-dom";
import GridCol from "./";

describe(GridCol, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<GridCol>Example</GridCol>, div);
  });
});
