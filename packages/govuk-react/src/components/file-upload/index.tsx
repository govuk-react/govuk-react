import * as React from 'react';
import * as Markup from 'govuk-frontend-react/file-upload';
import type { FileUploadTexts } from './control';

/*
 * govuk-frontend-react's FileUpload markup. `FileUploadField` is the native file input. `EnhancedFileUpload.Field` is
 * govuk-frontend's improved file upload, with behaviour from @govuk-react/primitives: without
 * JavaScript it's the native file input too, and once JavaScript runs it's a button and drop zone.
 */

export { FileUpload, type FileUploadProps } from './control';

export type FileUploadFieldProps = Omit<Markup.FileUploadFieldProps, 'javascript' | keyof FileUploadTexts>;

/**
 * Help users select and upload a file.
 *
 * @see https://design-system.service.gov.uk/components/file-upload/
 */
export function FileUploadField(props: FileUploadFieldProps) {
  return <Markup.FileUploadField {...props} />;
}

export * as EnhancedFileUpload from './enhanced';
