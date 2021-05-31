import React from 'react';
import PropTypes from 'prop-types';

const SVG = ({ children, fill, title, ...rest }) => (
  <svg version="1.1" fill={fill} width="100%" height="100%" style={{ display: 'block' }} {...rest}>
    <title>{title}</title>
    {children}
  </svg>
);

SVG.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  fill: PropTypes.string,
};

SVG.defaultProps = {
  children: undefined,
  title: undefined,
  fill: 'currentColor',
};

export default SVG;
