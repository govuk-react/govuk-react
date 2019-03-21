// https://github.com/alphagov/govuk-frontend/tree/master/src/components/

import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { SECONDARY_TEXT_COLOUR } from 'govuk-colours';
import { SPACING_POINTS } from '@govuk-react/constants';
import { spacing, typography } from '@govuk-react/lib';

const StyledHint = styled('span')(
  typography.font({ size: 19 }),
  {
    display: 'block',
    // NB non-responsive marginBottom here
    marginBottom: SPACING_POINTS[3],
    color: `${SECONDARY_TEXT_COLOUR}`,
  },
  spacing.withWhiteSpace()
);

// NB govuk-frontend has styling adjustments for when hint-text is placed next to some other
// components - we have not tried to replicate that here

/**
 *
 * ### Usage
 *
 *
 * Simple
 * ```jsx
 * <HintText>Example</HintText>
 * ```
 *
 * ### References
 * - https://github.com/alphagov/govuk-frontend/blob/master/src/components/hint/_hint.scss
 */
const HintText = props => <StyledHint {...props} />;

HintText.propTypes = {
  /** Text for the hint */
  children: PropTypes.node.isRequired,
};

export default HintText;
