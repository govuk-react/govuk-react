import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import Input from "./";

describe("Input", () => {
  const wrapper = <Input type="text" />;

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Input type="text" />, div);
  });

  it("matches wrapper snapshot", () => {
    expect(mount(wrapper)).toMatchSnapshot(`wrapper mount`);
  });
});
