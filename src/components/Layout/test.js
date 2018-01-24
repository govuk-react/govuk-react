import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount, render } from "enzyme";
import { Layout } from "./";

describe("Layout", () => {
  const example = "example";
  const wrapper = <Layout>{example}</Layout>;

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Layout>Example</Layout>, div);
  });

  it("matches snapshot", () => {
    expect(shallow(wrapper)).toMatchSnapshot(`enzyme.shallow`);
    expect(mount(wrapper)).toMatchSnapshot(`enzyme.mount`);
    expect(render(wrapper)).toMatchSnapshot(`enzyme.render`);
  });
});
