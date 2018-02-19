import React from "react";
import ReactDOM from "react-dom";
import AsAnchor from "./";

describe(AsAnchor, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AsAnchor>Example</AsAnchor>, div);
  });
});
