import type { WithWidthProps } from '@govuk-react/lib';

import styled from 'styled-components';
import { BORDER_COLOUR } from 'govuk-colours';
import { FONT_WEIGHTS, SPACING_POINTS } from '@govuk-react/constants';
import { spacing, typography } from '@govuk-react/lib';

const Cell = styled('td')<CellProps>(
  ({ numeric, alignRight = numeric, bold }) => ({
    padding: `${SPACING_POINTS[2]}px ${SPACING_POINTS[4]}px ${SPACING_POINTS[2]}px 0`,
    borderBottom: `1px solid ${BORDER_COLOUR}`,
    textAlign: alignRight ? 'right' : 'left',
    fontWeight: bold ? Number(FONT_WEIGHTS.bold) : undefined,
    ':last-child': {
      paddingRight: 0,
    },
  }),
  ({ numeric, isHeader }) => (numeric && !isHeader ? typography.font({ tabular: true }) : undefined),
  spacing.withWidth()
);
interface CellProps extends React.HTMLAttributes<HTMLTableCellElement>, WithWidthProps {
  alignRight?: boolean;
  isHeader?: boolean;
  numeric?: boolean;
  bold?: boolean;
}

export default Cell;
