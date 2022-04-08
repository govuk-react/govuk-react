import * as React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import hexRgb from 'hex-rgb';
import { Spinner } from '@govuk-react/icons';
import { BLACK, WHITE } from 'govuk-colours';

const spinnerClassName = 'icon-loading';

const StyledContainer = styled('div')({
  position: 'relative',
  paddingBottom: '2px',
  minHeight: '10px',
});

const Innerwrap = styled('div')<{
  timeIn: number;
  timeOut: number;
  backgroundColor: string;
  backgroundColorOpacity: number;
}>(({ timeIn, timeOut, backgroundColor, backgroundColorOpacity }) => ({
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
    willChange: 'opacity',
  },
  '& .overlay': {
    zIndex: 100,
    transition: `background-color ${timeIn}ms ease-in-out`,
    willChange: 'background-color',
    backgroundColor: `rgba(
      ${hexRgb(backgroundColor).red},
      ${hexRgb(backgroundColor).blue},
      ${hexRgb(backgroundColor).green},
      ${backgroundColorOpacity})`,
  },
  '&.fade-enter': {
    '& .overlay': {
      backgroundColor: `rgba(
        ${hexRgb(backgroundColor).red},
        ${hexRgb(backgroundColor).blue},
        ${hexRgb(backgroundColor).green},
        0)`,
      transitionDuration: `${timeIn}ms`,
    },
    [`& .${spinnerClassName}`]: {
      opacity: 0,
      transitionDuration: `${timeIn}ms`,
      transitionDelay: `${timeIn / 2}ms`,
    },
  },
  '&.fade-enter-active': {
    '& .overlay': {
      backgroundColor: `rgba(
        ${hexRgb(backgroundColor).red},
        ${hexRgb(backgroundColor).blue},
        ${hexRgb(backgroundColor).green},
        ${backgroundColorOpacity})`,
      transitionDuration: `${timeIn}ms`,
    },
    [`& .${spinnerClassName}`]: {
      opacity: 1,
      transitionDuration: `${timeIn}ms`,
      transitionDelay: `${timeIn / 2}ms`,
    },
  },
  '&.fade-exit': {
    '& .overlay': {
      backgroundColor: `rgba(
        ${hexRgb(backgroundColor).red},
        ${hexRgb(backgroundColor).blue},
        ${hexRgb(backgroundColor).green},
        ${backgroundColorOpacity})`,
      transitionDuration: `${timeOut}ms`,
    },
    [`& .${spinnerClassName}`]: {
      opacity: 1,
      transitionDuration: `${timeOut}ms`,
    },
  },
  '&.fade-exit-active': {
    '& .overlay': {
      backgroundColor: `rgba(
        ${hexRgb(backgroundColor).red},
        ${hexRgb(backgroundColor).blue},
        ${hexRgb(backgroundColor).green},
        0)`,
      transitionDuration: `${timeOut}ms`,
    },
    [`& .${spinnerClassName}`]: {
      opacity: 0,
      transitionDuration: `${timeOut}ms`,
    },
  },
}));

const Overlay = styled('div')({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  overflow: 'hidden',
  height: '100%',
  width: '100%',
});

/**
 * Use a LoadingBox to wrap components that can asyncronously load content.
 *
 * When `loading` is set to `true`, a spinner will overlay the contents to give visual feedback to the user.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/loading-box
 */
export const LoadingBox: React.FC<LoadingBoxProps> = ({
  children,
  backgroundColor,
  backgroundColorOpacity,
  title,
  loading,
  spinnerColor,
  timeIn,
  timeOut,
  ...props
}: LoadingBoxProps) => {
  const nodeRef = React.useRef(null);
  return (
    <StyledContainer {...props}>
      <CSSTransition nodeRef={nodeRef} timeout={timeOut} classNames="fade" in={loading} unmountOnExit>
        <Innerwrap
          ref={nodeRef}
          backgroundColor={backgroundColor}
          backgroundColorOpacity={backgroundColorOpacity}
          timeIn={timeIn}
          timeOut={timeOut}
        >
          <Spinner title={title} className={spinnerClassName} fill={spinnerColor} width="50px" height="50px" />
          <Overlay className="overlay" />
        </Innerwrap>
      </CSSTransition>
      {children}
    </StyledContainer>
  );
};

LoadingBox.defaultProps = {
  spinnerColor: BLACK,
  backgroundColor: WHITE,
  backgroundColorOpacity: 0.85,
  title: undefined,
  loading: false,
  timeIn: 800,
  timeOut: 200,
};

LoadingBox.displayName = 'LoadingBox';

export interface LoadingBoxProps {
  /**
   * One or more children nodes that loading box will overlay
   */
  children: React.ReactNode;
  /**
   * Color (3 or 6 Hex char) of loading spinner
   */
  spinnerColor?: string;
  /**
   * Background color (3 or 6 Hex char) of loading spinner overlay when loading is true.
   */
  backgroundColor?: string;
  /**
   * Opacity of loading spinner backgroud colour when loading is true
   */
  backgroundColorOpacity?: number;
  /**
   * Loading spinner title text
   */
  title?: string;
  /**
   * Whether loading is currently set to true or false
   */
  loading?: boolean;
  /**
   * Length of fade-in animation in milliseconds
   */
  timeIn?: number;
  /**
   * Length of fade-out animation in milliseconds
   */
  timeOut?: number;
}
export default LoadingBox;
