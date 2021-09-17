// https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/
import type { WithWhiteSpaceProps } from '@govuk-react/lib';

import styled from 'styled-components';
import { ERROR_COLOUR } from 'govuk-colours';
import { SPACING } from '@govuk-react/constants';
import { spacing } from '@govuk-react/lib';

// TODO consider removing this, as it's not as per govuk-frontend
// NB our approach to labels/fields differs at present, which is why we have this
// we have no `form-group` - this, to an extent, replaces it...

/**
 *
 * Label element to wraps label-text and a form input
 *
 * ### Usage
 *
 * Simple
 *
 * ```jsx
 * import { Label, LabelText, HintText, ErrorText, Input } from 'govuk-react'
 *
 * <Label>
 *   <LabelText>Example label</LabelText>
 *   <HintText>Example hint</HintText>
 *   <ErrorText>Example error</ErrorText>
 *   <Input value={value} onClick={onClick} />
 * </Label>
 * ```
 *
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/
 *
 */
export const Label = styled('label')<LabelProps>(
  {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    ':after': {
      content: "''",
      display: 'table',
      clear: 'both',
    },
  },
  ({ error }) => ({
    borderLeft: error ? `4px solid ${ERROR_COLOUR}` : undefined,
    marginRight: error ? SPACING.SCALE_3 : undefined,
    paddingLeft: error ? SPACING.SCALE_2 : undefined,
  }),
  spacing.withWhiteSpace({ marginBottom: 0 })
);

export interface LabelProps extends WithWhiteSpaceProps {
  /**
   * Apply error state styling to the component
   */
  error?: boolean;
}

Label.defaultProps = {
  error: false,
};

export default Label;
