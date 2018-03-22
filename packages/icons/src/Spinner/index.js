// https://govuk-loader-prototype.herokuapp.com/components/loader

import React from 'react';
import PropTypes from 'prop-types';
import * as glamor from 'glamor';
import glamorous from 'glamorous';

import SVG from '../SVGBase/index';

const animationStyles = () => {
  const fadeInOut = glamor.css.keyframes({
    '0%': { opacity: '0.250075' },
    '0.01%': { opacity: '0.25' },
    '0.03%': { opacity: '1' },
    '100%': { opacity: '0.250075' },
  });
  return { animation: `${fadeInOut} 1s infinite linear` };
};

const Rect = glamorous.rect(animationStyles);

const Spinner = ({ fill, title, ...rest }) => (
  <SVG viewBox="-50 -50 100 100" preserveAspectRatio="xMidYMid meet" title={title} fill={fill} {...rest}>
    {Array(12).fill(1).map((el, i) =>
      /* eslint-disable react/no-array-index-key */
      <Rect fill={fill} width="12" height="5" rx="2.5" ry="2.5" style={{ animationDelay: `${i * 83}ms` }} transform={`rotate(${i * 30}, 0, 2) translate(10 0)`} opacity="0" key={i} />)}
  </SVG>
);

Spinner.propTypes = {
  title: PropTypes.string,
  fill: PropTypes.string,
};

Spinner.defaultProps = {
  title: 'Loading',
  fill: 'currentColor',
};

export default Spinner;
