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

import * as React from 'react';
import styled from 'styled-components';
import { ERROR_COLOUR } from 'govuk-colours';
import LabelText from '@govuk-react/label-text';
import ErrorText from '@govuk-react/error-text';
import HintText from '@govuk-react/hint-text';

import { BORDER_WIDTH_MOBILE, SPACING } from '@govuk-react/constants';
import { spacing } from '@govuk-react/lib';

const StyledFieldset = styled('div')<{ error: boolean } & WithWhiteSpaceProps>(
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
 * For wrapping a set of radio buttons with a label, optional hint and optional error.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/multi-choice
 * - https://design-system.service.gov.uk/components/radios/
 */
export const MultiChoice: React.FC<MultiChoiceProps> = ({
  meta,
  label,
  children,
  hint,
  ...props
}: MultiChoiceProps) => (
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

MultiChoice.displayName = 'MultiChoice';

export interface MultiChoiceProps extends WithWhiteSpaceProps {
  meta?: {
    error?: string | string[];
    touched?: boolean;
  };
  label: React.ReactNode;
  children: React.ReactNode;
  hint?: string;
}

export default MultiChoice;
