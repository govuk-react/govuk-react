import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";

import Panel from "./";

describe("Panel", () => {
  let props;
  const titleExample = "Example";
  const bodyExample = "body";
  const bodyExampleArray = ["body", "body2"];
  const wrapper = <Panel panelTitle={titleExample} panelBody={bodyExample} />;
  const wrapperArray = (
    <Panel panelTitle={titleExample} panelBody={bodyExampleArray} />
  );

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

  it("matches wrapper snapshot", () => {
    expect(mount(wrapper)).toMatchSnapshot("wrapper mount");
  });

  it('should render a panel body that is an array"', () => {
    const output = mount(wrapperArray);
    bodyExampleArray.forEach(textString => {
      expect(output.text().includes(textString)).toBe(true);
    });
  });

  it("should render a panel body that is a string", () => {
    const output = mount(wrapper);
    expect(output.text().includes(bodyExample)).toBe(true);
  });
});
