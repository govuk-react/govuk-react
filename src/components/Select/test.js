import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import Select from "./";

describe("Select", () => {
  let props;
  const example = "example";
  const meta = {
    touched: true,
    error: example
  };
  const wrapper = (
    <Select meta={meta} label={example}>
      {example}
    </Select>
  );

  beforeEach(() => {
    props = {
      label: example,
      children: example
    };
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(wrapper, div);
  });

  it("passes `props.children` to the rendered `wrapper` as `children`", () => {
    expect(wrapper.props.label).toBe(props.label);
    expect(wrapper.props.children).toBe(props.children);
  });

  // TODO if hint prop is passed then it renders a hintText

  // TODO if meta.error prop is passes then it renders an errorText

  it("matches snapshot", () => {
    expect(mount(wrapper)).toMatchSnapshot(`enzyme.mount`);
  });
});
