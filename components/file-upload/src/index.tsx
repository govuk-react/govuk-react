/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/file-upload
 */
import type { LabelProps } from '@govuk-react/label';

import * as React from 'react';
import styled from 'styled-components';
import Label from '@govuk-react/label';
import LabelText from '@govuk-react/label-text';
import ErrorText from '@govuk-react/error-text';
import HintText from '@govuk-react/hint-text';
import { FONT_SIZE, LINE_HEIGHT, NTA_LIGHT, MEDIA_QUERIES } from '@govuk-react/constants';

const StyledInput = styled('input')({
  boxSizing: 'border-box',
  fontFamily: NTA_LIGHT,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  fontWeight: 400,
  textTransform: 'none',
  fontSize: FONT_SIZE.SIZE_14,
  lineHeight: LINE_HEIGHT.SIZE_14,
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: FONT_SIZE.SIZE_16,
    lineHeight: LINE_HEIGHT.SIZE_16,
    width: '50%',
  },
  width: '100%',
  padding: '5px 4px 4px',
});

/**
 * Help users select and upload a file.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/file-upload
 * - https://design-system.service.gov.uk/components/file-upload/
 */
export const FileUpload = React.forwardRef<HTMLInputElement, FileUploadProps>(
  ({ meta, children, hint, acceptedFormats, onChange, name, ...props }: FileUploadProps, ref) => (
    <Label {...props} error={meta.touched && !!meta.error}>
      <LabelText>{children}</LabelText>
      {hint && <HintText>{hint}</HintText>}
      {meta.touched && meta.error && <ErrorText>{meta.error}</ErrorText>}
      <StyledInput type="file" accept={acceptedFormats} onChange={onChange} name={name} ref={ref} />
    </Label>
  )
);

FileUpload.defaultProps = {
  hint: undefined,
  meta: {},
  acceptedFormats: undefined,
  onChange: undefined,
  name: undefined,
};

FileUpload.displayName = 'FileUpload';

export interface FileUploadProps extends LabelProps {
  /**
   * Optional hint text
   */
  hint?: string;
  /**
   * Final form meta object, pending adjustment/removal
   */
  meta?: {
    error?: string | string[];
    touched?: boolean;
  };
  children: React.ReactNode;
  acceptedFormats?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  name?: string;
}

export default FileUpload;
