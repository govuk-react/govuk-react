import React from 'react';
import { storiesOf } from '@storybook/react';
import FileUpload from '.';

const meta = {
  touched: true,
  error: 'Example',
};

const stories = storiesOf('Form/FileUpload', module);

stories.add('Component default', () => (
  <FileUpload name="group0">Upload a document</FileUpload>
));

stories.add('Input with HintText', () => (
  <FileUpload
    name="group1"
    acceptedFormats=".jpg, .png"
    hint={['This can be in either JPG or PNG format']}
  >
    Upload a photo
  </FileUpload>
));

stories.add('Input with HintText & error', () => (
  <FileUpload
    name="group1"
    acceptedFormats=".jpg, .png"
    hint={['This can be in either JPG or PNG format']}
    meta={meta}
  >
    Upload a photo
  </FileUpload>
));
