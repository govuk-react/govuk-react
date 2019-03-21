// https://github.com/alphagov/govuk-frontend/tree/master/src/components/

import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { ERROR_COLOUR } from 'govuk-colours';
import { SPACING } from '@govuk-react/constants';
import { spacing } from '@govuk-react/lib';

// TODO consider removing this, as it's not as per govuk-frontend
// NB our approach to labels/fields differs at present, which is why we have this
// we have no `form-group` - this, to an extent, replaces it...

const StyledLabel = styled('label')(
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

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * <Label>Example</Label>
 * ```
 *
 * ### References:
 * - https://github.com/alphagov/govuk-frontend/tree/master/src/components/
 *
 */
const Label = props => <StyledLabel {...props} />;

Label.propTypes = {
  /** Text for the label */
  children: PropTypes.node.isRequired,
  /**
   * Apply error state styling to the component
   */
  error: PropTypes.bool,
  // NB these propTypes don't get documented :(
  ...spacing.withWhiteSpace.propTypes,
};

Label.defaultProps = {
  error: false,
};

export default Label;
