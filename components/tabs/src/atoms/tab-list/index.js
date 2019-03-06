import styled from 'styled-components';
import { GREY_2 } from 'govuk-colours';
import { spacing } from '@govuk-react/lib';
import { MEDIA_QUERIES } from '@govuk-react/constants';

const clearfix = {
  '::after': {
    content: "''",
    display: 'block',
    clear: 'both',
  },
};

const TabList = styled('ul')({
  margin: 0,
  marginBottom: spacing.responsive({ size: 6, property: 'margin', direction: 'bottom' }),
  padding: 0,
  listStyle: 'none',

  [MEDIA_QUERIES.TABLET]: {
    borderBottom: `1px solid ${GREY_2}`,
    ...clearfix,
  },
});

export default TabList;
