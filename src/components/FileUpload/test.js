import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount, render } from "enzyme";
import FileUpload from "./";

describe("FileUpload", () => {
  const example = "example";
  const wrapper = <FileUpload>{example}</FileUpload>;

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(wrapper, div);
  });

  it("matches snapshot", () => {
    expect(shallow(wrapper)).toMatchSnapshot(`enzyme.shallow`);
    expect(mount(wrapper)).toMatchSnapshot(`enzyme.mount`);
    expect(render(wrapper)).toMatchSnapshot(`enzyme.render`);
  });
});
