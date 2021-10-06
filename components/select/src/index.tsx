/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/select
 */
import type { LabelProps } from '@govuk-react/label';

import * as React from 'react';
import styled from 'styled-components';
import { BLACK, ERROR_COLOUR, YELLOW } from 'govuk-colours';
import { MEDIA_QUERIES } from '@govuk-react/constants';
import { typography } from '@govuk-react/lib';

import Label from '@govuk-react/label';
import LabelText from '@govuk-react/label-text';
import ErrorText from '@govuk-react/error-text';
import HintText from '@govuk-react/hint-text';

const StyledSelect = styled('select')<{ error?: boolean }>(
  typography.font({ size: 19 }),
  {
    boxSizing: 'border-box',
    width: '100%',
    height: '33px',
    padding: '5px 4px 4px',
    border: `2px solid ${BLACK}`,
    [MEDIA_QUERIES.LARGESCREEN]: {
      width: '50%',
      height: '38px',
    },
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
 * The select component should only be used as a last resort in public-facing services because research shows that some users find selects very difficult to use.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/select
 * - https://design-system.service.gov.uk/components/select/
 */
export const Select: React.FC<SelectProps> = ({ children, hint, label, meta, input, ...props }: SelectProps) => (
  <Label {...props} error={meta.touched && !!meta.error}>
    <LabelText>{label}</LabelText>
    {hint && <HintText>{hint}</HintText>}
    {meta.touched && meta.error && <ErrorText>{meta.error}</ErrorText>}
    <StyledSelect error={meta.touched && !!meta.error} {...input}>
      {children}
    </StyledSelect>
  </Label>
);

Select.defaultProps = {
  hint: undefined,
  errorText: undefined,
  input: {},
  meta: {},
};

Select.displayName = 'Select';
StyledSelect.displayName = 'SelectInput';

export interface SelectProps extends LabelProps {
  hint?: React.ReactNode;
  input?: React.SelectHTMLAttributes<HTMLSelectElement>;
  meta?: {
    error?: string | string[];
    touched?: boolean;
  };
  children: React.ReactNode;
  label: string;
  errorText?: string;
}

export default Select;
export { StyledSelect as SelectInput };
