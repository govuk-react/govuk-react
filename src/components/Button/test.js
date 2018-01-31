import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount, render } from "enzyme";
import { generateImage } from "component-image";

import Button from "./";

describe("button", () => {
  const example = "example";
  const wrapper = <Button>{example}</Button>;

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(wrapper, div);
  });

  it("should render a button", () => {
    const output = shallow(wrapper);
    expect(output.find("button")).toBeTruthy();
  });

  it("should render a disabled button", () => {
    const output = shallow(<Button disabled="disabled">{example}</Button>);
    expect(output.find('button[disabled="disabled"]')).toBeTruthy();
  });

  it("matches snapshot", () => {
    expect(shallow(wrapper)).toMatchSnapshot(`enzyme.shallow`);
    expect(mount(wrapper)).toMatchSnapshot(`enzyme.mount`);
    expect(render(wrapper)).toMatchSnapshot(`enzyme.render`);
  });

  it("has no visual regressions", () =>
    generateImage(wrapper, {
      viewport: {
        width: 300,
        height: 200
      }
    }).then(image => {
      expect(image).toMatchImageSnapshot();
    }));
});
