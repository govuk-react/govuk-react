import glamorous from 'glamorous';
import { LIGHT_BLUE, WHITE, PROPOSITION_BORDER } from 'govuk-colours';
import {
  MEDIA_QUERIES,
  SPACING,
} from '@govuk-react/constants';

const Li = glamorous.li(({
  active,
}) => ({
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
  ' a': {
    color: active ? LIGHT_BLUE : WHITE,
    textDecoration: 'none',
    borderBottom: '1px solid transparent',
    fontWeight: 700,
    ':hover': {
      borderBottomColor: active ? LIGHT_BLUE : WHITE,
    },
  },
}));

export default Li;
