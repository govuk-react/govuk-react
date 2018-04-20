import React from 'react';
import PropTypes from 'prop-types';

import SVG from '../SVGBase/index';

const ButtonArrow = ({ fill, title, ...rest }) => (
  <SVG viewBox="0 0 706 860" title={title} fill={fill} {...rest}>
    <g>
      <polygon points="0.15234375 0 253.145018 0 705.25342 430 452.260746 430" />
      <polygon fillOpacity="0.5" transform="translate(352.550538, 645.000000) scale(1, -1) translate(-352.550538, -645.000000) " points="0 430 252.992674 430 705.101076 860 452.108402 860" />
    </g>
  </SVG>
);

ButtonArrow.propTypes = {
  title: PropTypes.string,
  fill: PropTypes.string,
};

ButtonArrow.defaultProps = {
  title: 'ButtonArrow',
  fill: 'currentColor',
};

export default ButtonArrow;
