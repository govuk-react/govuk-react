import React from "react";
import ReactDOM from "react-dom";
import ListItem from "./";

describe(ListItem, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ListItem>Example</ListItem>, div);
  });
});
