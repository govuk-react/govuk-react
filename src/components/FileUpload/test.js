import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import FileUpload from "./";

describe("FileUpload", () => {
  const example = "example";
  const wrapper = <FileUpload>{example}</FileUpload>;

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(wrapper, div);
  });

  it("matches snapshot", () => {
    expect(mount(wrapper)).toMatchSnapshot(`enzyme.mount`);
  });
});
