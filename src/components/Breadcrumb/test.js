import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";

import Breadcrumb from "./";

describe("breadcrumb", () => {
  const example = "example";
  const wrapper = <Breadcrumb>{example}</Breadcrumb>;
  const wrapperMultiple = (
    <Breadcrumb>
      {example}
      {example}
    </Breadcrumb>
  );

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(wrapper, div);
  });

  it("should render an unordered list", () => {
    const output = mount(wrapper);
    expect(output.find("ul")).toHaveLength(1);
    expect(mount(wrapperMultiple).find("ul li")).toHaveLength(2);
  });

  it("matches snapshot", () => {
    expect(mount(wrapper)).toMatchSnapshot(`enzyme.mount`);
  });
});
