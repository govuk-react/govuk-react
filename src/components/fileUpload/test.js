import React from "react";
import ReactDOM from "react-dom";
import { FileUpload } from "./";

describe("FileUpload", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<FileUpload>Example</FileUpload>, div);
  });
});
