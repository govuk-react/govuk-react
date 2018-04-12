import glamorous from 'glamorous';
import { BLUE } from 'govuk-colours';
import {
  MEDIA_QUERIES,
  SPACING,
} from '@govuk-react/constants';

const BottomNavWrapper = glamorous.div({
  borderBottom: `10px solid ${BLUE}`,
  maxWidth: '990px',
  margin: '0 auto',
  width: `calc(100% - ${SPACING.SCALE_3})`,
  [MEDIA_QUERIES.LARGESCREEN]: {
    width: `calc(100% - ${SPACING.SCALE_6})`,
  },
});

export default BottomNavWrapper;
