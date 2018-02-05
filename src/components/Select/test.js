import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import Select from "./";

describe("Select", () => {
  const example = "example";
  const wrapper = <Select label={example}>{example}</Select>;

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(wrapper, div);
  });

  it("matches snapshot", () => {
    expect(mount(wrapper)).toMatchSnapshot(`enzyme.mount`);
  });
});
