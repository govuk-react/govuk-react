// https://github.com/alphagov/govuk-frontend/tree/master/src/components/

import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import { ERROR_COLOUR } from 'govuk-colours';
import { SPACING } from '@govuk-react/constants';
import { withWhiteSpace } from '@govuk-react/hoc';

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
};

export default withWhiteSpace({ marginBottom: 0 })(Label);
