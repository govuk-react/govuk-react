import React from 'react';
import { storiesOf } from '@storybook/react'
import { FileUpload, HintText } from '.'

storiesOf('FileUpload', module).add('Component default', () => (
  <FileUpload name='group0'>
    Upload a document
  </FileUpload>
))

storiesOf('FileUpload', module).add('Input with HintText', () => (
  <FileUpload name='group1' acceptedFormats='.jpg, .png' hintText={['This can be in either JPG or PNG format']}>
    Upload a photo
  </FileUpload>
))

storiesOf('FileUpload', module).add('Input with HintText & error', () => (
  <FileUpload name='group1' acceptedFormats='.jpg, .png' hintText={['This can be in either JPG or PNG format']} errorText='File upload was interrupted. Please try again'>
    Upload a photo
  </FileUpload>
))
