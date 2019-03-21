import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BLUE } from 'govuk-colours';

import { FONT_SIZE, LINE_HEIGHT, MEDIA_QUERIES, SPACING } from '@govuk-react/constants';
import { spacing } from '@govuk-react/lib';

const StyledRelatedItems = styled('div')(
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

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * import { H3 } from '@govuk-react/heading';
 * import UnorderedList from '@govuk-react/unordered-list';
 * import Link from '@govuk-react/link';
 * import ListItem from '@govuk-react/list-item';
 *
 * <RelatedItems>
 *   <H3>Example heading</H3>
 *   <UnorderedList listStyleType="none">
 *     <ListItem>
 *       <Link href="https://example.com">Link A</Link>
 *     </ListItem>
 *   </UnorderedList>
 * </RelatedItems>
 * ```
 *
 * ### References:
 * - https://govuk-static.herokuapp.com/component-guide/related_items
 *
 * ### TODO:
 * - Replace CSS selectors with imported components
 *
 */
const RelatedItems = props => <StyledRelatedItems {...props} />;

RelatedItems.propTypes = {
  /** Related items content */
  children: PropTypes.node.isRequired,
};

export default RelatedItems;
