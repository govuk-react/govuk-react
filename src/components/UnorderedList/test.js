import React from "react";
import ReactDOM from "react-dom";
import UnorderedList from "./";

describe(UnorderedList, () => {
  it("renders with and without props, without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<UnorderedList>Example</UnorderedList>, div);
    ReactDOM.render(
      <UnorderedList listStyleType="none">Example</UnorderedList>,
      div
    );
  });
});
