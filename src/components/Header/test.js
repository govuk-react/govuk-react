import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";

import Header, { H1 } from ".";

describe("Header", () => {
  let props;
  const example = "example";
  const level = 1;
  const size = "XSMALL";
  const wrapper = <Header>{example}</Header>;
  const shortcut = <H1>{example}</H1>;

  beforeEach(() => {
    props = {
      children: example,
      level,
      size
    };
  });

  it("renders a Header without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(wrapper, div);
  });

  it("renders a H1 shortcut without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(shortcut, div);
  });

  it("matches snapshot", () => {
    expect(mount(wrapper)).toMatchSnapshot(`enzyme.mount`);
  });

  it("passes `props.children` to the rendered `wrapper` as `children`", () => {
    expect(wrapper.props.children).toBe(props.children);
  });

  it("passes `props.level` to the rendered `wrapper` as `level`", () => {
    const ex = shallow(<Header level={6}>{example}</Header>).dive();
    expect(ex.find("h6")).toHaveLength(1);
  });
});
