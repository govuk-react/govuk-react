import React from 'react';
import PropTypes from 'prop-types';
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
 *
 * ### Usage
 *
 * Simple
 *
 * ```jsx
 * import { FileUpload } from 'govuk-react'
 *
 * <FileUpload name="group0">Upload a document</FileUpload>
 * ```
 *
 * Input with hint text
 *
 * ```jsx
 * <FileUpload
 *   name="group1"
 *   acceptedFormats=".jpg, .png"
 *   hint={['This can be in either JPG or PNG format']}
 * >
 *   Upload a photo
 * </FileUpload>
 * ```
 *
 * Input with hint text & error
 *
 * ```jsx
 * const meta = {
 *   touched: true,
 *   error: 'Example',
 * };
 *
 * <FileUpload
 *   name="group1"
 *   acceptedFormats=".jpg, .png"
 *   hint={['This can be in either JPG or PNG format']}
 *   meta={meta}
 * >
 *   Upload a photo
 * </FileUpload>
 * ```
 *
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/file-upload
 *
 */
const FileUpload = React.forwardRef(({ meta, children, hint, acceptedFormats, onChange, name, ...props }, ref) => (
  <Label {...props} error={meta.touched && !!meta.error}>
    <LabelText error={meta.touched && !!meta.error}>{children}</LabelText>
    {hint && <HintText>{hint}</HintText>}
    {meta.touched && meta.error && <ErrorText>{meta.error}</ErrorText>}
    <StyledInput
      type="file"
      accept={acceptedFormats}
      error={meta.touched && !!meta.error}
      onChange={onChange}
      name={name}
      ref={ref}
    />
  </Label>
));

FileUpload.defaultProps = {
  hint: undefined,
  meta: {},
  acceptedFormats: undefined,
  onChange: undefined,
  name: undefined,
};

FileUpload.propTypes = {
  /**
   * Optional hint text
   */
  hint: PropTypes.string,
  /**
   * Final form meta object, pending adjustment/removal
   */
  meta: PropTypes.shape({
    active: PropTypes.bool,
    dirty: PropTypes.bool,
    dirtySinceLastSubmit: PropTypes.bool,
    // eslint-disable-next-line react/forbid-prop-types
    error: PropTypes.any,
    // eslint-disable-next-line react/forbid-prop-types
    initial: PropTypes.any,
    invalid: PropTypes.bool,
    pristine: PropTypes.bool,
    // eslint-disable-next-line react/forbid-prop-types
    submitError: PropTypes.any,
    submitFailed: PropTypes.bool,
    submitSucceeded: PropTypes.bool,
    touched: PropTypes.bool,
    valid: PropTypes.bool,
    visited: PropTypes.bool,
  }),
  children: PropTypes.node.isRequired,
  acceptedFormats: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
};

export default FileUpload;
