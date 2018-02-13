import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import PhaseTag from "./";

const example = "example";
const wrapper = <PhaseTag level="beta">{example}</PhaseTag>;

describe(PhaseTag, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(wrapper, div);
  });

  it("matches wrapper snapshot", () => {
    expect(mount(wrapper)).toMatchSnapshot(`wrapper mount`);
  });
});
