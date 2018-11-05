import styled from 'react-emotion';

import {
  MEDIA_QUERIES,
  SPACING,
} from '@govuk-react/constants';

const Main = styled('main')({
  // tracking https://github.com/alphagov/govuk-frontend/blob/master/src/objects/_main-wrapper.scss
  paddingTop: SPACING.SCALE_4,
  paddingBottom: SPACING.SCALE_4,
  [MEDIA_QUERIES.LARGESCREEN]: {
    paddingTop: SPACING.SCALE_5,
    paddingBottom: SPACING.SCALE_5,
  },
});

export default Main;
