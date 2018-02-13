import React from "react";
import ReactDOM from "react-dom";
import ListNavigation from "./";

describe(ListNavigation, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ListNavigation>Example</ListNavigation>, div);
  });
});
