import React from 'react';
import PropTypes from 'prop-types';

import SVG from '../SVGBase/index';

const ArrowRight = ({ fill, title, ...rest }) => (
  <SVG viewBox="0 0 17 14" title={title} fill={fill} {...rest}>
    <path d="m10.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z" />
  </SVG>
);

ArrowRight.propTypes = {
  title: PropTypes.string,
  fill: PropTypes.string,
};

ArrowRight.defaultProps = {
  title: 'arrow right',
  fill: 'currentColor',
};

export default ArrowRight;
