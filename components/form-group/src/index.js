import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ERROR_COLOUR } from 'govuk-colours';
import { spacing } from '@govuk-react/lib';
import { BORDER_WIDTH_FORM_GROUP_ERROR, SPACING_POINTS } from '@govuk-react/constants';

const FormGroup = styled('div')(
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

          '& &': {
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
 * ```jsx
 * import Checkbox from '@govuk-react/checkbox';
 *
 * <FormGroup>
 *   <Checkbox name="group-1">Example</Checkbox>
 * </FormGroup>
 * ```
 *
 * ### References
 * - https://github.com/alphagov/govuk-frontend/blob/master/src/objects/_form-group.scss
 */
const FormGroupDocumented = props => <FormGroup {...props} />;

FormGroupDocumented.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.bool,
};

FormGroupDocumented.defaultProps = {
  error: false,
};

FormGroup.propTypes = FormGroupDocumented.propTypes;
FormGroup.defaultProps = FormGroupDocumented.defaultProps;

export { FormGroupDocumented };
export default FormGroup;
