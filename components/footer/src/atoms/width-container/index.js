// tracking https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/objects/_width-container.scss
import styled from 'styled-components';
import { spacing } from '@govuk-react/lib';
import { GUTTER, GUTTER_HALF, MEDIA_QUERIES, SITE_WIDTH } from '@govuk-react/constants';

const WidthContainer = styled('div')(
  {
    maxWidth: SITE_WIDTH,
    margin: `0 ${GUTTER_HALF}`,
    [MEDIA_QUERIES.TABLET]: {
      margin: `0 ${GUTTER}`,
    },
    [MEDIA_QUERIES.MAX]: {
      margin: '0 auto',
    },
  },
  spacing.withWhiteSpace()
);

export default WidthContainer;
