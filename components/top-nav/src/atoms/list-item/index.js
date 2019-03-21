import styled from 'styled-components';
import { PROPOSITION_BORDER } from 'govuk-colours';
import { MEDIA_QUERIES, SPACING } from '@govuk-react/constants';

const Li = styled('li')({
  flex: '1 0 50%',
  width: '100%',
  listStyleType: 'none',
  margin: 0,
  padding: '3px 0',
  borderBottom: `1px solid ${PROPOSITION_BORDER}`,
  [MEDIA_QUERIES.LARGESCREEN]: {
    borderBottom: 0,
    flex: 'none',
    width: 'auto',
    paddingRight: SPACING.SCALE_3,
  },
});

export default Li;
