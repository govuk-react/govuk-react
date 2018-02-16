import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import AnchorWrapper from "./";

const example = "example";
const wrapper = <AnchorWrapper hyperLink={`https://${example}.com`}>{example}</AnchorWrapper>;

describe(AnchorWrapper, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(wrapper, div);
  });

  it("matches wrapper snapshot", () => {
    expect(mount(wrapper)).toMatchSnapshot(`wrapper mount`);
  });
});
