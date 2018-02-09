import React from "react";
import ReactDOM from "react-dom";
import GridCol from "./";

describe(GridCol, () => {
  let props;
  const example = "example";
  const wrapper = <GridCol>{example}</GridCol>;

  beforeEach(() => {
    props = {
      children: example
    };
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<GridCol hideContent>{example}</GridCol>, div);
    ReactDOM.render(<GridCol columnOneThird>{example}</GridCol>, div);
    ReactDOM.render(<GridCol columnTwoThirds>{example}</GridCol>, div);
    ReactDOM.render(<GridCol columnOneQuarter>{example}</GridCol>, div);
  });

  it("passes `props.children` to the rendered `wrapper` as `children`", () => {
    expect(wrapper.props.children).toBe(props.children);
  });
});
