import styled from 'react-emotion';

import {
  MEDIA_QUERIES,
  SPACING,
} from '@govuk-react/constants';

const Main = styled('main')({
  // tracking https://github.com/alphagov/govuk-frontend/blob/master/src/objects/_main-wrapper.scss
  paddingTop: SPACING.SCALE_4,
  paddingBottom: SPACING.SCALE_4,
  // In IE11 the `main` element can be used, but is not recognized  –
  // meaning it's not defined in IE's default style sheet,
  // so it uses CSS initial value, which is inline.
  display: 'block',
  [MEDIA_QUERIES.LARGESCREEN]: {
    paddingTop: SPACING.SCALE_5,
    paddingBottom: SPACING.SCALE_5,
  },
});

export default Main;
