import type { WithWhiteSpaceProps } from '@govuk-react/lib';

import React from 'react';
import styled from 'styled-components';
import { ERROR_COLOUR } from 'govuk-colours';
import { spacing } from '@govuk-react/lib';
import { BORDER_WIDTH_FORM_GROUP_ERROR, SPACING_POINTS } from '@govuk-react/constants';

/**
 *
 * ### Usage
 *
 * Simple
 *
 * ```jsx
 * import { FormGroup, Checkbox } from 'govuk-react'
 *
 * <FormGroup>
 *   <Checkbox name="group-1">Example</Checkbox>
 * </FormGroup>
 * ```
 *
 * ### References
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/objects/_form-group.scss
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
interface FormGroupProps extends WithWhiteSpaceProps {
  children?: React.ReactNode;
  error?: boolean;
}

FormGroup.defaultProps = {
  error: false,
};

FormGroup.displayName = 'FormGroup';

export default FormGroup;
