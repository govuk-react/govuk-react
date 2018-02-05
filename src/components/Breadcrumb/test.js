import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";

import Breadcrumb from "./";

describe("breadcrumb", () => {
  const example = "example";
  const wrapper = <Breadcrumb>{example}</Breadcrumb>;

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(wrapper, div);
  });

  it("should render an unordered list", () => {
    const output = shallow(wrapper);
    expect(output.find("ul")).toBeTruthy();
    expect(output.find("ul > li")).toBeTruthy();
  });

  it("matches snapshot", () => {
    expect(mount(wrapper)).toMatchSnapshot(`enzyme.mount`);
  });
});
