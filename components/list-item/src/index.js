import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import {
  FONT_SIZE,
  LINE_HEIGHT,
  MEDIA_QUERIES,
  NTA_LIGHT,
  SPACING,
} from '@govuk-react/constants';
import { withWhiteSpace } from '@govuk-react/hoc';

const GListItem = glamorous.li({
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

const ListItem = ({ children, className }) => (
  <GListItem className={className}>{children}</GListItem>
);

ListItem.defaultProps = {
  className: undefined,
};

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default withWhiteSpace({ marginBottom: 0 })(ListItem);
