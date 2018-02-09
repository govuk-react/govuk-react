import React from "react";
import ReactDOM from "react-dom";
import MultiChoice from "./";

describe(MultiChoice, () => {
  const example = "example";
  const meta = {
    touched: true,
    error: example
  };

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MultiChoice meta={meta} hint={example} label={example}>
        {example}
      </MultiChoice>,
      div
    );
  });
});
