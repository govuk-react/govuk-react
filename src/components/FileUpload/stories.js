import React from "react";
import { storiesOf } from "@storybook/react";
import FileUpload from ".";

const meta = {
  touched: true,
  error: "Example"
};

storiesOf("FileUpload", module).add("Component default", () => (
  <FileUpload name="group0">Upload a document</FileUpload>
));

storiesOf("FileUpload", module).add("Input with HintText", () => (
  <FileUpload
    name="group1"
    acceptedFormats=".jpg, .png"
    hint={["This can be in either JPG or PNG format"]}
  >
    Upload a photo
  </FileUpload>
));

storiesOf("FileUpload", module).add("Input with HintText & error", () => (
  <FileUpload
    name="group1"
    acceptedFormats=".jpg, .png"
    hint={["This can be in either JPG or PNG format"]}
    meta={meta}
  >
    Upload a photo
  </FileUpload>
));
