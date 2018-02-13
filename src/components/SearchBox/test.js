import React from "react";
import ReactDOM from "react-dom";
import SearchBox from "./";

describe(SearchBox, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SearchBox>Example</SearchBox>, div);
  });
});
