// https://github.com/alphagov/govuk-frontend/tree/master/src/components/

import styled from 'react-emotion';
import React from 'react';
import PropTypes from 'prop-types';
import { SECONDARY_TEXT_COLOUR } from 'govuk-colours';
import { withWhiteSpace } from '@govuk-react/hoc';
import { typography } from '@govuk-react/lib';

const StyledHint = styled('span')(
  typography.font({ size: 19 }),
  {
    display: 'block',
    color: `${SECONDARY_TEXT_COLOUR}`,
  },
);

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
 * - https://github.com/alphagov/govuk-frontend/tree/master/src/components/
 */
const HintText = props => <StyledHint {...props} />;

HintText.propTypes = {
  /** Text for the hint */
  children: PropTypes.node.isRequired,
};

export default withWhiteSpace({ marginBottom: 0 })(HintText);
