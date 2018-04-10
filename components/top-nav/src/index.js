// TODO INSERT A COMMENT REFERENCE TO EXTERNAL URL IF POSSIBLE

import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

// import {
//   FONT_SIZE,
//   LINE_HEIGHT,
//   MEDIA_QUERIES,
//   NTA_LIGHT,
// } from '@govuk-react/constants';

const TopNavInner = glamorous.div({
  boxSizing: 'border-box',
  // fontFamily: NTA_LIGHT,
  // fontWeight: 400,
  // textTransform: 'none',
  // fontSize: FONT_SIZE.SIZE_14,
  // lineHeight: LINE_HEIGHT.SIZE_14,
  // width: '100%',
  // [MEDIA_QUERIES.LARGESCREEN]: {
  //   fontSize: FONT_SIZE.SIZE_16,
  //   lineHeight: LINE_HEIGHT.SIZE_16,
  // },
});

const TopNav = ({
  bgColor,
  logo,
  title,
  search,
  children,
  ...props
}) => (
  <TopNavInner {...props}>
    <a href="https://example.com">{logo} {title}</a>
    {/* logo */}{/* title */}
    {/* search */}
    [/* menu toggle */]
    {children}
  </TopNavInner>
);

TopNav.defaultProps = {
  bgColor: '#000',
  logo: undefined,
  title: undefined,
  search: false,
  children: undefined,
};

TopNav.propTypes = {
  bgColor: PropTypes.string,
  logo: PropTypes.string,
  title: PropTypes.string,
  search: PropTypes.bool,
  children: PropTypes.node,
};

export default TopNav;
