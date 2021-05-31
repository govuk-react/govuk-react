import styled from 'styled-components';
import { BLUE } from 'govuk-colours';
import { MEDIA_QUERIES, SPACING } from '@govuk-react/constants';

const BottomNavWrapper = styled('div')({
  borderBottom: `10px solid ${BLUE}`,
  maxWidth: '960px',
  margin: '0 auto',
  width: `calc(100% - ${SPACING.SCALE_5})`,
  [MEDIA_QUERIES.LARGESCREEN]: {
    width: `calc(100% - ${SPACING.SCALE_6})`,
  },
});

export default BottomNavWrapper;
