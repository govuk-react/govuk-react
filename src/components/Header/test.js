import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";

import Header from "./";

describe("Header", () => {
  const example = "example";
  const wrapper = <Header>{example}</Header>;

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(wrapper, div);
  });

  it("matches snapshot", () => {
    expect(mount(wrapper)).toMatchSnapshot(`enzyme.mount`);
  });
});
