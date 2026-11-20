import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import * as FileUpload from '.';

const meta = {
  title: 'Primitives/File upload',
  id: 'primitives-file-upload',
  component: FileUpload.Root,
} satisfies Meta<typeof FileUpload.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <>
      <label id="file-upload-label" htmlFor="file-upload">
        Upload a file
      </label>
      <FileUpload.Root>
        <FileUpload.DropZone>
          <FileUpload.Trigger>
            <FileUpload.Status />
            <FileUpload.Separator className="visually-hidden" />
            Choose file or drop file
          </FileUpload.Trigger>
          <FileUpload.Input id="file-upload" name="file-upload" />
        </FileUpload.DropZone>
        <FileUpload.Announcements className="visually-hidden" />
      </FileUpload.Root>
    </>
  ),
};
