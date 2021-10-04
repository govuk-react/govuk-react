/**
 * ### References
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/objects/_form-group.scss
 */
import type { WithWhiteSpaceProps } from '@govuk-react/lib';

import * as React from 'react';
import styled from 'styled-components';
import { ERROR_COLOUR } from 'govuk-colours';
import { spacing } from '@govuk-react/lib';
import { BORDER_WIDTH_FORM_GROUP_ERROR, SPACING_POINTS } from '@govuk-react/constants';

/**
 * For wrapping a set of form fields such as checkboxes.
 *
 * Also see Label and LabelText components.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/form-group
 */
export const FormGroup = styled('div')<FormGroupProps>(
  spacing.responsiveMargin({ size: 6, direction: 'bottom' }),
  {
    '& &:last-of-type': {
      marginBottom: 0,
    },
  },
  ({ error }) =>
    error
      ? {
          paddingLeft: SPACING_POINTS[3],
          borderLeft: `${BORDER_WIDTH_FORM_GROUP_ERROR} solid ${ERROR_COLOUR}`,
          '&& &': {
            padding: 0,
            border: 0,
          },
        }
      : undefined,
  spacing.withWhiteSpace()
);
export interface FormGroupProps extends WithWhiteSpaceProps {
  children?: React.ReactNode;
  error?: boolean;
}

FormGroup.defaultProps = {
  error: false,
};

FormGroup.displayName = 'FormGroup';

export default FormGroup;
