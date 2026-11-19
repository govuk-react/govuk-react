import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { useEffect, useRef } from 'react';

import { EnhancedFileUpload, FileUpload, FileUploadField } from '.';

const meta = {
  title: 'Form/File upload',
  id: 'file-upload',
  component: FileUploadField,
  args: { id: 'file-upload', name: 'file-upload', label: 'Upload a file' },
  parameters: {
    docs: {
      description: {
        component:
          'Help users select and upload a file. `EnhancedField` is the improved file upload component: once JavaScript runs, users can choose a file with the button or drop one on it. Without JavaScript it is the native file input.',
      },
    },
  },
} satisfies Meta<typeof FileUploadField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InputWithHintText: Story = {
  args: { hint: 'This can be in either JPG or PNG format', accept: '.jpg, .png' },
};

export const InputWithHintTextError: Story = {
  args: { hint: 'This can be in either JPG or PNG format', errorMessage: 'The CSV must be smaller than 2MB' },
};

export const WithErrorMessage: Story = {
  args: { id: 'file-upload-1', name: 'fileUpload1', errorMessage: 'The CSV must be smaller than 2MB' },
};

export const Enhanced: Story = {
  args: { id: 'file-upload-1', name: 'fileUpload1' },
  render: (args) => <EnhancedFileUpload.Field {...args} />,
};

export const EnhancedWithHintAndError: Story = {
  args: {
    id: 'file-upload-2',
    name: 'fileUpload2',
    hint: 'Your photo may be in your Pictures, Photos, Downloads or Desktop folder. Or in an app like iPhoto.',
    errorMessage: 'Error message goes here',
  },
  render: (args) => <EnhancedFileUpload.Field {...args} />,
};

export const EnhancedMultipleFiles: Story = {
  args: { id: 'file-upload-3', name: 'fileUpload3', multiple: true },
  render: (args) => <EnhancedFileUpload.Field {...args} />,
};

export const EnhancedDisabled: Story = {
  args: { id: 'file-upload-4', name: 'fileUpload4', disabled: true },
  render: (args) => <EnhancedFileUpload.Field {...args} />,
};

const transferOf = (names: string[]) => {
  const transfer = new DataTransfer();
  names.forEach((name) => transfer.items.add(new File([''], name)));
  return transfer;
};

/** Chooses the files, or drags them over the field, once the element upgrades. */
function WithFiles({
  names,
  dragging = false,
  ...props
}: EnhancedFileUpload.FieldProps & { names: string[]; dragging?: boolean }) {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const button = container.current?.querySelector('button');
      const input = container.current?.querySelector('input');
      if (!button || !input) return;
      if (dragging) {
        button.dispatchEvent(new DragEvent('dragenter', { bubbles: true, dataTransfer: transferOf(names) }));
      } else {
        input.files = transferOf(names).files;
        input.dispatchEvent(new Event('change', { bubbles: true }));
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [names, dragging]);
  return (
    <div ref={container}>
      <EnhancedFileUpload.Field {...props} />
    </div>
  );
}

/** A file chosen, for visual regression. */
export const EnhancedFileChosen: Story = {
  args: { id: 'file-upload-5', name: 'fileUpload5' },
  render: (args) => <WithFiles {...args} names={['passport.jpg']} />,
};

/** Two files chosen, for visual regression. */
export const EnhancedFilesChosen: Story = {
  args: { id: 'file-upload-6', name: 'fileUpload6', multiple: true },
  render: (args) => <WithFiles {...args} names={['passport.jpg', 'driving-licence.png']} />,
};

/** A file dragged over the drop zone, for visual regression. */
export const EnhancedDragging: Story = {
  args: { id: 'file-upload-7', name: 'fileUpload7' },
  render: (args) => <WithFiles {...args} names={['passport.jpg']} dragging />,
};

export const WithParts: Story = {
  render: () => (
    <div className="govuk-form-group">
      <label className="govuk-label" id="file-upload-8-label" htmlFor="file-upload-8">
        Upload a file
      </label>
      <EnhancedFileUpload.Root>
        <EnhancedFileUpload.Wrapper>
          <EnhancedFileUpload.Button>
            <EnhancedFileUpload.Status />
            <EnhancedFileUpload.Comma />
            <EnhancedFileUpload.PseudoButtonContainer>
              <EnhancedFileUpload.PseudoButton>Choose photo</EnhancedFileUpload.PseudoButton>{' '}
              <EnhancedFileUpload.Instruction>or drop photo</EnhancedFileUpload.Instruction>
            </EnhancedFileUpload.PseudoButtonContainer>
          </EnhancedFileUpload.Button>
          <FileUpload id="file-upload-8" name="fileUpload8" accept="image/*" />
        </EnhancedFileUpload.Wrapper>
        <EnhancedFileUpload.Announcements />
      </EnhancedFileUpload.Root>
    </div>
  ),
};
