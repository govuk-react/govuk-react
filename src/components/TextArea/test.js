import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import Textarea from "./";

describe("Textarea", () => {
  const example = "example";
  const wrapper = <Textarea>{example}</Textarea>;

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(wrapper, div);
  });

  it("matches snapshot", () => {
    expect(mount(wrapper)).toMatchSnapshot(`enzyme.mount`);
  });
});
