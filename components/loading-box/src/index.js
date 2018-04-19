// https://govuk-loader-prototype.herokuapp.com/components/loader

import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { CSSTransition } from 'react-transition-group';
import hexRgb from 'hex-rgb';
import { Spinner } from '@govuk-react/icons';
import { BLACK, WHITE } from 'govuk-colours';

const spinnerClassName = 'icon-loading';

const Wrapper = glamorous.div({
  position: 'relative',
  paddingBottom: '2px',
  minHeight: '100px',
});

const Innerwrap = glamorous.div(({
  timeIn,
  timeOut,
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
  [`& .${spinnerClassName}`]: {
    position: 'absolute',
    zIndex: 101,
    opacity: 1,
    display: 'block',
    height: '100%',
    maxHeight: 'calc(50vh + 100px)',
    transition: `opacity ${timeIn}ms ease-in-out`,
  },
  '& .overlay': {
    zIndex: 100,
    transition: `background-color ${timeIn}ms ease-in-out`,
    backgroundColor: `rgba(
      ${hexRgb(backgroundColor)[0]},
      ${hexRgb(backgroundColor)[1]},
      ${hexRgb(backgroundColor)[2]},
      ${backgroundColorOpacity})`,
  },
  '.fade-enter': {
    '& .overlay': {
      backgroundColor: `rgba(
        ${hexRgb(backgroundColor)[0]},
        ${hexRgb(backgroundColor)[1]},
        ${hexRgb(backgroundColor)[2]},
        0)`,
      transitionDuration: `${timeIn}ms`,
    },
    [`& .${spinnerClassName}`]: {
      opacity: 0,
      transitionDuration: `${timeIn}ms`,
      transitionDelay: `${timeIn / 2}ms`,
    },
  },
  '.fade-enter-active': {
    '& .overlay': {
      backgroundColor: `rgba(
        ${hexRgb(backgroundColor)[0]},
        ${hexRgb(backgroundColor)[1]},
        ${hexRgb(backgroundColor)[2]},
        ${backgroundColorOpacity})`,
      transitionDuration: `${timeIn}ms`,
    },
    [`& .${spinnerClassName}`]: {
      opacity: 1,
      transitionDuration: `${timeIn}ms`,
      transitionDelay: `${timeIn / 2}ms`,
    },
  },
  '.fade-exit': {
    '& .overlay': {
      backgroundColor: `rgba(
        ${hexRgb(backgroundColor)[0]},
        ${hexRgb(backgroundColor)[1]},
        ${hexRgb(backgroundColor)[2]},
        ${backgroundColorOpacity})`,
      transitionDuration: `${timeOut}ms`,
    },
    [`& .${spinnerClassName}`]: {
      opacity: 1,
      transitionDuration: `${timeOut}ms`,
    },
  },
  '.fade-exit-active': {
    '& .overlay': {
      backgroundColor: `rgba(
        ${hexRgb(backgroundColor)[0]},
        ${hexRgb(backgroundColor)[1]},
        ${hexRgb(backgroundColor)[2]},
        0)`,
      transitionDuration: `${timeOut}ms`,
    },
    [`& .${spinnerClassName}`]: {
      opacity: 0,
      transitionDuration: `${timeOut}ms`,
    },
  },
}));

const Overlay = glamorous.div('overlay', {
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
  title,
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
        <Spinner title={title} className={spinnerClassName} fill={spinnerColor} width="50px" height="50px" />
        <Overlay />
      </Innerwrap>
    </CSSTransition>
    {children}
  </Wrapper>
);

LoadingBox.defaultProps = {
  spinnerColor: BLACK,
  backgroundColor: WHITE,
  backgroundColorOpacity: 0.85,
  title: undefined,
  loading: false,
  timeIn: 800,
  timeOut: 200,
};

LoadingBox.propTypes = {
  children: PropTypes.node.isRequired,
  spinnerColor: PropTypes.string,
  // hex colour 3 or 6 characters (with or without hash)
  backgroundColor: PropTypes.string,
  backgroundColorOpacity: PropTypes.number,
  title: PropTypes.string,
  loading: PropTypes.bool,
  // length of fade-in animation in milliseconds
  timeIn: PropTypes.number,
  // length of fade-out animation in milliseconds
  timeOut: PropTypes.number,
};

export default LoadingBox;
