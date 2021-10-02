import type { WithWhiteSpaceProps } from '@govuk-react/lib';

import * as React from 'react';
import styled from 'styled-components';

import { spacing, typography } from '@govuk-react/lib';
import { HEADING_SIZES, SPACING_POINTS } from '@govuk-react/constants';

const StyledLegend = styled('legend')<LegendProps>(
  spacing.withWhiteSpace(),
  typography.font({ size: 19 }),
  typography.textColour,
  {
    boxSizing: 'border-box',
    display: 'table',
    maxWidth: '100%',
    marginBottom: SPACING_POINTS[2],
    padding: 0,
    // Disabling this as per https://github.com/alphagov/govuk-frontend/issues/1239
    // overflow: 'hidden',
    whiteSpace: 'normal',
  },
  ({ size }) => {
    const actualSize = Number.isNaN(Number(size)) ? HEADING_SIZES[size] : size;

    if (size !== undefined && !actualSize) {
      throw Error(`Unknown size ${size} used for legend.`);
    }

    if (!actualSize) {
      return undefined;
    }

    return {
      ...typography.font({ size: actualSize, weight: 'bold' }),
      ...(actualSize > 19 ? { marginBottom: SPACING_POINTS[3] } : undefined),
    };
  }
);

const StyledHeading = styled('h1')({
  margin: 0,
  fontSize: 'inherit',
  fontWeight: 'inherit',
});

// // When the legend contains an H1, we want the H1 to inherit all styles from
// // the legend. Effectively we want to be able to treat the heading as if it is
// // not there.
// .govuk-fieldset__heading {
//   margin: 0;
//   font-size: inherit;
//   font-weight: inherit;
// }

const Legend: React.FC<LegendProps> = ({ children, isPageHeading = undefined, ...props }: LegendProps) => (
  <StyledLegend {...props}>{isPageHeading ? <StyledHeading>{children}</StyledHeading> : children}</StyledLegend>
);

interface LegendProps extends WithWhiteSpaceProps {
  children: React.ReactNode;
  isPageHeading?: boolean;
  size?: string | number;
}

Legend.defaultProps = {
  isPageHeading: false,
  size: undefined,
};
Legend.displayName = 'Fieldset.Legend';

export default Legend;
