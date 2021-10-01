import * as React from 'react';

import { FileUpload } from '.';

export default {
  title: 'Form/File upload',
  component: FileUpload,
};

export const Default: React.FC = () => <FileUpload name="group0">Upload a document</FileUpload>;
export const InputWithHintText: React.FC = () => (
  <FileUpload name="group1" acceptedFormats=".jpg, .png" hint="This can be in either JPG or PNG format">
    Upload a photo
  </FileUpload>
);
const meta = {
  touched: true,
  error: 'Example',
};
export const InputWithHintTextError: React.FC = () => (
  <FileUpload name="group1" acceptedFormats=".jpg, .png" hint="This can be in either JPG or PNG format" meta={meta}>
    Upload a photo
  </FileUpload>
);
