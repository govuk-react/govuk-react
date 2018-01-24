import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount, render } from "enzyme";

import InputField from "./";

describe("InputField", () => {
  const example = "example";
  const wrapper = <InputField>{example}</InputField>;

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(wrapper, div);
  });

  it('should render an input type="text"', () => {
    const output = shallow(wrapper);
    expect(output.find('input[type="text"]')).toBeTruthy();
  });

  it("should render a label", () => {
    const output = shallow(wrapper);
    expect(output.find("label")).toBeTruthy();
  });

  it("matches snapshot", () => {
    expect(shallow(wrapper)).toMatchSnapshot(`enzyme.shallow`);
    expect(mount(wrapper)).toMatchSnapshot(`enzyme.mount`);
    expect(render(wrapper)).toMatchSnapshot(`enzyme.render`);
  });
});
