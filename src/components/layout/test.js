import React from "react";
import ReactDOM from "react-dom";
import { Layout } from "./";

describe("Layout", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Layout>Example</Layout>, div);
  });
});
