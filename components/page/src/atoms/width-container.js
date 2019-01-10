import styled from '@emotion/styled';

import { MEDIA_QUERIES, SPACING, SITE_WIDTH } from '@govuk-react/constants';

const WidthContainer = styled('div')({
  // tracking https://github.com/alphagov/govuk-frontend/blob/master/src/objects/_width-container.scss
  margin: `0 ${SPACING.SCALE_3}`,
  maxWidth: SITE_WIDTH,
  [MEDIA_QUERIES.LARGESCREEN]: {
    margin: `0 ${SPACING.SCALE_5}`,
  },
  [MEDIA_QUERIES.MAX]: {
    margin: '0 auto',
  },
});

export default WidthContainer;
