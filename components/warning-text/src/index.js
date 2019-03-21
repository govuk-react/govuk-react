import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { IconImportant } from '@govuk-react/icons';
import { spacing, typography } from '@govuk-react/lib';

import { SPACING_POINTS } from '@govuk-react/constants';

const StyledWarningText = styled('div')(
  {
    alignItems: 'center',
    boxSizing: 'border-box',
    display: 'flex',
    width: '100%',
  },
  spacing.withWhiteSpace({ marginBottom: 0 })
);

const IconImportantWrapper = styled('div')({
  flex: 'none',
  height: 35,
  marginRight: SPACING_POINTS[3],
  width: 35,
});

const WarningTextWrapper = styled('strong')(typography.font({ size: 19, weight: 'bold' }));

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * <WarningText>Example</WarningText>
 * ```
 *
 * ### References:
 * - https://govuk-elements.herokuapp.com/typography/#typography-warning-text
 * - https://github.com/alphagov/govuk-frontend/tree/master/src/components/warning-text
 *
 */
const WarningText = ({ children, ...props }) => (
  <StyledWarningText {...props}>
    <IconImportantWrapper>
      <IconImportant />
    </IconImportantWrapper>
    <WarningTextWrapper>{children}</WarningTextWrapper>
  </StyledWarningText>
);

WarningText.propTypes = {
  /**
   * Warning text to be displayed
   */
  children: PropTypes.node.isRequired,
};

export default WarningText;
