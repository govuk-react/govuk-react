import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import {
  FONT_SIZE,
  LINE_HEIGHT,
  MEDIA_QUERIES,
  NTA_LIGHT,
  SPACING,
} from '@govuk-react/constants';
import { withWhiteSpace } from '@govuk-react/hoc';

const StyledListItem = styled('li')({
  fontFamily: NTA_LIGHT,
  fontWeight: 400,
  textTransform: 'none',
  fontSize: FONT_SIZE.SIZE_14,
  lineHeight: LINE_HEIGHT.SIZE_14,
  width: '100%',
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: FONT_SIZE.SIZE_16,
    lineHeight: LINE_HEIGHT.SIZE_16,
    marginBottom: SPACING.SCALE_1,
  },
});

/**
 *
 * ### Usage
 *
 *
 * Simple
 * ```jsx
 * <ListItem>List item example</ListItem>
 * ```
 *
 * With anchor
 * ```jsx
 * import { asAnchor } from '@govuk-react/hoc';
 *
 * <ListItem>
 *   <AnchorTag href="https://www.google.com/">{text('Children', 'List item example')}</AnchorTag>
 * </ListItem>
 * ```
 *
 * ### References
 * - https://github.com/alphagov/govuk-frontend/tree/master/src/components
 */
const ListItem = ({ children, className }) => (
  <StyledListItem className={className}>{children}</StyledListItem>
);

ListItem.defaultProps = {
  className: undefined,
};

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default withWhiteSpace({ marginBottom: 0 })(ListItem);
