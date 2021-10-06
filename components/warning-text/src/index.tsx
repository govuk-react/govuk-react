/**
 * ### References:
 *
 * - https://govuk-elements.herokuapp.com/typography/#typography-warning-text
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/warning-text
 */

import * as React from 'react';
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
 * Use the warning text component when you need to warn users about something important, such as legal consequences of an action, or lack of action, that they might take.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/warning-text
 * - https://design-system.service.gov.uk/components/warning-text/
 */
export const WarningText: React.FC<WarningTextProps> = ({ children, ...props }: WarningTextProps) => (
  <StyledWarningText {...props}>
    <IconImportantWrapper>
      <IconImportant />
    </IconImportantWrapper>
    <WarningTextWrapper>{children}</WarningTextWrapper>
  </StyledWarningText>
);

WarningText.displayName = 'WarningText';

export interface WarningTextProps {
  /**
   * Warning text to be displayed
   */
  children: React.ReactNode;
}

export default WarningText;
