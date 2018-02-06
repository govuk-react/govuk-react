import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";

import Header from "./";

describe("Header", () => {
  let props;
  const example = "example";
  const wrapper = <Header>{example}</Header>;

  beforeEach(() => {
    props = {
      children: example
    };
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(wrapper, div);
  });

  it("matches snapshot", () => {
    expect(mount(wrapper)).toMatchSnapshot(`enzyme.mount`);
  });

  it("passes `props.children` to the rendered `wrapper` as `children`", () => {
    expect(wrapper.props.children).toBe(props.children);
  });
});
