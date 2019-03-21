import styled from 'styled-components';
import { MEDIA_QUERIES, SPACING } from '@govuk-react/constants';

const SearchWrapper = styled('div')({
  marginTop: SPACING.SCALE_1,
  width: '50%',
  minWidth: '110px',
  [MEDIA_QUERIES.LARGESCREEN]: {
    width: '100%',
  },
});

export default SearchWrapper;
