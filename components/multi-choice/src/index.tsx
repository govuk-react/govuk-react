// https://govuk-elements.herokuapp.com/errors/
// https://govuk-elements.herokuapp.com/errors/example-form-validation-single-question-radio

// This is to be used when more than one value of a radio/checkbox group requires validation.
// e.g. What is your gender?
// () Male
// () Female
// () Other

// Only one is valid, but at least one must be selected.
// Therefore validation around the set of radios is required.
import type { WithWhiteSpaceProps } from '@govuk-react/lib';

import React from 'react';
import styled from 'styled-components';
import { ERROR_COLOUR } from 'govuk-colours';
import LabelText from '@govuk-react/label-text';
import ErrorText from '@govuk-react/error-text';
import HintText from '@govuk-react/hint-text';

import { BORDER_WIDTH_MOBILE, SPACING } from '@govuk-react/constants';
import { spacing } from '@govuk-react/lib';

const StyledFieldset = styled('div')(
  {
    padding: 0,
    margin: 0,
    border: 0,
    boxSizing: 'border-box',
    width: '100%',
    ':after': {
      content: "''",
      display: 'table',
      clear: 'both',
    },
  },
  ({ error }) => ({
    borderLeft: error ? `${BORDER_WIDTH_MOBILE} solid ${ERROR_COLOUR}` : undefined,
    marginRight: error ? SPACING.SCALE_3 : undefined,
    paddingLeft: error ? SPACING.SCALE_2 : undefined,
  }),
  spacing.withWhiteSpace({ marginBottom: 0 })
);

/**
 *
 * ### Usage
 *
 * Simple
 *
 * ```jsx
 * import { MultiChoice, Radio } from 'govuk-react';
 *
 * <MultiChoice label="example">
 *    <Radio name="group1" inline>
 *      Yes
 *    </Radio>
 *    <Radio name="group1" inline>
 *      No
 *    </Radio>
 * </MultiChoice>
 * ```
 *
 * ### References:
 *
 * - https://govuk-elements.herokuapp.com/errors/
 * - https://govuk-elements.herokuapp.com/errors/example-form-validation-single-question-radio
 *
 */
const MultiChoice: React.FC<MultiChoiceProps> = ({ meta, label, children, hint, ...props }: MultiChoiceProps) => (
  <StyledFieldset error={meta.touched && !!meta.error} {...props}>
    <LabelText>{label}</LabelText>
    {hint && <HintText>{hint}</HintText>}
    {meta.touched && meta.error && <ErrorText>{meta.error}</ErrorText>}
    {children}
  </StyledFieldset>
);

MultiChoice.defaultProps = {
  hint: undefined,
  meta: {},
};

interface MultiChoiceProps extends WithWhiteSpaceProps {
  meta?: {
    active?: boolean;
    dirty?: boolean;
    dirtySinceLastSubmit?: boolean;
    error?: any;
    initial?: any;
    invalid?: boolean;
    pristine?: boolean;
    submitError?: any;
    submitFailed?: boolean;
    submitSucceeded?: boolean;
    touched?: boolean;
    valid?: boolean;
    visited?: boolean;
  };
  label: React.ReactNode;
  children: React.ReactNode;
  hint?: string;
}

export default MultiChoice;
