import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import DateInput from "./";

describe("DateInput", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<DateInput>Example</DateInput>, div);
  });

  it('should render an input type="text"', () => {
    const output = shallow(<DateInput>Example</DateInput>);
    expect(output.find('input[type="text"]')).toBeTruthy();
  });

  it("should render a label", () => {
    const output = shallow(<DateInput>Example</DateInput>);
    expect(output.find("label")).toBeTruthy();
  });
});
