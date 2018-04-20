import glamorous from 'glamorous';
import {
  MEDIA_QUERIES,
  SPACING,
} from '@govuk-react/constants';

const SearchWrapper = glamorous.div({
  marginTop: SPACING.SCALE_1,
  width: '50%',
  [MEDIA_QUERIES.LARGESCREEN]: {
    width: '100%',
  },
});

export default SearchWrapper;
