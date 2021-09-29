import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BORDER_COLOUR } from 'govuk-colours';
import { spacing } from '@govuk-react/lib';
import { MEDIA_QUERIES } from '@govuk-react/constants';

const TabPanel = styled('section')(
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

TabPanel.propTypes = {
  /** determine which panel is displayed */
  selected: PropTypes.bool.isRequired,
};

export default TabPanel;
