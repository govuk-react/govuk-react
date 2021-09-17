import React from 'react';
import styled from 'styled-components';
import { TURQUOISE, WHITE } from 'govuk-colours';
import { spacing, typography } from '@govuk-react/lib';
import { BORDER_WIDTH, MEDIA_QUERIES, SPACING_POINTS } from '@govuk-react/constants';
import { stripUnit } from 'polished';

const RAW_BORDER_WIDTH = Number(stripUnit(BORDER_WIDTH));

const StyledPanel = styled('div')(
  typography.font({ size: 19 }),
  {
    boxSizing: 'border-box',

    marginBottom: SPACING_POINTS[3],
    // NB govuk-frontend has this element styled tablet-first
    padding: SPACING_POINTS[6] - RAW_BORDER_WIDTH,

    border: `${BORDER_WIDTH} solid transparent`,

    textAlign: 'center',

    // NB govuk-frontend has this media query as an `until tablet` (thus for mobile)
    [MEDIA_QUERIES.TABLET]: {
      padding: SPACING_POINTS[7] - RAW_BORDER_WIDTH,
    },

    color: WHITE,
    background: TURQUOISE,
  },
  spacing.withWhiteSpace()
);

// NB govuk-frontend allows for the headingLevel to change, but defaults to h1
// we're not supporting headingLevel at this time
const StyledTitle = styled('h1')(
  {
    marginTop: 0,
    marginBottom: SPACING_POINTS[6],

    ':last-child': {
      marginBottom: 0,
    },
  },
  typography.font({ size: 48, weight: 'bold' })
);

const StyledBody = styled('div')(typography.font({ size: 36 }));

/**
 *
 * ### Usage
 *
 * Simple
 *
 * ```jsx
 * import { Panel } from 'govuk-react'
 *
 * <Panel title="Application complete" />
 * ```
 *
 * Panel with header and HTML body
 *
 * ```jsx
 * <Panel title="Application complete">
 *   Your reference number<br />
 *   <strong>HDJ2123F</strong>
 * </Panel>
 * ```
 *
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/panel
 *
 */

export const Panel: React.FC<PanelProps> = ({ title, children, ...props }: PanelProps) => (
  <StyledPanel {...props}>
    <StyledTitle>{title}</StyledTitle>
    {children && <StyledBody>{children}</StyledBody>}
  </StyledPanel>
);
Panel.defaultProps = {
  children: undefined,
};

interface PanelProps {
  /** Panel title text */
  title: string;
  /** Panel body text */
  children?: React.ReactNode;
}

export default Panel;
