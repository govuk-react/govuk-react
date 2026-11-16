/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/textarea
 */
import type { LabelProps } from '../label';

import * as React from 'react';
import styled from 'styled-components';
import { BLACK, YELLOW, ERROR_COLOUR } from 'govuk-colours';
import { FONT_SIZE, LINE_HEIGHT, MEDIA_QUERIES, NTA_LIGHT } from '../../constants';

import Label from '../label';
import LabelText from '../label-text';
import ErrorText from '../error-text';
import HintText from '../hint-text';

const TextAreaField = styled('textarea')<{ error?: boolean }>(
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
 * Use the textarea component when you need to let users enter an amount of text that’s longer than a single line.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/text-area
 * - https://design-system.service.gov.uk/components/textarea/
 */
export const TextArea: React.FC<TextAreaProps> = ({
  children,
  hint,
  meta = {},
  input = {},
  ...props
}: TextAreaProps) => (
  <Label error={meta.touched && !!meta.error} {...props}>
    <LabelText>{children}</LabelText>
    {hint && <HintText>{hint}</HintText>}
    {meta.touched && meta.error && <ErrorText>{meta.error}</ErrorText>}
    <TextAreaField rows={5} error={meta.touched && !!meta.error} {...input} />
  </Label>
);

TextArea.displayName = 'TextArea';

export interface TextAreaProps extends LabelProps {
  hint?: React.ReactNode;
  input?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
  meta?: {
    error?: string | string[];
    touched?: boolean;
  };
  children: React.ReactNode;
}

/** Component is not exported withWhitespace because Label
 *  is also exported withWhitespace and therefore takes precedence.
 */
export default TextArea;
export { TextAreaField };
