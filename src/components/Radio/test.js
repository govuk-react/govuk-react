import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";

import Radio from "./";

describe("Radio", () => {
  const example = "example";
  const wrapper = <Radio name={example}>{example}</Radio>;

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(wrapper, div);
  });

  it("matches snapshot", () => {
    expect(mount(wrapper)).toMatchSnapshot(`enzyme.mount`);
  });
});
