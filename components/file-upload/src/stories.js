import React from 'react';

import FileUpload from '.';

export default {
  title: 'Core/File upload',
  component: FileUpload,
};

export const Default = () => <FileUpload name="group0">Upload a document</FileUpload>;
export const InputWithHintText = () => (
  <FileUpload name="group1" acceptedFormats=".jpg, .png" hint="This can be in either JPG or PNG format">
    Upload a photo
  </FileUpload>
);
const meta = {
  touched: true,
  error: 'Example',
};
export const InputWithHintTextError = () => (
  <FileUpload name="group1" acceptedFormats=".jpg, .png" hint="This can be in either JPG or PNG format" meta={meta}>
    Upload a photo
  </FileUpload>
);
