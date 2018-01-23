import React from "react";
import ReactDOM from "react-dom";
// import { shallow } from "enzyme";

import BackLink from "./";

describe("Back Link", () => {
  // TODO use sinon to confirm that the click handler is called when the button is clicked
  const testFn = () => false;
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<BackLink goBack={testFn}>Example</BackLink>, div);
  });
});
