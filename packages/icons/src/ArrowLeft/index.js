import React from 'react';
import PropTypes from 'prop-types';

import SVG from '../SVGBase/index';

const ArrowLeft = ({ colour, title, ...rest }) => (
  <SVG title={title} colour={colour} {...rest}>
    <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z" />
  </SVG>
);

ArrowLeft.propTypes = {
  title: PropTypes.string,
  colour: PropTypes.string,
};

ArrowLeft.defaultProps = {
  title: 'arrow left',
  colour: 'currentColor',
};

export default ArrowLeft;
