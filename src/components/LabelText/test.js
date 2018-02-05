import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";

import LabelText from "./";

describe("LabelText", () => {
  const example = "example";
  const wrapper = <LabelText>{example}</LabelText>;

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(wrapper, div);
  });

  it("matches snapshot", () => {
    expect(mount(wrapper)).toMatchSnapshot(`enzyme.mount`);
  });
});
