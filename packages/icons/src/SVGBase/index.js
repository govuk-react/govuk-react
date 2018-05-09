import React from 'react';
import PropTypes from 'prop-types';

const SVG = ({
  children, fill, title, ...rest
}) => (
  <svg
    version="1.1"
    fill={fill}
    {...rest}
  >
    <title>{title}</title>
    {children}
  </svg>
);

SVG.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  fill: PropTypes.string,
};

SVG.defaultProps = {
  title: undefined,
  fill: 'currentColor',
};

export default SVG;
