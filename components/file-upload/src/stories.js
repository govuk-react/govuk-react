import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocsCustom } from '@govuk-react/storybook-components';

import FileUpload from '.';
import ReadMe from '../README.md';

const meta = {
  touched: true,
  error: 'Example',
};

const stories = storiesOf('Form/FileUpload', module);
const examples = storiesOf('Form/FileUpload/Examples', module);

stories.addDecorator(withDocsCustom(ReadMe));

stories.add('Component default', () => <FileUpload name="group0">Upload a document</FileUpload>);

examples.add('Input with HintText', () => (
  <FileUpload name="group1" acceptedFormats=".jpg, .png" hint={['This can be in either JPG or PNG format']}>
    Upload a photo
  </FileUpload>
));

examples.add('Input with HintText & error', () => (
  <FileUpload name="group1" acceptedFormats=".jpg, .png" hint={['This can be in either JPG or PNG format']} meta={meta}>
    Upload a photo
  </FileUpload>
));
