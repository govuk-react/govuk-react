import styled from 'styled-components';
import { BORDER_COLOUR } from 'govuk-colours';
import { spacing } from '@govuk-react/lib';
import { MEDIA_QUERIES } from '@govuk-react/constants';

const clearfix = {
  '::after': {
    content: "''",
    display: 'block',
    clear: 'both',
  },
};

const TabList = styled('ul')(
  {
    margin: 0,
  },
  spacing.responsive({ size: 6, property: 'margin', direction: 'bottom' }),
  {
    padding: 0,
    listStyle: 'none',
    [MEDIA_QUERIES.TABLET]: {
      borderBottom: `1px solid ${BORDER_COLOUR}`,
      marginBottom: 0,
      ...clearfix,
    },
  }
);

export default TabList;
