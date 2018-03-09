import React from 'react';
import PropTypes from 'prop-types';

const SVG = ({ children, colour, title }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="17"
    height="13"
    style={{ display: 'block' }}
    fill={colour}
    viewBox="0 0 17 13"
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
