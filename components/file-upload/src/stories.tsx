import type { Story } from '@storybook/react';

import * as React from 'react';

import { FileUpload } from '.';

export default {
  title: 'Form/File upload',
  id: 'file-upload',
  component: FileUpload,
};

const Template: Story<React.ComponentProps<typeof FileUpload>> = (args) => <FileUpload {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'group0',
  children: 'Upload a document',
};

export const InputWithHintText = Template.bind({});
InputWithHintText.args = {
  name: 'group1',
  children: 'Upload a photo',
  acceptedFormats: '.jpg, .png',
  hint: 'This can be in either JPG or PNG format',
};

export const InputWithHintTextError = Template.bind({});
InputWithHintTextError.args = {
  name: 'group1',
  children: 'Upload a photo',
  acceptedFormats: '.jpg, .png',
  hint: 'This can be in either JPG or PNG format',
  meta: {
    touched: true,
    error: 'Example',
  },
};
