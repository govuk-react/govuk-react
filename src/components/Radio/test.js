import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";

import Radio from "./";

describe("Radio", () => {
  let props;
  const example = "example";
  const wrapper = (
    <Radio inline name={example}>
      {example}
    </Radio>
  );

  beforeEach(() => {
    props = {
      name: example,
      children: example
    };
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(wrapper, div);
  });

  it("passes `props.children` to the rendered `wrapper` as `children`", () => {
    expect(wrapper.props.name).toBe(props.name);
    expect(wrapper.props.children).toBe(props.children);
  });

  it("matches snapshot", () => {
    expect(mount(wrapper)).toMatchSnapshot(`enzyme.mount`);
  });
});
