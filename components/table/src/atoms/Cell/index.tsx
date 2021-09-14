import styled from 'styled-components';
import { BORDER_COLOUR } from 'govuk-colours';
import { FONT_WEIGHTS, SPACING_POINTS } from '@govuk-react/constants';
import { spacing, typography } from '@govuk-react/lib';

const Cell: React.FC<CellProps> = styled('td')(
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
interface CellProps extends React.HTMLAttributes<HTMLTableCellElement> {
  alignRight?: boolean;
  children: React.ReactNode;
  isHeader?: boolean;
  numeric?: boolean;
  bold?: boolean;
}

export default Cell;
