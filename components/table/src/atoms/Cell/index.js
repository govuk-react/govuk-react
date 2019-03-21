// https://github.com/alphagov/govuk-frontend/blob/master/src/components/table/_table.scss

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BORDER_COLOUR } from 'govuk-colours';
import { FONT_WEIGHTS, SPACING_POINTS } from '@govuk-react/constants';
import { spacing, typography } from '@govuk-react/lib';

const Cell = styled('td')(
  ({ numeric, alignRight = numeric, bold }) => ({
    padding: `${SPACING_POINTS[2]}px ${SPACING_POINTS[4]}px ${SPACING_POINTS[2]}px 0`,
    borderBottom: `1px solid ${BORDER_COLOUR}`,
    textAlign: alignRight ? 'right' : 'left',
    fontWeight: bold ? FONT_WEIGHTS.bold : undefined,
    ':last-child': {
      paddingRight: 0,
    },
  }),
  ({ numeric, isHeader }) => (numeric && !isHeader ? typography.font({ tabular: true }) : undefined),
  spacing.withWidth()
);

Cell.propTypes = {
  alignRight: PropTypes.bool,
  children: PropTypes.node.isRequired,
  isHeader: PropTypes.bool,
  numeric: PropTypes.bool,
};

export default Cell;
