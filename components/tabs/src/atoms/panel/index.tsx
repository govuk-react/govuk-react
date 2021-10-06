import styled from 'styled-components';
import { BORDER_COLOUR } from 'govuk-colours';
import { spacing } from '@govuk-react/lib';
import { MEDIA_QUERIES } from '@govuk-react/constants';

const TabPanel = styled('section')<TabPanelProps>(
  spacing.responsiveMargin({ size: 8, direction: 'bottom' }),
  {
    [MEDIA_QUERIES.TABLET]: {
      marginBottom: spacing.simple(0),
      paddingTop: spacing.simple(6),
      paddingRight: spacing.simple(4),
      paddingBottom: spacing.simple(6),
      paddingLeft: spacing.simple(4),
      border: `1px solid ${BORDER_COLOUR}`,
      borderTop: 0,
      '& > :last-child': {
        marginBottom: 0,
      },
    },
  },
  ({ selected }) => ({
    display: 'block',
    [MEDIA_QUERIES.TABLET]: {
      display: !selected && 'none',
    },
  })
);

interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  /** determine which panel is displayed */
  selected?: boolean;
}

export default TabPanel;
