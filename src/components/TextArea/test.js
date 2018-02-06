import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import Textarea from "./";

describe("Textarea", () => {
  let props;
  const example = "example";
  const wrapper = <Textarea>{example}</Textarea>;

  beforeEach(() => {
    props = {
      children: example
    };
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(wrapper, div);
  });

  it("passes `props.children` to the rendered `wrapper` as `children`", () => {
    expect(wrapper.props.children).toBe(props.children);
  });

  it("matches snapshot", () => {
    expect(mount(wrapper)).toMatchSnapshot(`enzyme.mount`);
  });
});
