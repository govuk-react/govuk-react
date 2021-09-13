import React from 'react';
import styled from 'styled-components';
import { ERROR_COLOUR } from 'govuk-colours';
import { spacing } from '@govuk-react/lib';
import { BORDER_WIDTH_FORM_GROUP_ERROR, SPACING_POINTS } from '@govuk-react/constants';

const FormGroup: React.FC<FormGroupProps> = styled('div')(
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
const FormGroupDocumented: React.FC<FormGroupProps> = (props: FormGroupProps) => <FormGroup {...props} />;

interface FormGroupProps {
  children?: React.ReactNode;
  error?: boolean;
}

FormGroupDocumented.defaultProps = {
  error: false,
};

FormGroup.propTypes = FormGroupDocumented.propTypes;
FormGroup.defaultProps = FormGroupDocumented.defaultProps;

export { FormGroupDocumented };
export default FormGroup;
