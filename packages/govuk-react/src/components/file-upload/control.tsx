import * as React from 'react';
import * as Primitives from '@govuk-react/primitives/file-upload';
import * as Markup from 'govuk-frontend-react/file-upload';

export type FileUploadProps = Markup.FileUploadProps;

/** The file input. */
export function FileUpload(props: FileUploadProps) {
  return (
    <Primitives.Input asChild>
      <Markup.FileUpload {...props} />
    </Primitives.Input>
  );
}

export type FileUploadTexts = Pick<
  Markup.FileUploadWrapperProps,
  | 'chooseFilesButtonText'
  | 'noFileChosenText'
  | 'multipleFilesChosenText'
  | 'dropInstructionText'
  | 'enteredDropZoneText'
  | 'leftDropZoneText'
>;
