// https://govuk-static.herokuapp.com/component-guide/previous_and_next_navigation

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

const PaginationWrapper = glamorous.ul({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  margin: 0,
  padding: SPACING.SCALE_2,
  justifyContent: 'space-between',
  fontFamily: NTA_LIGHT,
  fontWeight: 400,
  textTransform: 'none',
  fontSize: FONT_SIZE.SIZE_16,
  lineHeight: LINE_HEIGHT.SIZE_16,
  width: '100%',
  [MEDIA_QUERIES.LARGESCREEN]: {
    flexDirection: 'row',
  },
});

const Pagination = ({ children, className }) => (
  <PaginationWrapper className={className}>{children}</PaginationWrapper>
);

Pagination.defaultProps = {
  className: undefined,
};

Pagination.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default withWhiteSpace({ marginBottom: 0 })(Pagination);
