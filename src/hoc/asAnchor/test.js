import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import asAnchor from "./";

const AnchorTag = asAnchor("a");

const wrapper = <AnchorTag href="https://example.com">Example</AnchorTag>;

describe(asAnchor, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(wrapper, div);
  });

  it("returns a component", () => {
    expect(shallow(wrapper).html().toBeTruthy);
  });

  it("matches wrapper snapshot", () => {
    expect(shallow(wrapper)).toMatchSnapshot(`wrapper mount`);
  });
});
