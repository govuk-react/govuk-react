import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";

import Panel from "./";

describe("Panel", () => {
  let props;
  const titleExample = "Example";
  const bodyExample = "body";
  const wrapper = <Panel panelTitle={titleExample} panelBody={bodyExample} />;

  beforeEach(() => {
    props = {
      titleExample,
      bodyExample
    };
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(wrapper, div);
  });

  it("passes `props.children` to the rendered `wrapper` as `children`", () => {
    expect(wrapper.props.panelTitle).toBe(props.titleExample);
    expect(wrapper.props.panelBody).toBe(props.bodyExample);
  });

  it("matches snapshot", () => {
    expect(mount(wrapper)).toMatchSnapshot(`enzyme.mount`);
  });
});
