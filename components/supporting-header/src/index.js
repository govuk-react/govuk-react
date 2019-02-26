import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { SECONDARY_TEXT_COLOUR } from 'govuk-colours';
import { spacing, typography } from '@govuk-react/lib';
import { SPACING_POINTS } from '@govuk-react/constants';

import { deprecated } from '@govuk-react/hoc';

const StyledHeader = styled('span')(
  typography.font({ size: 27 }),
  {
    color: SECONDARY_TEXT_COLOUR,
    marginBottom: SPACING_POINTS[1],
  },
  spacing.withWhiteSpace(),
);

/**
 *
 * ### Usage
  *
 * This component is DEPRECATED.
 *
 * Please use the `Caption` component instead.
*/
const SupportingHeader = props => <StyledHeader {...props} />;

SupportingHeader.propTypes = {
  /** Text to be rendered as a supporting header */
  children: PropTypes.string.isRequired,
};

export { SupportingHeader };

export default deprecated(SupportingHeader, 'please use the Caption component instead');
