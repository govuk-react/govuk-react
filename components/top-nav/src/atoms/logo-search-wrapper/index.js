import glamorous from 'glamorous';
import {
  MEDIA_QUERIES,
  SPACING,
} from '@govuk-react/constants';

const LogoSearchWrapper = glamorous.div({
  display: 'flex',
  justifyContent: 'space-between',
  [MEDIA_QUERIES.LARGESCREEN]: {
    display: 'block',
    paddingRight: SPACING.SCALE_3,
    width: '33.33%',
  },
});

export default LogoSearchWrapper;
