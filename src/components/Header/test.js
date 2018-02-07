import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";

import Header, { H1, H2, H3, H4, H5, H6 } from ".";

describe("Header", () => {
  const example = "example";
  const wrapper = <Header>{example}</Header>;

  it("renders a Header and all the H-level tags without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(wrapper, div);
    ReactDOM.render(<H1 />, div);
    ReactDOM.render(<H2 />, div);
    ReactDOM.render(<H3 />, div);
    ReactDOM.render(<H4 />, div);
    ReactDOM.render(<H5 />, div);
    ReactDOM.render(<H6 />, div);
  });

  it("matches snapshot", () => {
    expect(mount(wrapper)).toMatchSnapshot(`enzyme.mount`);
  });
});
