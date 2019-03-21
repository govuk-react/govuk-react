import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { spacing, typography } from '@govuk-react/lib';
import { HEADING_SIZES, SPACING_POINTS, TYPOGRAPHY_SCALE } from '@govuk-react/constants';

const StyledLegend = styled('legend')(
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

    return Object.assign(
      {},
      typography.font({ size: actualSize, weight: 'bold' }),
      actualSize > 19 ? { marginBottom: SPACING_POINTS[3] } : undefined
    );
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

const Legend = ({ children, isPageHeading, ...props }) => (
  <StyledLegend {...props}>{isPageHeading ? <StyledHeading>{children}</StyledHeading> : children}</StyledLegend>
);

Legend.propTypes = {
  children: PropTypes.node.isRequired,
  isPageHeading: PropTypes.bool,
  size: PropTypes.oneOf([...Object.keys(HEADING_SIZES), ...Object.keys(TYPOGRAPHY_SCALE)]),
};

Legend.defaultProps = {
  isPageHeading: false,
  size: undefined,
};

export default Legend;
