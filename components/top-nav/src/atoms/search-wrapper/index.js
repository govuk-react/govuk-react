import glamorous from 'glamorous';
import { BLUE, LIGHT_BLUE, BLACK, WHITE, PROPOSITION_BORDER } from 'govuk-colours';
import {
  FONT_SIZE,
  LINE_HEIGHT,
  MEDIA_QUERIES,
  SPACING,
  NTA_LIGHT,
} from '@govuk-react/constants';

const SearchWrapper = glamorous.div({
  marginTop: SPACING.SCALE_1,
  width: '50%',
  [MEDIA_QUERIES.LARGESCREEN]: {
    width: '100%',
  },
});

export default SearchWrapper;
