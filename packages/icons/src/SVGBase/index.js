import React from 'react';
import PropTypes from 'prop-types';

const SVG = ({
  children, colour, title, ...rest
}) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="100%"
    height="100%"
    style={{ display: 'block' }}
    fill={colour}
    viewBox="-0.2 0 17 14"
    {...rest}
  >
    <title>{title}</title>
    {children}
  </svg>
);

SVG.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  colour: PropTypes.string,
};

SVG.defaultProps = {
  title: undefined,
  colour: 'inherit',
};

export default SVG;
