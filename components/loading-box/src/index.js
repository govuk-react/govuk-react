// TODO INSERT A COMMENT REFERENCE TO EXTERNAL URL IF POSSIBLE

import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { CSSTransition } from 'react-transition-group';
import hexRgb from 'hex-rgb';
import { Spinner } from '@govuk-react/icons';
import { GREY_1, WHITE } from 'govuk-colours';

const Wrapper = glamorous.div({
  position: 'relative',
});

const Innerwrap = glamorous.div(({
  timeIn,
  timeOut,
  loading,
  backgroundColor,
  backgroundColorOpacity,
}) => ({
  position: 'absolute',
  height: '100%',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  '> svg': {
    position: 'absolute',
    zIndex: 1,
    opacity: 1,
    display: 'block',
    height: '100%',
    maxHeight: 'calc(50vh + 100px)',
    transition: `opacity ${timeIn}ms ease-in-out`,
  },
  ' > div': {
    transition: `background-color ${timeIn}ms ease-in-out`,
    backgroundColor: loading ? `rgba(
      ${hexRgb(backgroundColor).red},
      ${hexRgb(backgroundColor).green},
      ${hexRgb(backgroundColor).blue},
      ${backgroundColorOpacity})` : `rgba(
        ${hexRgb(backgroundColor).red},
        ${hexRgb(backgroundColor).green},
        ${hexRgb(backgroundColor).blue},
        0)`,
  },
  '.fade-enter': {
    ' > div': {
      backgroundColor: `rgba(
        ${hexRgb(backgroundColor).red},
        ${hexRgb(backgroundColor).green},
        ${hexRgb(backgroundColor).blue},
        0)`,
      transitionDuration: `${timeIn}ms`,
    },
    ' svg': {
      opacity: 0,
      transitionDuration: `${timeIn}ms`,
      transitionDelay: `${timeIn / 2}ms`,
    },
  },
  '.fade-enter-active': {
    ' > div': {
      backgroundColor: `rgba(
        ${hexRgb(backgroundColor).red},
        ${hexRgb(backgroundColor).green},
        ${hexRgb(backgroundColor).blue},
        ${backgroundColorOpacity})`,
      transitionDuration: `${timeIn}ms`,
    },
    ' svg': {
      opacity: 1,
      transitionDuration: `${timeIn}ms`,
      transitionDelay: `${timeIn / 2}ms`,
    },
  },
  '.fade-exit': {
    ' > div': {
      backgroundColor: `rgba(
        ${hexRgb(backgroundColor).red},
        ${hexRgb(backgroundColor).green},
        ${hexRgb(backgroundColor).blue},
        ${backgroundColorOpacity})`,
      transitionDuration: `${timeOut}ms`,
    },
    ' svg': {
      opacity: 1,
      transitionDuration: `${timeOut}ms`,
    },
  },
  '.fade-exit-active': {
    ' > div': {
      backgroundColor: `rgba(
        ${hexRgb(backgroundColor).red},
        ${hexRgb(backgroundColor).green},
        ${hexRgb(backgroundColor).blue},
        0)`,
      transitionDuration: `${timeOut}ms`,
    },
    ' svg': {
      opacity: 0,
      transitionDuration: `${timeOut}ms`,
    },
  },
}));

const Overlay = glamorous.div({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  overflow: 'hidden',
  height: '100%',
  width: '100%',
});

const LoadingBox = ({
  children,
  backgroundColor,
  backgroundColorOpacity,
  loading,
  spinnerColor,
  timeIn,
  timeOut,
  ...props
}) => (
  <Wrapper>
    <CSSTransition {...props} timeout={timeOut} classNames="fade" in={loading} unmountOnExit>
      <Innerwrap
        backgroundColor={backgroundColor}
        backgroundColorOpacity={backgroundColorOpacity}
        loading={loading}
        timeIn={timeIn}
        timeOut={timeOut}
      >
        <Spinner fill={spinnerColor} width="100px" height="100px" />
        <Overlay />
      </Innerwrap>
    </CSSTransition>
    {children}
  </Wrapper>
);

LoadingBox.defaultProps = {
  spinnerColor: WHITE,
  backgroundColor: '#808080',
  backgroundColorOpacity: 0.5,
  loading: true,
  timeIn: 200,
  timeOut: 200,
};

LoadingBox.propTypes = {
  children: PropTypes.node.isRequired,
  spinnerColor: PropTypes.string,
  // hex colour 3 or 6 characters with or without hash
  backgroundColor: PropTypes.string,
  backgroundColorOpacity: PropTypes.number,
  loading: PropTypes.bool,
  // number in milliseconds
  timeIn: PropTypes.number,
  timeOut: PropTypes.number,
};

export default LoadingBox;
