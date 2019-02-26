import styled from 'styled-components';
import { FONT_SIZE, MEDIA_QUERIES, SPACING } from '@govuk-react/constants';

const TabsTitle = styled('h2')({
  fontSize: FONT_SIZE.SIZE_19,
  marginBottom: SPACING.SCALE_1,
  [MEDIA_QUERIES.TABLET]: {
    display: 'none',
  },
});

export default TabsTitle;
