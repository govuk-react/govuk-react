// https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/textarea

import React from 'react';
import styled from 'styled-components';
import { BLACK, YELLOW, ERROR_COLOUR } from 'govuk-colours';
import { FONT_SIZE, LINE_HEIGHT, MEDIA_QUERIES, NTA_LIGHT } from '@govuk-react/constants';

import Label from '@govuk-react/label';
import LabelText from '@govuk-react/label-text';
import ErrorText from '@govuk-react/error-text';
import HintText from '@govuk-react/hint-text';

const TextAreaField = styled('textarea')(
  {
    boxSizing: 'border-box',
    fontFamily: NTA_LIGHT,
    fontWeight: 400,
    textTransform: 'none',
    fontSize: FONT_SIZE.SIZE_16,
    lineHeight: LINE_HEIGHT.SIZE_16,
    [MEDIA_QUERIES.LARGESCREEN]: {
      fontSize: FONT_SIZE.SIZE_19,
      lineHeight: LINE_HEIGHT.SIZE_19,
      width: '75%',
    },
    width: '100%',
    padding: '5px 4px 4px',
    border: `2px solid ${BLACK}`,
    ':focus': {
      outline: `3px solid ${YELLOW}`,
      outlineOffset: 0,
    },
  },
  ({ error }) => ({
    border: error ? `4px solid ${ERROR_COLOUR}` : undefined,
  })
);

/**
 *
 * ### Usage
 *
 * Simple
 *
 * ```jsx
 * import { TextArea } from 'govuk-react'
 *
 * <TextArea input={{ name: 'group1' }}>Description of what you saw</TextArea>
 * ```
 *
 * TextArea with hint text
 *
 * ```jsx
 * <TextArea input={{ name: 'group1' }} hint={['Enter as many words as you like']}>
 *   Description of what you saw
 * </TextArea>
 * ```
 *
 * TextArea with hint text & error
 *
 * ```jsx
 * const meta = {
 *   touched: true,
 *   error: 'Example',
 * };
 *
 * <TextArea
 *    input={{ name: 'group1' }}
 *    hint={['Enter as many words as you like']}
 *    meta={meta}
 *  >
 *    Description of what you saw
 *  </TextArea>
 * ```
 *
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/textarea
 *
 */
const TextArea = ({ children, hint, meta, input, ...props }: TextAreaProps) => (
  <Label error={meta.touched && !!meta.error} {...props}>
    <LabelText>{children}</LabelText>
    {hint && <HintText>{hint}</HintText>}
    {meta.touched && meta.error && <ErrorText>{meta.error}</ErrorText>}
    <TextAreaField type="text" rows="5" error={meta.touched && !!meta.error} {...input} />
  </Label>
);

TextArea.defaultProps = {
  hint: undefined,
  input: {},
  meta: {},
};

interface TextAreaProps {
  hint?: React.ReactNode;
  input?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
  meta?: {
    active?: boolean;
    dirty?: boolean;
    dirtySinceLastSubmit?: boolean;
    // eslint-disable-next-line react/forbid-prop-types
    error?: any;
    // eslint-disable-next-line react/forbid-prop-types
    initial?: any;
    invalid?: boolean;
    pristine?: boolean;
    // eslint-disable-next-line react/forbid-prop-types
    submitError?: any;
    submitFailed?: boolean;
    submitSucceeded?: boolean;
    touched?: boolean;
    valid?: boolean;
    visited?: boolean;
  };
  children: React.ReactNode;
}

/** Component is not exported withWhitespace because Label
 *  is also exported withWhitespace and therefore takes precedence.
 */
export default TextArea;
export { TextAreaField };
