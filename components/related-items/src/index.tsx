import styled from 'styled-components';
import { BLUE } from 'govuk-colours';

import { FONT_SIZE, LINE_HEIGHT, MEDIA_QUERIES, SPACING } from '@govuk-react/constants';
import { spacing } from '@govuk-react/lib';

/**
 * Component showing related content, including topics, guidance and collections.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/related-items
 * - https://components.publishing.service.gov.uk/component-guide/related_navigation
 */
export const RelatedItems = styled('div')(
  {
    borderTop: `10px solid ${BLUE}`,
    paddingTop: SPACING.SCALE_1,
    width: '100%',
    [MEDIA_QUERIES.LARGESCREEN]: {
      fontSize: FONT_SIZE.SIZE_16,
      lineHeight: LINE_HEIGHT.SIZE_16,
    },
    '> h3': {
      marginBottom: SPACING.SCALE_2,
    },
    '> ul': {
      marginBottom: SPACING.SCALE_4,
      '> li': {
        marginBottom: `calc(${SPACING.SCALE_2} + 2px)`,
      },
    },
  },
  spacing.withWhiteSpace({ marginBottom: 0 })
);

RelatedItems.displayName = 'RelatedItems';

export default RelatedItems;
