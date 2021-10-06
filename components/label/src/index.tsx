// https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/
import type { WithWhiteSpaceProps } from '@govuk-react/lib';

import styled from 'styled-components';
import { ERROR_COLOUR } from 'govuk-colours';
import { SPACING } from '@govuk-react/constants';
import { spacing } from '@govuk-react/lib';

// Our approach to labels/fields differs to govuk-frontend.
// We have no `form-group` - this, to an extent, replaces it.
// We wrap form inputs with a label to associate them, rather than rely on an ID.

/**
 * Label element to wrap label-text and a form input.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/label
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

Label.displayName = 'Label';

export default Label;
