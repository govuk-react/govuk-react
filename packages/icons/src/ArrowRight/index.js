import React from 'react';
import PropTypes from 'prop-types';

const ArrowRight = ({ colour, title, ...rest }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="100%"
    height="100%"
    style={{ display: 'block' }}
    fill={colour}
    viewBox="0 0 17 13"
    {...rest}
  >
    <title>{title}</title>
    <path d="m10.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z" />
  </svg>
);

ArrowRight.propTypes = {
  colour: PropTypes.string,
  title: PropTypes.string,
};

ArrowRight.defaultProps = {
  colour: 'inherit',
  title: 'arrow right',
};

export default ArrowRight;
