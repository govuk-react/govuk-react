import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import Breadcrumb from "./";

describe("breadcrumb", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Breadcrumb>Example</Breadcrumb>, div);
  });

  it("should render an unordered list", () => {
    const output = shallow(<Breadcrumb>Example</Breadcrumb>);
    expect(output.find("ul")).toBeTruthy();
    expect(output.find("ul > li")).toBeTruthy();
  });
});
