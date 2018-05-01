import React from 'react';
import PropTypes from 'prop-types';

const SVG = ({
  children, fill, title, className, ...rest
}) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="100%"
    height="100%"
    className={className}
    style={{ display: 'block' }}
    fill={fill}
    viewBox="-0.2 0 17 14" // TODO: #238 why?
    {...rest}
  >
    <title>{title}</title>
    {children}
  </svg>
);

SVG.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
  fill: PropTypes.string,
};

SVG.defaultProps = {
  className: undefined,
  title: undefined,
  fill: 'currentColor',
};

export default SVG;
