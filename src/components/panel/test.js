import React from "react";
import { shallow, render, mount } from "enzyme";
import { matcher, serializer } from "jest-glamor-react";

import { Panel, PanelTitle, PanelBody } from "./";

// This is what adds the CSS to the output snapshot
expect.addSnapshotSerializer(serializer);

// this adds toMatchSnapshot to expect and makes the snapshot diff output look nice in the terminal
expect.extend(matcher);

describe("Panel", () => {
  it("renders without crashing", () => {
    const titleExample = "Example";
    const bodyExample = "body";

    const ui = (
      <Panel panelTitle={titleExample}>
        <PanelTitle>{titleExample}</PanelTitle>
        <PanelBody>{bodyExample}</PanelBody>
      </Panel>
    );

    expect(shallow(ui).text()).toContain(titleExample);
    expect(mount(ui).text()).toContain(titleExample);
    expect(render(ui).text()).toContain(titleExample);
    // const wrapper = shallow(
    //   <Panel panelTitle={titleExample} panelBody={bodyExample} />
    // );
    // expect(wrapper.text()).toContain(titleExample);
    // expect(wrapper.text()).not.toContain("Upset lobster");
    // expect(wrapper.text()).toContain(bodyExample);
  });
});
