import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import * as COLOUR from 'govuk-colours';

import {
  FONT_SIZE,
  LINE_HEIGHT,
  MEDIA_QUERIES,
  SPACING,
} from '@govuk-react/constants';
import { withWhiteSpace } from '@govuk-react/hoc';

const StyledRelatedItems = styled('div')({
  borderTop: `10px solid ${COLOUR.BLUE}`,
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
});

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * import Header from '@govuk-react/header';
 * import UnorderedList from '@govuk-react/unordered-list';
 * import ListItem from '@govuk-react/list-item';
 * import { asAnchor } from '@govuk-react/hoc';
 *
 * const AnchorTag = asAnchor('a');
 *
 * <RelatedItems>
 *   <Header level={3}>Example header</Header>
 *   <UnorderedList listStyleType="none">
 *     <ListItem>
 *       <AnchorTag href="https://example.com">Link A</AnchorTag>
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
const RelatedItems = ({ children, className }) => (
  <StyledRelatedItems className={className}>{children}</StyledRelatedItems>
);

RelatedItems.defaultProps = {
  className: undefined,
};

RelatedItems.propTypes = {
  /**
   * Related items content
   */
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default withWhiteSpace({ marginBottom: 0 })(RelatedItems);
