import React from "react";
import { mount } from "enzyme";

import SupportingHeader from ".";

describe("SupportingHeader", () => {
  let wrapper;

  it("renders without crashing", () => {
    wrapper = mount(<SupportingHeader>Heading text</SupportingHeader>);
  });

  it("matches wrapper snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
