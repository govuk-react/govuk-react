import styled from 'styled-components';
import PropTypes from 'prop-types';
import { GREY_2 } from 'govuk-colours';
import { spacing } from '@govuk-react/lib';
import { MEDIA_QUERIES } from '@govuk-react/constants';

const TabPanel = styled('section')(
  {
    marginBottom: spacing.responsive({ size: 8, property: 'mobile', direction: 'bottom' }),
    [MEDIA_QUERIES.TABLET]: {
      marginBottom: spacing.simple(0),
      paddingTop: spacing.simple(6),
      paddingRight: spacing.simple(4),
      paddingBottom: spacing.simple(6),
      paddingLeft: spacing.simple(4),
      border: `1px solid ${GREY_2}`,
      borderTop: 0,
      '& >: last-child': {
        marginBottom: 0,
      },
    },
  },
  ({ selected }) => ({
    display: 'block',
    [MEDIA_QUERIES.TABLET]: {
      display: !selected && 'none',
    },
  }),
);

TabPanel.PropTypes = {
  /** determine which panel is displayed */
  selected: PropTypes.bool.isRequired,
};

export default TabPanel;
