// TODO INSERT A COMMENT REFERENCE TO EXTERNAL URL IF POSSIBLE

import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { CSSTransition } from 'react-transition-group';
import hexRgb from 'hex-rgb';
import { Spinner } from '@govuk-react/icons';
import { GREY_1 } from 'govuk-colours';

const LoadingBoxInner = glamorous.div(({
  loading,
  timeIn,
  timeOut,
  backgroundColor,
  backgroundColorOpacity,
}) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  overflow: 'hidden',
  height: '100%',
  width: '100%',
  transition: `background-color ${timeIn}ms ease-in-out`,
  backgroundColor: loading ? `rgba(${hexRgb(backgroundColor).red},${hexRgb(backgroundColor).green},${hexRgb(backgroundColor).blue},${backgroundColorOpacity})` : `rgba(${hexRgb(backgroundColor).red},${hexRgb(backgroundColor).green},${hexRgb(backgroundColor).blue},0)`,
  '.fade-enter': {
    backgroundColor: `rgba(${hexRgb(backgroundColor).red},${hexRgb(backgroundColor).green},${hexRgb(backgroundColor).blue},0)`,
    // opacity: 0,
    transitionDuration: `${timeIn}ms`,
  },
  '.fade-enter-active': {
    backgroundColor: `rgba(${hexRgb(backgroundColor).red},${hexRgb(backgroundColor).green},${hexRgb(backgroundColor).blue},${backgroundColorOpacity})`,
    transitionDuration: `${timeIn}ms`,
    // opacity: 1,
  },
  '.fade-exit': {
    backgroundColor: `rgba(${hexRgb(backgroundColor).red},${hexRgb(backgroundColor).green},${hexRgb(backgroundColor).blue},${backgroundColorOpacity})`,
    transitionDuration: `${timeOut}ms`,
    // opacity: 1,
  },
  '.fade-exit-active': {
    backgroundColor: `rgba(${hexRgb(backgroundColor).red},${hexRgb(backgroundColor).green},${hexRgb(backgroundColor).blue},0)`,
    transitionDuration: `${timeOut}ms`,
    // opacity: 0,
  },
}));
// const LoadingBoxInner = glamorous.div(
//   () => ({
//     position: 'absolute',
//     top: 0,
//     right: 0,
//     bottom: 0,
//     left: 0,
//     overflow: 'hidden',
//     height: '100%',
//     width: '100%',
//   }),
//   ({ timeIn, backgroundColor }) => ({
//     backgroundColor,
//     transition: timeIn ? `background-color ${timeIn}ms` : undefined,
//   }),
//   ({ timeOut, backgroundColor, backgroundColorOpacity }) => ({
//     backgroundColor: `rgba(${hexRgb(backgroundColor).red},${hexRgb(backgroundColor).green},${hexRgb(backgroundColor).blue},${backgroundColorOpacity})`,
//     transition: timeOut ? `background-color ${timeOut}ms` : undefined,
//   }),
// );

const LoadingBox = ({
  children,
  backgroundColor,
  backgroundColorOpacity,
  loading,
  timeIn,
  timeOut,
  ...props
}) => (
  <CSSTransition {...props} timeout={timeIn} classNames="fade" unmountOnExit>
    <LoadingBoxInner
      backgroundColor={backgroundColor}
      backgroundColorOpacity={backgroundColorOpacity}
      loading={loading}
      timeIn={timeIn}
      timeOut={timeOut}
    >
      {children}
    </LoadingBoxInner>
  </CSSTransition>
);

LoadingBox.defaultProps = {
  backgroundColor: GREY_1,
  backgroundColorOpacity: 0.8,
  loading: true,
  timeIn: 500,
  timeOut: 500,
};

LoadingBox.propTypes = {
  children: PropTypes.node.isRequired,
  // hex colour 3 or 6 characters with or without hash
  backgroundColor: PropTypes.string,
  backgroundColorOpacity: PropTypes.number,
  loading: PropTypes.bool,
  // number in milliseconds
  timeIn: PropTypes.number,
  timeOut: PropTypes.number,
};

export default LoadingBox;
