import type { Meta, StoryObj } from '@storybook/react';

import * as FileUpload from '.';

const meta = {
  title: 'Form/File upload',
  id: 'file-upload',
  component: FileUpload.Field,
  args: { id: 'file-upload', name: 'file-upload', label: 'Upload a file' },
} satisfies Meta<typeof FileUpload.Field>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InputWithHintText: Story = {
  args: { hint: 'This can be in either JPG or PNG format', accept: '.jpg, .png' },
};

export const InputWithHintTextError: Story = {
  args: { hint: 'This can be in either JPG or PNG format', errorMessage: 'The selected file must be a JPG or PNG' },
};
