// https://govuk-loader-prototype.herokuapp.com/components/loader

import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import SVG from '../SVGBase/index';

const fadeInOut = keyframes`
  0% { opacity: 0.250075; }
  0.01% { opacity: 0.25; }
  0.03% { opacity: 1; }
  100% { opacity: 0.250075; }
`;

const Rect = styled.rect`
  animation: ${fadeInOut} 1s infinite linear;
`;

const Spinner = ({ className, fill, title, ...rest }) => (
  <SVG
    className={className}
    viewBox="-25 -25 50 50"
    preserveAspectRatio="xMidYMid meet"
    title={title}
    fill={fill}
    {...rest}
  >
    {Array(12)
      .fill(1)
      .map((el, i) => (
        <Rect
          fill={fill}
          width="12"
          height="5"
          rx="2.5"
          ry="2.5"
          style={{ animationDelay: `${i * 83}ms` }}
          transform={`rotate(${i * 30}, 0, 2) translate(10 0)`}
          opacity="0"
          /* eslint-disable-next-line react/no-array-index-key */
          key={i}
        />
      ))}
  </SVG>
);

Spinner.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  fill: PropTypes.string,
};

Spinner.defaultProps = {
  className: 'icon-spinner',
  title: 'Loading',
  fill: 'currentColor',
};

export default Spinner;
