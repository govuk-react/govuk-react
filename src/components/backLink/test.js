import React from "react";
import ReactDOM from "react-dom";
// import { shallow } from "enzyme";

import BackLink from "./";

describe("Back Link", () => {
  const testFn = () => false;
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<BackLink goBack={testFn}>Example</BackLink>, div);
  });
});
