import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import Checkbox from "./";

describe("Checkbox", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Checkbox>Example</Checkbox>, div);
  });

  it('should render an input type="checkbox"', () => {
    const output = shallow(<Checkbox />);
    expect(output.find('input[type="checkbox"]')).toBeTruthy();
  });

  it("should render a label", () => {
    const output = shallow(<Checkbox />);
    expect(output.find("label")).toBeTruthy();
  });
});
